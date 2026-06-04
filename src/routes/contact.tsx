import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Webbly Studio" },
      { name: "description", content: "Tell us about your project. We respond to every inquiry within 48 hours." },
      { property: "og:title", content: "Contact — Webbly Studio" },
      { property: "og:description", content: "Tell us about your project. We respond within 48 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="border-b border-border/60 relative overflow-hidden">
        <div className="absolute -top-32 left-1/3 h-[420px] w-[620px] rounded-full bg-mint/15 blur-[140px]" />
        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28">
          <div className="text-xs uppercase tracking-widest text-mint mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight max-w-4xl leading-[0.95]">
            Tell us what you're <span className="text-gradient-mint">building.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We respond to every project inquiry within 48 hours with a clear next step.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="space-y-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Email</div>
            <a href="mailto:hello@webbly.studio" className="font-display text-2xl font-semibold hover:text-mint">
              hello@webbly.studio
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Phone</div>
            <div className="font-display text-2xl font-semibold">+1 (415) 555-0148</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Studio</div>
            <div className="text-muted-foreground">
              548 Market Street<br />San Francisco, CA<br />Remote-first, worldwide.
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-surface p-6">
            <div className="text-xs uppercase tracking-widest text-mint mb-2">Availability</div>
            <div className="font-display text-lg font-semibold">Booking Q3 2026 — 2 slots</div>
            <p className="mt-2 text-sm text-muted-foreground">Typical engagement runs 6–10 weeks.</p>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="rounded-2xl border border-border bg-surface p-8 md:p-10 space-y-6"
        >
          {sent ? (
            <div className="text-center py-16">
              <div className="font-display text-3xl font-bold">Thanks — message received.</div>
              <p className="mt-3 text-muted-foreground">We'll be in touch within 48 hours.</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Name" name="name" placeholder="Jane Doe" />
                <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
              </div>
              <Field label="Company" name="company" placeholder="Acme Inc." />
              <div>
                <Label>Project type</Label>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Brand", "Website", "Web app", "Growth retainer", "Not sure yet"].map((t) => (
                    <label key={t} className="cursor-pointer">
                      <input type="checkbox" name="type" value={t} className="peer sr-only" />
                      <span className="inline-block rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground hover:border-mint hover:text-mint peer-checked:bg-mint peer-checked:text-primary-foreground peer-checked:border-mint transition-colors">
                        {t}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <Label>Budget</Label>
                <select
                  name="budget"
                  className="mt-2 w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:border-mint focus:outline-none"
                >
                  <option>Under $10k</option>
                  <option>$10k – $25k</option>
                  <option>$25k – $60k</option>
                  <option>$60k+</option>
                  <option>Let's discuss</option>
                </select>
              </div>
              <div>
                <Label>Tell us about the project</Label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Goals, timeline, references…"
                  className="mt-2 w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:border-mint focus:outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-mint-glow transition-colors glow-mint"
              >
                Send inquiry <span aria-hidden>→</span>
              </button>
            </>
          )}
        </form>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs uppercase tracking-widest text-muted-foreground">{children}</span>;
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full rounded-lg bg-background border border-border px-4 py-3 text-sm focus:border-mint focus:outline-none"
      />
    </div>
  );
}