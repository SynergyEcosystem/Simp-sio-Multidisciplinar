'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Countdown } from '@/components/countdown'
import {
  getActiveRegistrationBatch,
  isFinalRegistrationBatch,
  REGISTRATION_BATCH_CHANGE_AT,
} from '@/lib/registration-batches'
import { REGISTRATION_URL } from '@/lib/workshops'

const BATCH_CHANGE_AT = new Date(REGISTRATION_BATCH_CHANGE_AT).getTime()

const facts = [
  { k: 'Quando', v: '25 · 26 Set', note: '27 · Set — prova de estágio para residentes de anestesia' },
  { k: 'Onde', v: 'Brasília · DF', note: 'CEUB Asa Norte + ICTDF' },
  { k: 'Edição', v: 'I Simpósio', note: 'Multidisciplinar' },
]

export function Hero() {
  const [batch, setBatch] = useState(getActiveRegistrationBatch)
  const [isFinal, setIsFinal] = useState(isFinalRegistrationBatch)

  useEffect(() => {
    const id = setInterval(() => {
      setBatch(getActiveRegistrationBatch())
      setIsFinal(isFinalRegistrationBatch())
    }, 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      {/* decorative rotating arc */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 hidden h-[720px] w-[720px] -translate-y-1/2 animate-spin-slow rounded-full border border-white/10 md:block"
      >
        <div className="absolute inset-8 rounded-full border border-gold/20" />
        <div className="absolute inset-24 rounded-full border border-white/5" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 pb-16 pt-28 md:px-8 md:pt-36 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
            <span className="h-1.5 w-1.5 animate-heartbeat rounded-full bg-gold" />
            Brasília · DF · Setembro 2026
          </p>

          <h1 className="font-serif text-[2.6rem] font-light leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-[4.6rem]">
            Boas práticas em assistência{' '}
            <em className="not-italic text-gold">Cardiovascular</em> e Transplantes
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Dois dias de imersão e aprendizado no maior simpósio multidisciplinar de assistência
            cardiovascular e transplantes do Distrito Federal.
          </p>

          <dl className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.k} className="bg-navy/40 p-5">
                <dt className="text-[10px] uppercase tracking-[0.2em] text-gold">{f.k}</dt>
                <dd className="mt-2 font-serif text-2xl leading-none">{f.v}</dd>
                <p className="mt-2 text-[11px] leading-snug text-white/50">{f.note}</p>
              </div>
            ))}
          </dl>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-wine px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-wine-foreground transition-transform duration-300 hover:-translate-y-0.5"
            >
              Garantir minha vaga
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <Link
              href="/workshops"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors duration-300 hover:border-gold hover:text-gold"
            >
              Inscrever-se nos workshops
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* Emblem */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative">
            <div className="animate-float">
              <div className="flex items-center justify-center rounded-full bg-cream p-6 shadow-2xl ring-1 ring-gold/30 sm:p-8">
                <Image
                  src="/logo-simposio.png"
                  alt="Logo do I Simpósio Multidisciplinar de Assistência Cardiovascular e Transplantes — coração anatômico circundado por arcos"
                  width={460}
                  height={460}
                  priority
                  className="h-auto w-[240px] sm:w-[320px] lg:w-[380px]"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-gold/40 bg-navy/80 px-5 py-2 text-center backdrop-blur">
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">{batch.label}</span>{' '}
              <span className="font-serif text-lg text-gold">R$ {batch.heroPrice}</span>{' '}
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                · vagas limitadas
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown band */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-6 md:flex-row md:px-8">
          <p className="text-sm text-white/60">
            <span className="font-semibold text-white">{batch.shortLabel}</span> {batch.closesText}
          </p>
          {isFinal ? (
            <p className="text-sm text-white/60">Preço {batch.shortLabel} vigente até o evento</p>
          ) : (
            <Countdown variant="dark" target={BATCH_CHANGE_AT} />
          )}
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-gold transition-opacity hover:opacity-80"
          >
            Garantir vaga <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
