import Accordion from "../accordion"
import { LinkRow } from "../link-tile"

const BENCHMARK_EMAILS = [
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/209551733785?portalId=6396478&preview_key=QUIpZkTs&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Email Promo #1" },
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/209597223292?portalId=6396478&preview_key=OnQFgTtG&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "Email Promo #2" },
  { href: "https://6396478.hs-sites.com/-temporary-slug-e9247a26-1f1f-457f-bf64-829448a06b04?hs_preview=JOJfYNqZ-209239006649&", label: "Email Promo #3" },
  { href: "https://6396478.hs-sites.com/-temporary-slug-1f22a87f-9b67-4444-a4e0-0c95d3c326b7?hs_preview=iLUsPMsx-209239045668", label: "Email Promo #4" },
]

export default function TabBenchmark() {
  return (
    <div className="anim-fade-in grid items-start gap-8 md:grid-cols-12">
      {/* Left: primary asset */}
      <div className="rounded-2xl border border-slate-800 bg-[#121A2E] p-6 md:col-span-4 md:sticky md:top-24">
        <div className="mb-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#FF007A]">Primary Asset</div>
        <h3 className="mb-2 text-xl font-bold text-white text-balance">
          2026 Hotline &amp; Investigation Benchmark Report
        </h3>
        <p className="mb-6 text-xs leading-relaxed text-slate-400">
          Complete layout architecture converting extensive compliance metrics into corporate brand equity assets.
        </p>
        <a
          href="https://pages.ethico.com/hubfs/2026%20BMR%20Final%20Draft.pdf?hsLang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full rounded-lg border border-[#FF007A]/50 bg-[#FF007A]/10 py-3.5 text-center text-sm font-bold tracking-wide text-[#FF007A] shadow-lg shadow-[#FF007A]/5 transition-all hover:bg-[#FF007A] hover:text-white"
        >
          View Live Source PDF ↗
        </a>
      </div>

      {/* Right: accordions */}
      <div className="space-y-4 md:col-span-8">
        <Accordion eyebrow="Section Showcase 01" title="Report Graphics & Data Visualizations" defaultOpen>
          <p className="mb-6 text-sm text-slate-400">
            Core graphic elements, data charts, and vector styling designed directly for the layout of the
            comprehensive 2026 Benchmark PDF.
          </p>
          <div className="mb-4">
            <LinkRow
              href="https://pages.ethico.com/hubfs/26%20Benchmark%20Cheat%20Sheet.pdf"
              label="Download Cheat Sheet"
            />
          </div>
          <a
            href="https://pages.ethico.com/hubfs/2026%20BMR%20Final%20Draft.pdf?hsLang=en"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-4 block rounded-lg border border-slate-700 bg-slate-800/80 py-2.5 text-center text-xs font-semibold text-slate-200 transition-all hover:bg-[#FF007A]/20 hover:text-[#FF007A]"
          >
            View Full PDF Report Source ↗
          </a>
          <div className="rounded-lg border border-slate-800 bg-slate-950 p-6">
            <div className="mb-1 flex justify-between font-mono text-xs">
              <span className="text-slate-300">Web / Digital Intake Channels</span>
              <span className="font-bold text-[#FF007A]">53.4%</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-[#FF007A] to-pink-500" style={{ width: "53.4%" }} />
            </div>
          </div>
        </Accordion>

        <Accordion eyebrow="Section Showcase 02" title="Benchmark Marketing Emails">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {BENCHMARK_EMAILS.map((e) => (
              <LinkRow key={e.label} href={e.href} label={e.label} />
            ))}
          </div>
        </Accordion>

        <Accordion eyebrow="Section Showcase 03" title="Healthcare Benchmark Report">
          <div className="mb-4 space-y-3">
            <LinkRow
              href="https://6396478.hubspotpreview-na1.com/_hcms/preview/email/210985497481?portalId=6396478&preview_key=hHcmHwJx&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0"
              label="Healthcare Benchmark Promo Email #1"
            />
            <LinkRow
              href="https://6396478.hs-sites.com/-temporary-slug-f3979158-8c19-4359-b797-a490ada831a9?hs_preview=bWwEBxVa-210985497499"
              label="Healthcare Benchmark Promo Email #2"
            />
          </div>
          <a
            href="https://6396478.fs1.hubspotusercontent-na1.net/hubfs/6396478/2026%20Healthcare%20Benchmark%20Report%20%7C%20Ethico.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-slate-700 bg-slate-800/80 py-2.5 text-center text-xs font-semibold text-slate-200 transition-all hover:bg-[#FF007A]/20 hover:text-[#FF007A]"
          >
            View Live Healthcare Benchmark Report PDF ↗
          </a>
        </Accordion>
      </div>
    </div>
  )
}
