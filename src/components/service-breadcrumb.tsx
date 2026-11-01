// Small breadcrumb rendered at the top of each service landing page's hero.
// Links back to the Szolgáltatások hub page so visitors can move between the
// hub and the individual service pages. The styles are scoped to `.crumb`
// (inline, like RelatedServices) so the big SITE_CSS string stays untouched.
const CRUMB_CSS = `.crumb{display:inline-flex;align-items:center;gap:.45em;font:600 14px/1 Barlow,Arial,sans-serif;
text-decoration:none;color:rgba(255,255,255,.92);background:rgba(14,26,24,.45);
border:1px solid rgba(255,255,255,.24);border-radius:99px;padding:.5em 1em .5em .9em;
margin-bottom:30px;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);
width:fit-content;max-width:100%;flex-wrap:wrap}
.crumb a{color:inherit;text-decoration:none}
.crumb a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
.crumb .sep{opacity:.55}
.crumb .cur{font-weight:800}`;

export function ServiceBreadcrumb({ current }: { current: string }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CRUMB_CSS }} />
      <nav className="crumb" aria-label="Szolgáltatások">
        <a href="/szolgaltatasok">Szolgáltatások</a>
        <span className="sep" aria-hidden="true">
          ›
        </span>
        <span className="cur">{current}</span>
      </nav>
    </>
  );
}
