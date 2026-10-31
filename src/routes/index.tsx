import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blank Workspace" },
      {
        name: "description",
        content: "A blank workspace ready for your GitHub import.",
      },
      { property: "og:title", content: "Blank Workspace" },
      {
        property: "og:description",
        content: "A blank workspace ready for your GitHub import.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground">Blank Workspace</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This workspace is empty and ready for your code. Connect it to GitHub from the builder and
          import the website you created.
        </p>
      </div>
    </div>
  );
}
