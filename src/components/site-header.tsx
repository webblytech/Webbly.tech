import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md bg-mint text-primary-foreground font-display font-bold">
            N
            <span className="absolute inset-0 rounded-md bg-mint blur-md opacity-60 group-hover:opacity-90 transition-opacity -z-10" />
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            Webbly<span className="text-mint">.</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 text-sm">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="px-3 py-2 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 rounded-md text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-mint text-primary-foreground px-4 py-2 text-sm font-semibold hover:bg-mint-glow transition-colors"
        >
          Start a project
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}