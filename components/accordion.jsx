"use client"

import { useState } from "react"

export default function Accordion({ eyebrow, title, accent = "#FF007A", defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#121A2E]">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-800/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF007A]/60"
      >
        <div>
          {eyebrow ? (
            <span className="mb-1 block font-mono text-xs uppercase tracking-wider" style={{ color: accent }}>
              {eyebrow}
            </span>
          ) : null}
          <h4 className="text-lg font-bold text-white">{title}</h4>
        </div>
        <svg
          className={`h-6 w-6 flex-shrink-0 text-slate-400 rotate-icon ${open ? "open" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div className={`accordion-content bg-slate-900/40 ${open ? "open" : ""}`}>{children}</div>
    </div>
  )
}
