import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const sponsors = [
  { name: 'Instituto de Cardiologia e Transplantes do DF', src: '/apoiadores/v2-ictdf.png' },
  { name: 'HFA — Hospital das Forças Armadas', src: '/apoiadores/v2-hfa-novo.png' },
  { name: 'CEUB — Centro Universitário de Brasília', src: '/apoiadores/v2-ceub.png' },
  { name: 'IGL — New Chances Matter', src: '/apoiadores/v2-igl.png' },
  { name: 'Sociedade de Anestesiologia do Distrito Federal', src: '/apoiadores/v2-anestesia-df.png' },
  { name: 'SBCEC — Sociedade Brasileira de Circulação Extracorpórea', src: '/apoiadores/v2-sbcec.png' },
  { name: 'CACIB — Clínica de Anestesia Cardiovascular e Imagem de Brasília', src: '/apoiadores/v2-cacib.png' },
  { name: 'Brakko — Produtos e Serviços Hospitalares', src: '/apoiadores/v2-brakko.png' },
  { name: 'Ambu — Ideas that work for life', src: '/apoiadores/v2-ambu.png' },
]

export function Sponsors() {
  return (
    <section id="apoiadores" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
            07 · Quem apoia
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
            Nossos <em className="not-italic text-wine">apoiadores</em>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Instituições e empresas que tornam este simpósio possível e caminham conosco na
            construção do conhecimento em assistência cardiovascular e transplantes.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {sponsors.map((s, i) => (
            <Reveal key={s.name} delay={i * 70}>
              <div className="group flex h-28 items-center justify-center overflow-hidden rounded-3xl border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-32">
                <Image
                  src={s.src || '/placeholder.svg'}
                  alt={`Logo — ${s.name}`}
                  width={320}
                  height={320}
                  className="h-full w-auto scale-[1.35] object-contain transition-transform duration-300 group-hover:scale-[1.42]"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
