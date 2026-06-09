import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { WorkMasonry } from "@/components/work-masonry";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Webbly — Websites that compound, not just convert" },
      { name: "description", content: "Webbly is an independent digital studio designing and building modern websites for ambitious brands." },
      { property: "og:title", content: "Webbly — Websites that compound, not just convert" },
      { property: "og:description", content: "An independent digital studio designing and building modern websites for ambitious brands." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <WhatWeDo />
      <Logos />
      <FeaturedWork />
      <Process />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-mint/20 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-28 md:pt-32 md:pb-40">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-[0_0_10px_var(--mint)]" />
          Booking Q3 2026 — 4 slots remaining!
        </div>
        <h1 className="mt-6 font-display font-bold tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
        We build websites that help businesses<span className="text-gradient-mint">get more customers.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl">
          Webbly is a website design and development agency. We design, build, launch,
          and continuously improve websites that help businesses grow online.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors glow-mint"
          >
            Start a project <span aria-hidden>→</span>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold hover:border-mint hover:text-mint transition-colors"
          >
            See the work
          </Link>
        </div>
        <dl className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl">
          {[
            ["20+", "Sites shipped"],
            ["3 wks", "Avg. timeline"],
            ["4.9★", "Client rating"],
            ["98k", "Views on websites made for clients"],
          ].map(([n, l]) => (
            <div key={l}>
              <dt className="font-display text-3xl md:text-4xl font-bold text-foreground">{n}</dt>
              <dd className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function WhatWeDo() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-4xl">
        <div className="text-xs uppercase tracking-widest text-mint mb-3">
          What we do
        </div>

        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
          Your website shouldn't be holding your business back.
        </h2>

        <p className="mt-6 text-lg text-muted-foreground max-w-3xl">
          Whether you're launching a new business, refreshing an outdated site,
          or trying to generate more leads online, Webbly handles the entire
          process—from strategy and design to development, launch, SEO, and
          ongoing improvements.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold">Website Design</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Modern designs built around trust, clarity, and conversion.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Website Development</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Fast, responsive, SEO-friendly websites built for growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Ongoing Growth</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              We help improve performance long after launch.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logos() {
  const logos = ["Halcyon", "Atelier Nord", "Northcard", "Monolith", "Lumen", "Maison Lumière"];
  return (
    <section className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        <span className="text-xs uppercase tracking-widest text-muted-foreground mr-2">Trusted by</span>
        {logos.map((l) => (
          <span key={l} className="font-display text-xl md:text-2xl font-semibold text-muted-foreground/70 hover:text-foreground transition-colors">
            {l}
          </span>
        ))}
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="text-xs uppercase tracking-widest text-mint mb-3">Selected work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight max-w-2xl">
            A few favorites from the studio.
          </h2>
        </div>
        <Link to="/work" className="text-sm text-muted-foreground hover:text-mint inline-flex items-center gap-2">
          View all projects <span aria-hidden>→</span>
        </Link>
      </div>
      <WorkMasonry limit={6} />
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Discover", d: "We pressure-test the brief, audit the market, and align on what 'great' actually looks like for your business." },
    { n: "02", t: "Design", d: "Direction, system, and screens — built in the browser from week one, not stuck in a Figma file." },
    { n: "03", t: "Build", d: "Modern, fast, accessible. Next-gen stack, hand-rolled animation, ready for SEO and growth experiments." },
    { n: "04", t: "Grow", d: "We don't disappear at launch. Ongoing iteration, CRO, and content support keep the site compounding." },
  ];
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-widest text-mint mb-3">How we work</div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            One small team. Four sharp phases.
          </h2>
        </div>
        <div className="mt-16 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 hover:bg-surface transition-colors">
              <div className="font-display text-mint text-sm tracking-widest">{s.n}</div>
              <h3 className="mt-4 font-display text-2xl font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-16">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-mint/30 blur-[120px]" />
        <div className="relative max-w-3xl">
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            Got a project in mind?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tell us what you're building. We'll send back a clear scope, timeline, and price within 48 hours.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors"
          >
            Start the conversation <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
