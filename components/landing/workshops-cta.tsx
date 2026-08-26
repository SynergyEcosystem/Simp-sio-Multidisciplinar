import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { workshops } from '@/lib/workshops'

export function WorkshopsCta() {
  return (
    <section className="relative overflow-hidden bg-wine py-20 text-white md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] animate-spin-slow rounded-full border border-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full border border-gold/20"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <Reveal>
            <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
              Estações práticas · 25/09 · ICTDF
            </p>
            <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl lg:text-6xl">
              Seis workshops <em className="not-italic text-gold">hands-on</em>. Vagas limitadas por
              turma.
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-white/70">
              CEC, ECMO, anatomia cardíaca, vias aéreas, instabilidades elétricas e a jornada do
              transplante. Experiências imersivas conduzidas por especialistas — escolha a sua e
              garanta a bancada.
            </p>
            <Link
              href="/workshops"
              className="group mt-9 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-wine transition-transform duration-300 hover:-translate-y-0.5"
            >
              Inscrever-se nos workshops
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {workshops.map((w, i) => (
              <Reveal key={w.id} delay={(i % 2) * 80}>
                <Link
                  href={`/workshops#${w.id}`}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-white/[0.05] p-5 transition-colors duration-300 hover:border-gold hover:bg-white/[0.09]"
                >
                  <div>
                    <span className="font-serif text-2xl text-white/30">{w.index}</span>
                    <span className="mt-1 block text-[10px] uppercase tracking-[0.16em] text-gold">
                      {w.tag}
                    </span>
                    <h3 className="mt-1 font-serif text-lg leading-tight">{w.title}</h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-sm text-white/60">
                    <span>{w.time}</span>
                    <span className="font-serif text-lg text-white">R${w.price}</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
