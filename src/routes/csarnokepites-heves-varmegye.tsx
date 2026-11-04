import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect: the csarnoképítés service page was removed and folded
// into the Szolgáltatások hub. Direct HTTP requests get a real 301 (permanent)
// via the server handler; client-side SPA navigations redirect too.
export const Route = createFileRoute("/csarnokepites-heves-varmegye")({
  beforeLoad: () => {
    throw redirect({ to: "/szolgaltatasok" });
  },
  server: {
    handlers: {
      GET: async () =>
        new Response(null, {
          status: 301,
          headers: { Location: "/szolgaltatasok" },
        }),
    },
  },
  component: () => null,
});
