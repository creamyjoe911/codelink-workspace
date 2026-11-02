// Renders a JSON-LD <script> into the SSR HTML. JSON-LD is valid anywhere in
// the document, so this is placed in the route component body (it ships with
// the page's server-rendered markup) rather than in <head>, keeping it
// framework-head-option free.
export function JsonLd({ json }: { json: string }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
