import { createFileRoute, Link } from "@tanstack/react-router";
import { WorkMasonry } from "@/components/work-masonry";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Webbly Studio" },
      { name: "description", content: "Selected websites, brands, and product UI built by Webbly for founders and ambitious teams." },
      { property: "og:title", content: "Work — Webbly Studio" },
      { property: "og:description", content: "Selected websites, brands, and product UI by Webbly." },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="text-xs uppercase tracking-widest text-mint mb-4">The work</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[0.95]">
            Sites we've shipped for <span className="text-gradient-mint">clients who ship.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A rolling selection of recent projects across SaaS, e-commerce, fintech, and hospitality.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-16">
        <WorkMasonry />
      </section>
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Your project, next on the list?</h2>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors"
          >
            Let's talk <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}