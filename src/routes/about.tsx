import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Webbly Studio" },
      { name: "description", content: "Webbly is a small, senior, fully-remote studio building websites for ambitious teams." },
      { property: "og:title", content: "About — Webbly Studio" },
      { property: "og:description", content: "A small, senior, fully-remote studio building websites for ambitious teams." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="text-xs uppercase tracking-widest text-mint mb-4">About</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-5xl leading-[0.95]">
            We're a small studio that <span className="text-gradient-mint">ships big work.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Six senior designers and engineers. No middle management, no handoffs to junior teams — just the people who pitched you, doing the work.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 md:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold">What we believe</h2>
          <ul className="mt-8 space-y-6 text-muted-foreground">
            {[
              ["Taste is a skill.", "Great design isn't subjective — it's the result of thousands of small, deliberate decisions."],
              ["Ship the work.", "We design in the browser. Static mockups lie; real product doesn't."],
              ["Stay small, stay sharp.", "We cap ourselves at six clients a quarter so every project gets our best."],
              ["Build for compound interest.", "A site shouldn't peak at launch. We build for the year after."],
            ].map(([t, d]) => (
              <li key={t}>
                <div className="font-display text-foreground text-lg font-semibold">{t}</div>
                <div className="mt-1 text-sm leading-relaxed">{d}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-border bg-surface p-8">
            <div className="text-xs uppercase tracking-widest text-mint">Studio</div>
            <h3 className="mt-4 font-display text-3xl font-bold">Webbly, est. 2021</h3>
            <p className="mt-3 text-muted-foreground">
              Founded by alumni of Stripe, Linear, and Pentagram. Headquartered in San Francisco, working with teams across NA & EU.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              ["120+", "Projects shipped"],
              ["38", "Countries served"],
              ["6", "People on the team"],
              ["91%", "Repeat clients"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-2xl border border-border bg-surface p-6">
                <div className="font-display text-3xl font-bold text-mint">{n}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors"
          >
            Work with us <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}