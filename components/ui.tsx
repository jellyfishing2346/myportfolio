// Small shared building blocks for the riot style.

// Deterministic per-letter style so server and client render the same thing.
const PATTERN = [1, 2, 0, 1, 3, 2, 4, 1, 0, 2, 1, 4, 2, 0, 3, 1]
const TILT = [-4, 3, -2, 5, -3, 2, -5, 1, 4, -1, 3, -4]

export function Ransom({ text, className = '' }: { text: string; className?: string }) {
  let n = 0
  return (
    <span className={`ransom ${className}`} aria-label={text} role="text">
      {text.split(' ').map((word, wi) => (
        <span key={wi} className="ransom-word" aria-hidden="true">
          {Array.from(word).map((ch, ci) => {
            const i = n++
            return (
              <span
                key={ci}
                className={`ransom-l r${PATTERN[i % PATTERN.length]}`}
                style={{ transform: `rotate(${TILT[i % TILT.length]}deg)` }}
              >
                {ch}
              </span>
            )
          })}
        </span>
      ))}
    </span>
  )
}

export function Wordmark({ text = 'Faizan Khan', animate = false }: { text?: string; animate?: boolean }) {
  let i = 0
  return (
    <div className={`band ${animate ? 'wipe-in' : ''}`}>
      <p className="wordmark px-[1vw] pb-[1.2vw] pt-[4.2vw]" aria-label={text}>
        {Array.from(text).map((ch, k) => {
          if (ch === ' ') return <span key={k} className="wm-gap" aria-hidden="true" />
          const d = i++
          return (
            <span key={k} className="inline-block overflow-hidden pb-[0.04em]" aria-hidden="true">
              <span
                className={`wm-l ${animate ? 'rise' : ''}`}
                style={animate ? { animationDelay: `${0.25 + d * 0.035}s` } : undefined}
              >
                {ch}
              </span>
            </span>
          )
        })}
      </p>
    </div>
  )
}

export function SectionHeading({
  title,
  note,
  dark = false,
  as: Tag = 'h2',
}: {
  title: string
  note?: React.ReactNode
  dark?: boolean
  as?: 'h1' | 'h2'
}) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-x-8 gap-y-5 md:mb-16">
      <Tag className={`slash ${dark ? 'slash-slab' : ''}`}>
        <span>{title}</span>
      </Tag>
      {note && <div className="max-w-[30rem] text-base leading-relaxed text-white/85 md:text-right">{note}</div>}
    </div>
  )
}
