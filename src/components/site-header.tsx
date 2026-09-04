import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
            W
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
        <Sheet>
          <SheetTrigger className="inline-flex h-10 items-center justify-center gap-2 rounded-md px-3 text-sm font-semibold text-muted-foreground transition-colors hover:bg-surface hover:text-foreground md:hidden" aria-label="Open navigation menu">
            <Menu className="h-5 w-5" />
            <span>Menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(22rem,85vw)] bg-background px-6 pt-12">
            <SheetHeader className="text-left">
              <SheetTitle className="font-display text-2xl">Webbly<span className="text-mint">.</span></SheetTitle>
              <SheetDescription>Websites that grow businesses.</SheetDescription>
            </SheetHeader>
            <nav className="mt-10 flex flex-col gap-2">
              {nav.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    activeProps={{ className: "rounded-md bg-surface px-4 py-3 font-semibold text-foreground" }}
                    activeOptions={{ exact: item.to === "/" }}
                    className="rounded-md px-4 py-3 text-lg text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
            </nav>
            <SheetClose asChild>
              <Link
                to="/contact"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-mint-glow"
              >
                Start a project <span aria-hidden>→</span>
              </Link>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}