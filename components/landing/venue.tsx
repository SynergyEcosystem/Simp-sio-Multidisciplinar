import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const places = [
  {
    name: 'CEUB — Campus Asa Norte',
    activity: 'Simpósio Multidisciplinar',
    date: '26/09',
    photo: '/locais/ceub.png',
  },
  {
    name: 'ICTDF',
    activity: 'Workshops + Prova de estágio para residentes de anestesia',
    date: '25/09 · 27/09',
    photo: '/locais/ictdf.png',
  },
]

export function Venue() {
  return (
    <section id="local" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
            05 · Local e logística
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
            Dois espaços, <em className="not-italic text-wine">uma única experiência</em>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Nem todo o evento acontece no mesmo lugar. Separamos os locais para que cada atividade
            tenha a estrutura ideal.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {places.map((p, i) => (
            <Reveal key={p.name} delay={i * 90}>
              <article className="group relative flex aspect-[16/11] flex-col justify-end overflow-hidden rounded-3xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <Image
                  src={p.photo || "/placeholder.svg"}
                  alt={`Foto do local ${p.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent"
                />
                <MapPin className="absolute left-6 top-6 h-8 w-8 text-gold" />
                <div className="relative p-8">
                  <span className="inline-flex rounded-full bg-gold/90 px-3 py-1 text-[11px] font-semibold text-navy">
                    {p.date}
                  </span>
                  <h3 className="mt-4 font-serif text-3xl leading-tight text-white">{p.name}</h3>
                  <p className="mt-2 text-white/80">{p.activity}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 text-center text-sm uppercase tracking-[0.2em] text-muted-foreground">
            Cidade · Brasília — DF
          </p>
        </Reveal>
      </div>
    </section>
  )
}
