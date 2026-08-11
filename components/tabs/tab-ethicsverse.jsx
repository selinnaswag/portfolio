const DECKS = [
  { href: "https://docs.google.com/presentation/d/166bFdaJhrI44ocRSk8hrliIJFc8WGjcgpmaPDe7uAh8/edit", label: "View Deck Example #1 ↗" },
  { href: "https://docs.google.com/presentation/d/13cLS9FvqOwBbIfUJeOkwL7JrUSHPh3bCilRjUx0iiLA/edit", label: "View Deck Example #2 ↗" },
]

const EMAILS = [
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/213649744000?portalId=6396478&preview_key=HwcLiMlD&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Email Example #1 ↗" },
  { href: "https://6396478.hs-sites.com/-temporary-slug-f290d981-d5b3-4e4f-a88d-24250aa28f4e?hs_preview=MvHqrKWC-215283907922", label: "Email Example #2 ↗" },
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/214778507132?portalId=6396478&preview_key=qqLRLtQa&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Email Example #3 ↗" },
]

export default function TabEthicsverse() {
  return (
    <div className="anim-fade-in grid gap-6 md:grid-cols-3">
      <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-[#121A2E] p-6 md:col-span-2">
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white">Weekly Presentation Slide Decks</h3>
          <p className="text-sm text-slate-400">
            Designing consistent, visually dynamic graphics and internal asset components for our core signature
            webinar series.
          </p>
          <div className="flex flex-col gap-2 sm:flex-row">
            {DECKS.map((d) => (
              <a
                key={d.label}
                href={d.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-lg border border-slate-700 bg-slate-800 p-2.5 text-center font-mono text-xs text-slate-300 transition-all hover:bg-[#FF007A] hover:text-white"
              >
                {d.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <h3 className="mb-2 text-lg font-bold text-white">Weekly Webinar Email Graphics</h3>
        <span className="mb-3 block text-xs font-bold uppercase tracking-wider text-[#00F5D4]">
          Preview just some of the emails
        </span>
        <div className="space-y-2">
          {EMAILS.map((e) => (
            <a
              key={e.label}
              href={e.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-lg border border-slate-800 bg-slate-900 p-2.5 font-mono text-xs text-[#00F5D4] transition-colors hover:border-[#00F5D4]/50"
            >
              {e.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
