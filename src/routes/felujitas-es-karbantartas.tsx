import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect: this service page moved to /felujitas-es-karbantartas-eger.
// Direct HTTP requests get a real 301 (permanent) via the server handler; client-side
// SPA navigations redirect too.
export const Route = createFileRoute("/felujitas-es-karbantartas")({
  beforeLoad: () => {
    throw redirect({ to: "/felujitas-es-karbantartas-eger" });
  },
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/felujitas-es-karbantartas-eger" },
        }),
    },
  },
  component: () => null,
});
