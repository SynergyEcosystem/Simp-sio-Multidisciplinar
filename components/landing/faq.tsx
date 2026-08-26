'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: 'O certificado é válido para prova de título e concursos?',
    a: 'Sim. 16 horas, assinado pela Coordenação de Ensino do ICTDF. Aceito como atividade complementar em residências e provas de título.',
  },
  {
    q: 'Posso pagar minha inscrição parcelada?',
    a: 'Sim. Até 3x com juros do operador.',
  },
  {
    q: 'O evento é presencial ou híbrido?',
    a: '100% presencial. Esta edição inaugural privilegia o encontro. Edições futuras podem ter transmissão online.',
  },
  {
    q: 'Como faço para participar dos workshops práticos?',
    a: 'Os workshops têm inscrição própria e vagas limitadas por turma. Acesse a página de Workshops, escolha a estação prática desejada e conclua sua inscrição.',
  },
  {
    q: 'Os workshops do dia 25 estão inclusos no ingresso?',
    a: 'Não. Os workshops do dia 25/09 têm valores à parte e são cobrados separadamente do ingresso do simpósio.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
              06 · Perguntas frequentes
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
              Dúvidas <em className="not-italic text-wine">rápidas</em>, respostas claras.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Reunimos as dúvidas mais comuns. Se a sua não estiver aqui, a coordenação responde em
              até 24h.
            </p>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h3 className="font-serif text-xl text-navy">Precisa falar com alguém?</h3>
              <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                {'Coordenação de Ensino ICTDF\nensino@ictdf.org.br · 61 3403-5418\nSegunda a sexta, 8h às 17h.'}
              </p>
            </div>
          </div>

          <div className="divide-y divide-border border-y border-border">
            {faqs.map((f, i) => {
              const on = open === i
              return (
                <div key={f.q}>
                  <button
                    type="button"
                    aria-expanded={on}
                    onClick={() => setOpen(on ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-serif text-lg leading-snug text-navy sm:text-xl">
                      {f.q}
                    </span>
                    <Plus
                      className={`h-5 w-5 shrink-0 text-wine transition-transform duration-300 ${
                        on ? 'rotate-45' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      on ? 'grid-rows-[1fr] pb-5' : 'grid-rows-[0fr]'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-xl leading-relaxed text-muted-foreground">{f.a}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
