// Shared ajánlatkérő űrlap for the service landing pages: name, phone, type of
// work, short description — the same fields and the same submission method as
// the homepage form. On submit it builds a mailto: link to
// grandnatural2010@gmail.com (so the visitor's mail client opens with the
// details prefilled) and fires a fire-and-forget CRM tracking event using the
// connected form_tracking integration. The CRM IDs come from the integration;
// the work-type select is the same custom field the homepage already uses.
import { useRef, useState, type FormEvent } from "react";

const EMAIL = "grandnatural2010@gmail.com";
const TRACKING_ID = "tk_e5da04a093dd44059979431bee8d9203";
const LOCATION_ID = "o9nl9NLLuguzw8wf9pWu";
const PROJECT_ID = "1793461824715116291";
// Custom field already registered/used by the homepage form for "Munka típusa".
const WORK_TYPE_FIELD_ID = "ei7PBcc6PH8G9oclWL5h";

const WORK_TYPES = [
  "Lakatosmunkák",
  "Egyedi acélszerkezetek",
  "Daruzás és fuvarozás",
  "Helyszíni kivitelezés",
  "Felújítás és karbantartás",
  "Egyéb",
];

type Props = {
  formId?: string;
  formName?: string;
};

export function QuoteForm({ formId = "ajanlatkeres-form", formName = "Ajánlatkérő űrlap" }: Props) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  // Reuse the published site's analytics session (set by /__vibe/analytics.js)
  // so the submission joins the visit's page views; fall back to a fresh id
  // when it is absent or document.cookie throws in a sandboxed iframe.
  const getTrackingSessionId = () => {
    try {
      const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
      if (sid) return sid;
    } catch {}
    return crypto.randomUUID();
  };

  const postTrackingEvent = (
    trackingPayload: Record<string, unknown> & {
      formData: Record<string, unknown>;
      formLabels: Record<string, string>;
    },
    options: {
      customFields?: Record<string, { value?: unknown; label: string }>;
    } = {},
  ) => {
    const { customFields = {} } = options;
    const eventPayload = {
      ...trackingPayload,
      formData: { ...trackingPayload.formData },
      formLabels: { ...trackingPayload.formLabels },
    };
    for (const [key, field] of Object.entries(customFields)) {
      if (field.value === undefined || field.value === "") continue;
      eventPayload.formData[key] = field.value;
      eventPayload.formLabels[key] = field.label;
    }
    for (const key of Object.keys(eventPayload.formData)) {
      eventPayload.formLabels[key] ||= key;
    }
    const body = new FormData();
    body.append("event", JSON.stringify(eventPayload));
    void fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
      method: "POST",
      headers: { version: "2021-07-28" },
      body,
    }).catch(() => {});
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const f = (form as unknown as { elements: Record<string, HTMLInputElement> }).elements as any;
    const body =
      "Név: " +
      f.n.value +
      "\nTelefonszám: " +
      f.t.value +
      "\nE-mail: " +
      f.e.value +
      "\nMunka típusa: " +
      f.k.value +
      "\n\n" +
      f.d.value;
    setStatus(
      "Megnyitjuk az e-mail programját. Ha nem történik semmi, hívjon: +36 70 576 0108, vagy írjon: grandnatural2010@gmail.com",
    );

    // Fire-and-forget CRM tracking (standard fields here; work type is custom).
    postTrackingEvent(
      {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId,
        formData: {
          phone: f.t.value,
          email: f.e.value,
          calendar_notes: f.d.value,
        },
        formLabels: {
          phone: "Telefonszám",
          email: "E-mail",
          calendar_notes: "Üzenet",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: TRACKING_ID,
        locationId: LOCATION_ID,
        projectId: PROJECT_ID,
        sessionId: getTrackingSessionId(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "mobile" : "desktop",
          source: "ai_studio",
          projectId: PROJECT_ID,
          formName,
        },
      },
      {
        customFields: {
          [WORK_TYPE_FIELD_ID]: { value: f.k.value, label: "Munka típusa" },
        },
      },
    );

    window.location.href =
      "mailto:" +
      EMAIL +
      "?subject=" +
      encodeURIComponent("Ajánlatkérés" + (f.k.value ? " – " + f.k.value : "")) +
      "&body=" +
      encodeURIComponent(body);
  };

  return (
    <form ref={formRef} onSubmit={onSubmit}>
      <h3>Ajánlatkérő űrlap</h3>
      <label>
        Név *
        <input name="n" required autoComplete="name" />
      </label>
      <div className="f2">
        <label>
          Telefonszám *
          <input name="t" type="tel" required autoComplete="tel" placeholder="+36 …" />
        </label>
        <label>
          E-mail cím
          <input name="e" type="email" autoComplete="email" />
        </label>
      </div>
      <label>
        Milyen munkával kapcsolatban érdeklődik?
        <select name="k">
          <option value="">Válasszon munkatípust…</option>
          {WORK_TYPES.map((w) => (
            <option key={w}>{w}</option>
          ))}
        </select>
      </label>
      <label>
        Munka rövid leírása
        <textarea name="d" placeholder="Írja le röviden az elképzelést vagy a kívánt méreteket…" />
      </label>
      <button className="pill" type="submit" style={{ justifySelf: "start" }}>
        Ajánlatkérés küldése<i>→</i>
      </button>
      <p role="status" style={{ margin: 0, minHeight: "1.4em", fontSize: 16, fontWeight: 600 }}>
        {status}
      </p>
    </form>
  );
}
