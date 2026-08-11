const PROJECTS = [
  {
    title: "Ethicsverse Day Toolkits — Wave 2",
    detail: "4 more behavioral science toolkits, 5 resources each, with an accompanying email graphic.",
    status: "In Progress",
  },
  {
    title: "SanctionCheck Playbook",
    detail: "New product playbook and supporting collateral.",
    status: "In Progress",
  },
  {
    title: "CAP User Guide",
    detail: "System user guide for the CAP module.",
    status: "In Progress",
  },
  {
    title: "Ethel Updates",
    detail: "Refreshed product pager and campaign assets for Ethel.",
    status: "In Progress",
  },
  {
    title: "Policy+ Product Email Push",
    detail: "Next wave of the ongoing Policy+ launch campaign engine.",
    status: "Ongoing",
  },
]

export default function TabNewProjects() {
  return (
    <div className="anim-fade-in space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-[#FF007A]/30 bg-gradient-to-br from-[#1a1030] via-[#121A2E] to-[#0B111E] p-8">
        <span className="inline-block rounded-full border border-[#00F5D4]/30 bg-[#00F5D4]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#00F5D4]">
          On the Roadmap
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance">New Projects</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          Active and upcoming design work currently moving through the pipeline.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <div
            key={p.title}
            className="group flex flex-col gap-3 rounded-2xl border border-slate-800 bg-[#121A2E] p-6 transition-all hover:-translate-y-0.5 hover:border-[#FF007A]/40"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="h-2 w-2 rounded-full bg-[#FF007A] shadow-[0_0_10px_rgba(255,0,122,0.7)]" />
              <span className="rounded-full border border-slate-700 bg-slate-900/70 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {p.status}
              </span>
            </div>
            <h3 className="text-base font-bold text-white text-balance">{p.title}</h3>
            <p className="text-sm leading-relaxed text-slate-400">{p.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
