'use client'

import { useEffect, useState } from 'react'

function getParts(target: number) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / 86_400_000)
  const hours = Math.floor((diff % 86_400_000) / 3_600_000)
  const mins = Math.floor((diff % 3_600_000) / 60_000)
  const secs = Math.floor((diff % 60_000) / 1000)
  return [
    { label: 'Dias', value: days },
    { label: 'Horas', value: hours },
    { label: 'Min', value: mins },
    { label: 'Seg', value: secs },
  ]
}

export function Countdown({
  variant = 'dark',
  target,
}: {
  variant?: 'dark' | 'light'
  target: number
}) {
  const [parts, setParts] = useState(() => getParts(target))
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setParts(getParts(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const isDark = variant === 'dark'

  return (
    <div className="flex items-center gap-2.5 sm:gap-3" aria-hidden={!mounted}>
      {parts.map((p, i) => (
        <div key={p.label} className="flex items-center gap-2.5 sm:gap-3">
          <div className="flex flex-col items-center">
            <span
              className={`font-serif text-3xl leading-none tabular-nums sm:text-4xl ${
                isDark ? 'text-gold' : 'text-wine'
              }`}
            >
              {mounted ? String(p.value).padStart(2, '0') : '--'}
            </span>
            <span
              className={`mt-1.5 text-[10px] uppercase tracking-[0.2em] ${
                isDark ? 'text-white/50' : 'text-muted-foreground'
              }`}
            >
              {p.label}
            </span>
          </div>
          {i < parts.length - 1 && (
            <span className={`font-serif text-2xl ${isDark ? 'text-white/25' : 'text-navy/20'}`}>
              :
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
