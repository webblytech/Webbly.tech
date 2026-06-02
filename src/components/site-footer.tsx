import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 mt-32">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl font-bold tracking-tight">
            Let's build something <span className="text-gradient-mint">unforgettable.</span>
          </div>
          <p className="mt-3 text-muted-foreground max-w-md">
            Webbly is a digital studio crafting websites that win attention and convert.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-mint-glow transition-colors"
          >
            Book a call <span aria-hidden>→</span>
          </Link>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Studio</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-mint">Work</Link></li>
            <li><Link to="/services" className="hover:text-mint">Services</Link></li>
            <li><Link to="/about" className="hover:text-mint">About</Link></li>
            <li><Link to="/contact" className="hover:text-mint">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>hello@Webbly.studio</li>
            <li>+1 (415) 555-0148</li>
            <li>San Francisco · Remote</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Webbly Studio. All rights reserved.</span>
          <span>Designed & built in-house.</span>
        </div>
      </div>
    </footer>
  );
}