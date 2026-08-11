// Small presentational helpers for the many external resource links.

export function LinkRow({ href, label, accent = "#FF007A", meta }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/70 p-3.5 font-mono text-xs text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[color:var(--tile-accent)] hover:text-white"
      style={{ "--tile-accent": accent }}
    >
      <span className="text-pretty">{label}</span>
      {meta ? (
        <span className="text-[10px] text-slate-500">{meta}</span>
      ) : (
        <span style={{ color: accent }} className="transition-transform group-hover:translate-x-0.5">
          ↗
        </span>
      )}
    </a>
  )
}

export function ResourceCard({ href, kind, kindColor = "#FF007A", title }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/70 p-4 transition-all hover:-translate-y-0.5 hover:border-[color:var(--card-accent)]"
      style={{ "--card-accent": kindColor }}
    >
      <span className="font-mono text-[11px] uppercase tracking-wider" style={{ color: kindColor }}>
        {kind}
      </span>
      <h4 className="mt-3 text-sm font-bold text-white transition-colors group-hover:text-[color:var(--card-accent)]">
        {title} <span aria-hidden="true">↗</span>
      </h4>
    </a>
  )
}
