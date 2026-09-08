import Link from 'next/link'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Countdown } from '@/components/countdown'
import { WORKSHOPS_REGISTRATION_URL, workshops } from '@/lib/workshops'

export function WorkshopsHero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-28 text-white md:pt-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-0 h-[600px] w-[600px] animate-spin-slow rounded-full border border-white/10"
      >
        <div className="absolute inset-16 rounded-full border border-gold/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 md:px-8 md:pb-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Voltar ao simpósio
        </Link>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
          <span className="h-1.5 w-1.5 animate-heartbeat rounded-full bg-gold" />
          25 de Setembro de 2026 · ICTDF
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-[2.6rem] font-light leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Workshops <em className="not-italic text-gold">práticos</em> do Simpósio.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
          Seis estações hands-on, conduzidas por especialistas, com vagas limitadas por turma.
          Conheça cada workshop e garanta sua bancada — a inscrição é independente do ingresso do
          simpósio.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
              Inscrições encerram em
            </span>
            <Countdown variant="dark" />
          </div>
          <a
            href={WORKSHOPS_REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-transform duration-300 hover:-translate-y-0.5"
          >
            Inscrever-se já
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* quick nav */}
        <div className="mt-12 flex flex-wrap gap-2">
          {workshops.map((w) => (
            <a
              key={w.id}
              href={`#${w.id}`}
              className="rounded-full border border-white/15 px-4 py-2 text-[11px] uppercase tracking-[0.12em] text-white/60 transition-colors hover:border-gold hover:text-gold"
            >
              {w.index} · {w.tag}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
