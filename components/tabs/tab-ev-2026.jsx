import Image from "next/image"
import { LinkRow } from "../link-tile"

const TOOLKITS = [
  { href: "The Questions That Move People Behavioral Science Toolkit Playbook.pdf", label: "1. The Questions That Move People — Playbook" },
  { href: "Proxy Reporting by Design Behavioral Science Toolkit Discussion Guide (3).pdf", label: "2. Proxy Reporting by Design — Discussion Guide" },
  { href: "Designing Just-In-Time Compliance Cues Behavioral Science Toolkit Checklist (2).pdf", label: "3. Just-In-Time Compliance Cues — Checklist" },
  { href: "Compliance is the Business of Human Decisions Behavioral Science Toolkit Pager (2).pdf", label: "4. Compliance Is the Business of Human Decisions — Primer" },
]

const PROMO_EMAILS = [
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/214599801978?portalId=6396478&preview_key=XMLISXaz&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "EV Day Promo #1" },
  { href: "https://6396478.hs-sites.com/-temporary-slug-87c122fc-5921-4187-bdbe-9d0b1f3597ca?hs_preview=ZdAMvpPG-214610196647", label: "EV Day Promo #2 — Behavioral Science Toolkit" },
  { href: "https://6396478.hubspotpreview-na1.com/_hcms/preview/email/215277244952?portalId=6396478&preview_key=sNfPssqb&_preview=true&from_buffer=false&hsPreviewerApp=email&cacheBust=0", label: "EV Day General Promo #4" },
]

function SectionHeading({ index, children, accent = "#FF007A" }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg font-mono text-xs font-bold"
        style={{ backgroundColor: `${accent}1a`, color: accent }}
      >
        {index}
      </span>
      <h3 className="text-lg font-bold text-white">{children}</h3>
    </div>
  )
}

export default function TabEv2026() {
  return (
    <div className="anim-fade-in space-y-6">
      {/* Intro banner */}
      <div className="relative overflow-hidden rounded-3xl border border-[#FF007A]/30 bg-gradient-to-br from-[#1a1030] via-[#121A2E] to-[#0B111E] p-8">
        <span className="inline-block rounded-full border border-[#FF007A]/30 bg-[#FF007A]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FF007A]">
          Featured Campaign
        </span>
        <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white text-balance">
          Ethicsverse Day 2026
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
          A full creative program for Ethico&apos;s flagship virtual event — behavioral science toolkits, a
          multi-touch promo email series, launch graphics, a post-event recap landing page, and the registration
          visual system.
        </p>
      </div>

      {/* 1. Toolkits */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <SectionHeading index="1">4 Behavioral Science Toolkits</SectionHeading>
        <p className="text-sm text-slate-400">
          A themed set of downloadable playbooks, guides, and checklists produced for the event program.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {TOOLKITS.map((t) => (
            <LinkRow key={t.label} href={t.href} label={t.label} />
          ))}
        </div>
      </section>

      {/* 2. Promo Emails */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <SectionHeading index="2" accent="#00F5D4">
          Ethicsverse Day Promo Emails
        </SectionHeading>
        <p className="text-sm text-slate-400">Multi-touch promotional email designs driving event registration.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PROMO_EMAILS.map((e) => (
            <LinkRow key={e.label} href={e.href} label={e.label} accent="#00F5D4" />
          ))}
        </div>
      </section>

      {/* 3. Promo Graphics */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <SectionHeading index="3">Promo Graphics</SectionHeading>
        <p className="text-sm text-slate-400">Event key art and social promotion graphics.</p>
        <div className="overflow-hidden rounded-xl border border-slate-800">
          <Image
            src="/images/ev-day-promo.png"
            alt="Ethicsverse Day 2026 promotional key art with a dark cosmic background and pink glow"
            width={1280}
            height={720}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* 4. Landing page */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <SectionHeading index="4" accent="#00F5D4">
          Post-Ethicsverse Day Landing Page
        </SectionHeading>
        <p className="text-sm text-slate-400">
          A recap landing page collecting session recordings and takeaways after the event.
        </p>
        <div className="overflow-hidden rounded-xl border border-slate-800">
          <Image
            src="/images/ev-day-landing.png"
            alt="Mockup of the post-Ethicsverse Day recap landing page in a dark UI"
            width={1280}
            height={720}
            className="h-auto w-full"
          />
        </div>
      </section>

      {/* 5. Registration graphics */}
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-[#121A2E] p-6">
        <SectionHeading index="5">New Registration Graphics</SectionHeading>
        <p className="text-sm text-slate-400">Registration banners and call-to-action visuals for the sign-up flow.</p>
        <div className="overflow-hidden rounded-xl border border-slate-800">
          <Image
            src="/images/ev-day-registration.png"
            alt="Ethicsverse Day 2026 registration banner graphic with a Register Now button"
            width={1280}
            height={720}
            className="h-auto w-full"
          />
        </div>
      </section>
    </div>
  )
}
