import { HeartPulse } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const stats = [
  { value: '3', suffix: 'dias', note: '25, 26 e 27 de setembro' },
  { value: '9', suffix: '+', note: 'especialidades representadas' },
  { value: '6', suffix: '', note: 'workshops práticos no dia 25' },
  { value: '300', suffix: '+', note: 'vagas disponíveis' },
]

const specialties = [
  'Cardiologia',
  'Cirurgia Cardíaca',
  'Medicina Intensiva',
  'Anestesia',
  'Enfermagem',
  'Nutrição',
  'Psicologia Hospitalar',
  'Perfusão',
  'Fisioterapia',
]

export function About() {
  return (
    <section id="sobre" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
            01 · Sobre o evento
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
            9+ especialidades. <em className="not-italic text-wine">Uma só missão.</em>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-navy/80">
            O I Simpósio Multidisciplinar de Assistência Cardiovascular e Transplantes reúne, no
            mesmo auditório, os profissionais que cuidam do coração em todas as suas dimensões.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Interactive specialties panel */}
          <Reveal>
            <div className="flex h-full flex-col justify-between rounded-3xl border border-border bg-navy p-8 md:p-10">
              <div>
                <div className="flex items-center gap-3 text-gold">
                  <HeartPulse className="h-6 w-6" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.22em]">
                    Um só paciente, muitos olhares
                  </span>
                </div>
                <p className="mt-6 leading-relaxed text-white/70">
                  Cardiologistas, cirurgiões, intensivistas, enfermeiros, nutricionistas e
                  psicólogos hospitalares — juntos, discutindo o mesmo paciente. É assim que a
                  medicina avança.
                </p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {specialties.map((sp) => (
                  <li key={sp}>
                    <span className="inline-flex cursor-default rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] text-white/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy">
                      {sp}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Rationale card */}
          <Reveal delay={120}>
            <div className="flex h-full flex-col justify-center rounded-3xl border border-border bg-cream p-8 md:p-10">
              <strong className="font-serif text-2xl font-normal leading-snug text-navy text-balance">
                Por que um simpósio multidisciplinar?
              </strong>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Porque a doença cardiovascular não respeita fronteiras entre especialidades. O
                paciente com insuficiência cardíaca avançada precisa — no mesmo dia — do
                cardiologista, do intensivista, do nutricionista e do psicólogo. Este simpósio
                simula essa realidade.
              </p>
              <div className="mt-8 h-px w-full bg-border" />
              <p className="mt-6 font-serif text-xl font-light italic leading-snug text-wine text-pretty">
                &ldquo;O coração é o encontro de todas as especialidades.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.note} delay={i * 80} className="bg-background">
              <div className="flex h-full flex-col justify-center p-7 md:p-9">
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-5xl font-light leading-none text-navy md:text-6xl">
                    {s.value}
                  </span>
                  {s.suffix && (
                    <span className="font-serif text-3xl font-light text-wine">{s.suffix}</span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-snug text-muted-foreground">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
