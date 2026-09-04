import { projects, type Project } from "@/data/projects";

function Card({ p }: { p: Project }) {
  const card = (
    <article className="group relative mb-6 break-inside-avoid overflow-hidden rounded-2xl border border-border/60 bg-surface">
      <div className="overflow-hidden">
        <img
          src={p.image}
          alt={`${p.client} — ${p.title}`}
          width={p.width}
          height={p.height}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent translate-y-2 opacity-90 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-mint">
          <span>{p.category}</span>
          <span className="text-muted-foreground">{p.year}</span>
        </div>
        <h3 className="mt-2 font-display text-xl md:text-2xl font-semibold text-foreground leading-tight">
          {p.title}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.client}</p>
      </div>
    </article>
  );

  return p.website ? (
    <a href={p.website} target="_blank" rel="noreferrer" className="block">
      {card}
    </a>
  ) : card;
}

export function WorkMasonry({ limit }: { limit?: number }) {
  const list = limit ? projects.slice(0, limit) : projects;
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
      {list.map((p) => (
        <Card key={p.slug} p={p} />
      ))}
    </div>
  );
}