import { LinkRow, ResourceCard } from "../link-tile"

const PROMO_EMAILS = [
  { href: "https://6396478.hs-sites.com/-temporary-slug-f6315126-dc90-46c6-bffb-b6a3e349b703?hs_preview=rzwEfyXV-213715330897", label: "AI Case Summary — Campaign Email" },
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/213198525205?portalId=6396478&preview_key=UsptBlIZ&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Policy Management — Campaign Email" },
  { href: "https://6396478.hs-sites.com/-temporary-slug-eaf4ff93-d8ec-4b7d-8180-4d20643d5d58?hs_preview=GHOBfdwu-211065209756", label: "Policy+ Email Variant #1", accent: "#00F5D4" },
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/212461484899?portalId=6396478&preview_key=GdMbtnBY&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Policy+ Email Variant #2", accent: "#00F5D4" },
]

const PAGERS = [
  { href: "https://pages.ethico.com/hubfs/Policy%20Reference%20Bot%20Product%20Pager.pdf", kind: "AI Module", title: "Policy Reference Bot Product Pager" },
  { href: "https://pages.ethico.com/hubfs/AI%20Case%20Summary%20Product%20Pager.pdf", kind: "AI Module", title: "AI Case Summary Product Pager" },
  { href: "https://6396478.fs1.hubspotusercontent-na1.net/hubfs/6396478/Policy%20Management%20Solution%20Pager.pdf", kind: "Policy+ Spec", kindColor: "#00F5D4", title: "Policy Management Solution Pager" },
]

export default function TabNewPromo() {
  return (
    <div className="anim-fade-in space-y-6">
      <div className="relative overflow-hidden rounded-3xl border border-[#FF007A]/30 bg-gradient-to-br from-[#1a1030] via-[#121A2E] to-[#0B111E] p-8">
        <span className="inline-block rounded-full border border-[#FF007A]/30 bg-[#FF007A]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FF007A]">
          Latest Product Launches
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance">New Product Promo</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          The most recent product launch campaigns — promotional emails and product pagers for Policy+, the Policy
          Reference Bot, and AI Case Summary.
        </p>
      </div>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <h3 className="text-lg font-bold text-white">Launch Emails</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {PROMO_EMAILS.map((e) => (
            <LinkRow key={e.label} href={e.href} label={e.label} accent={e.accent || "#FF007A"} />
          ))}
        </div>
      </section>

      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <h3 className="text-lg font-bold text-white">Product Pagers</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          {PAGERS.map((p) => (
            <ResourceCard key={p.title} {...p} />
          ))}
        </div>
      </section>
    </div>
  )
}
