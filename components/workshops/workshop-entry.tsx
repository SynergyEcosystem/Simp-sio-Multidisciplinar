import { ArrowUpRight, Clock, Users, MapPin, Ticket } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { REGISTRATION_URL, type Workshop } from '@/lib/workshops'

export function WorkshopEntry({ w, i }: { w: Workshop; i: number }) {
  const flip = i % 2 === 1

  const meta = [
    { icon: Clock, label: 'Horário', value: `${w.time} · ${w.shift}` },
    { icon: Users, label: 'Público', value: w.audience },
    { icon: MapPin, label: 'Local', value: `${w.location} · Carga ${w.workload}` },
    { icon: Ticket, label: 'Investimento', value: `R$ ${w.price},00` },
  ]

  return (
    <article
      id={w.id}
      className="scroll-mt-24 border-b border-border py-14 last:border-b-0 md:py-20"
    >
      <div
        className={`grid grid-cols-1 gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:gap-14 ${
          flip ? 'lg:[&>*:first-child]:order-2' : ''
        }`}
      >
        {/* Left: index + big number panel */}
        <Reveal>
          <div className="relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-3xl bg-navy p-8 text-white">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full border border-gold/20"
            />
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Workshop {w.index}
              </span>
              <span className="rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/60">
                {w.shift}
              </span>
            </div>
            <div>
              <span className="font-serif text-[6rem] font-light leading-none text-white/10">
                {w.index}
              </span>
              <p className="mt-2 text-[11px] uppercase tracking-[0.16em] text-gold">{w.tag}</p>
              <h2 className="mt-2 font-serif text-3xl leading-tight">{w.title}</h2>
            </div>
          </div>
        </Reveal>

        {/* Right: details */}
        <Reveal delay={90}>
          <div className="flex h-full flex-col">
            <p className="text-lg leading-relaxed text-navy/80">{w.description}</p>

            <dl className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {meta.map((m) => (
                <div key={m.label} className="flex items-start gap-3 bg-background p-5">
                  <m.icon className="mt-0.5 h-5 w-5 shrink-0 text-wine" />
                  <div>
                    <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {m.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium leading-snug text-navy">{m.value}</dd>
                  </div>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-wine px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-wine-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Inscrever-se neste workshop
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <p className="mt-3 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
                Vagas limitadas por turma · via plataforma e-inscrição
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </article>
  )
}
