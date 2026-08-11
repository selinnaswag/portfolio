const STARS = [
  { top: "6%", left: "8%", size: "text-xl", color: "text-pink-200", delay: "0.2s" },
  { top: "14%", left: "32%", size: "text-sm", color: "text-[#FF007A]", delay: "0.9s" },
  { top: "9%", left: "62%", size: "text-base", color: "text-[#00F5D4]", delay: "1.5s" },
  { top: "5%", left: "88%", size: "text-lg", color: "text-pink-200", delay: "0.4s" },
  { top: "30%", left: "4%", size: "text-2xl", color: "text-[#00F5D4]", delay: "0s" },
  { top: "42%", left: "94%", size: "text-sm", color: "text-[#FF007A]", delay: "1.2s" },
  { top: "58%", left: "10%", size: "text-lg", color: "text-pink-200", delay: "1.7s" },
  { top: "66%", left: "78%", size: "text-xl", color: "text-[#00F5D4]", delay: "0.6s" },
  { top: "80%", left: "20%", size: "text-sm", color: "text-[#FF007A]", delay: "2s" },
  { top: "88%", left: "58%", size: "text-lg", color: "text-pink-200", delay: "1.1s" },
  { top: "74%", left: "44%", size: "text-xs", color: "text-[#00F5D4]", delay: "2.4s" },
]

export default function Starfield({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {STARS.map((s, i) => (
        <span
          key={i}
          className={`anim-star absolute select-none ${s.size} ${s.color}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        >
          ✦
        </span>
      ))}
    </div>
  )
}
