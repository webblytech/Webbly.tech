import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Webbly Studio" },
      { name: "description", content: "Brand, website design, web development, and growth retainers from Webbly Studio." },
      { property: "og:title", content: "Services — Webbly Studio" },
      { property: "og:description", content: "Brand, web design, development, and growth retainers." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Brand & Identity",
    price: "from $6k",
    desc: "Naming, logo systems, type and color systems, brand guidelines, and launch assets.",
    items: ["Brand strategy", "Visual identity", "Guidelines & assets", "Launch toolkit"],
  },
  {
    n: "02",
    title: "Website Design",
    price: "from $9k",
    desc: "Marketing sites, portfolios, and product sites — designed end-to-end with conversion in mind.",
    items: ["Information architecture", "Art direction", "UI design system", "Copy partnership"],
  },
  {
    n: "03",
    title: "Web Development",
    price: "from $12k",
    desc: "Fast, accessible, SEO-ready builds on a modern stack. CMS-driven and ready to scale.",
    items: ["Next-gen React stack", "Headless CMS", "Animation & motion", "Analytics & SEO"],
  },
  {
    n: "04",
    title: "Growth Retainer",
    price: "from $4k/mo",
    desc: "Ongoing iteration, CRO, content, and experiments — so your site keeps compounding.",
    items: ["A/B tests", "New pages & features", "Performance audits", "Monthly reporting"],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="border-b border-border/60 relative overflow-hidden">
        <div className="absolute -top-32 right-0 h-[420px] w-[620px] rounded-full bg-mint/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28">
          <div className="text-xs uppercase tracking-widest text-mint mb-4">Services</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[0.95]">
            Everything you need to ship a <span className="text-gradient-mint">great website.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Engaged as a full studio or a sharp set of specialists, dropped into your team.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-6 md:grid-cols-2">
        {services.map((s) => (
          <article key={s.n} className="group relative rounded-2xl border border-border bg-surface p-8 md:p-10 hover:border-mint transition-colors">
            <div className="flex items-baseline justify-between">
              <div className="font-display text-mint text-sm tracking-widest">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">{s.price}</div>
            </div>
            <h2 className="mt-6 font-display text-3xl md:text-4xl font-bold">{s.title}</h2>
            <p className="mt-3 text-muted-foreground">{s.desc}</p>
            <ul className="mt-6 grid grid-cols-2 gap-2 text-sm">
              {s.items.map((i) => (
                <li key={i} className="flex items-center gap-2 text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-mint" /> {i}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl border border-border bg-surface p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold">Not sure what you need?</h2>
            <p className="mt-2 text-muted-foreground">Tell us about the project — we'll recommend a scope.</p>
          </div>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors self-start md:self-auto"
          >
            Get a recommendation <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
}