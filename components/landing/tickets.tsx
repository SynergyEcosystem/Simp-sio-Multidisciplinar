'use client'

import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { getActiveRegistrationBatch } from '@/lib/registration-batches'
import { SIMPOSIO_REGISTRATION_URL } from '@/lib/workshops'

type Ticket = {
  name: string
  desc: string
  priceKey: string
  price: string
  featured?: boolean
  limited?: boolean
}

const groups: { title: string; sub: string; tickets: Ticket[] }[] = [
  {
    title: 'Para Estudantes e Residentes',
    sub: 'Tarifa institucional para quem está em formação.',
    tickets: [
      {
        name: 'Acadêmicos / Estudantes',
        desc: 'Graduação em medicina e áreas multidisciplinares.',
        priceKey: 'academics',
        price: '85',
        limited: true,
      },
      {
        name: 'Residentes ICTDF',
        desc: 'Programa de residência do ICTDF.',
        priceKey: 'ictdfResidents',
        price: '100',
      },
    ],
  },
  {
    title: 'Para Profissionais de Saúde',
    sub: 'Corpo clínico, conveniados e profissionais formados.',
    tickets: [
      {
        name: 'Residentes / Outras Instituições',
        desc: 'Programas de residência fora do ICTDF.',
        priceKey: 'otherResidents',
        price: '130',
      },
      {
        name: 'Profissionais Conveniados / ICTDF',
        desc: 'Corpo clínico conveniado ou vinculado ao ICTDF.',
        priceKey: 'affiliatedProfessionals',
        price: '180',
        featured: true,
      },
      {
        name: 'Profissionais Formados',
        desc: 'Inscrição avulsa sem vínculo institucional.',
        priceKey: 'professionals',
        price: '250',
      },
    ],
  },
]

export function Tickets() {
  const [batch, setBatch] = useState(getActiveRegistrationBatch)

  useEffect(() => {
    const id = setInterval(() => setBatch(getActiveRegistrationBatch()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="ingressos" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
            04 · Categorias e valores
          </p>
          <h2 className="mt-5 font-serif text-3xl font-light leading-[1.1] text-balance sm:text-4xl">
            Escolha sua categoria — preço do <em className="not-italic text-wine">{batch.shortLabel}</em>{' '}
            {batch.priceNote}
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12">
          {groups.map((g) => (
            <div key={g.title}>
              <div className="mb-6">
                <h3 className="font-serif text-2xl text-navy">{g.title}</h3>
                <p className="text-sm text-muted-foreground">{g.sub}</p>
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.tickets.map((t, i) => (
                  <Reveal key={t.name} delay={i * 70}>
                    <article
                      className={`flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        t.featured
                          ? 'border-wine bg-navy text-white'
                          : 'border-border bg-card text-navy'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span
                          className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${
                            t.featured ? 'text-gold' : 'text-wine'
                          }`}
                        >
                          {t.name}
                        </span>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                            t.featured ? 'bg-gold text-navy' : 'bg-wine/10 text-wine'
                          }`}
                        >
                          {batch.label}
                        </span>
                      </div>
                      <p
                        className={`mt-3 text-sm leading-snug ${
                          t.featured ? 'text-white/60' : 'text-muted-foreground'
                        }`}
                      >
                        {t.desc}
                      </p>
                      {t.limited && (
                        <span className="mt-3 inline-flex w-max rounded-full bg-wine/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-wine">
                          Vagas limitadas
                        </span>
                      )}
                      <div className="mt-6 flex items-baseline gap-1">
                        <span
                          className={`text-sm ${t.featured ? 'text-white/60' : 'text-muted-foreground'}`}
                        >
                          R$
                        </span>
                        <span className="font-serif text-5xl font-light leading-none">
                          {batch.prices[t.priceKey] || t.price}
                        </span>
                        <span
                          className={`text-sm ${t.featured ? 'text-white/60' : 'text-muted-foreground'}`}
                        >
                          ,00
                        </span>
                      </div>
                      <a
                        href={SIMPOSIO_REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group mt-6 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] transition-transform duration-300 hover:-translate-y-0.5 ${
                          t.featured
                            ? 'bg-gold text-navy'
                            : 'bg-wine text-wine-foreground'
                        }`}
                      >
                        {batch.ctaLabel}
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
