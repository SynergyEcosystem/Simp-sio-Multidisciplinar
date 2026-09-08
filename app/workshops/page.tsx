import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { WorkshopsHero } from '@/components/workshops/workshops-hero'
import { WorkshopEntry } from '@/components/workshops/workshop-entry'
import { Reveal } from '@/components/reveal'
import { WORKSHOPS_REGISTRATION_URL, workshops } from '@/lib/workshops'

export const metadata: Metadata = {
  title: 'Workshops práticos · I Simpósio Multidisciplinar ICTDF',
  description:
    'Seis workshops hands-on em 25/09/2026 no ICTDF: CEC, ECMO, anatomia cardíaca, vias aéreas, instabilidades elétricas e a jornada do transplante. Vagas limitadas por turma.',
}

export default function WorkshopsPage() {
  return (
    <>
      <SiteNav />
      <main>
        <WorkshopsHero />

        <section className="bg-background">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            {workshops.map((w, i) => (
              <WorkshopEntry key={w.id} w={w} i={i} />
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-wine py-20 text-white md:py-28">
          <div className="mx-auto max-w-3xl px-5 text-center md:px-8">
            <Reveal>
              <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
                Garanta sua bancada
              </p>
              <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
                Escolha seu workshop e conclua a inscrição.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-white/70">
                As turmas são pequenas para garantir a experiência prática. Pagamento à vista via Pix
                ou em até 3x no cartão de crédito, pela plataforma e-inscrição.
              </p>
              <a
                href={WORKSHOPS_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-wine transition-transform duration-300 hover:-translate-y-0.5"
              >
                Inscrever-se nos workshops
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
