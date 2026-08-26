import Image from 'next/image'
import Link from 'next/link'

const columns = [
  {
    title: 'Evento',
    links: [
      { label: 'Sobre o simpósio', href: '/#sobre' },
      { label: 'Programação', href: '/#programacao' },
      { label: 'Palestrantes', href: '/#palestrantes' },
      { label: 'Como chegar', href: '/#local' },
    ],
  },
  {
    title: 'Inscrições',
    links: [
      { label: 'Categorias e valores', href: '/#ingressos' },
      { label: 'Workshops práticos', href: '/workshops' },
      { label: 'Lotes disponíveis', href: '/#ingressos' },
    ],
  },
  {
    title: 'ICTDF',
    links: [
      { label: 'ictdf.org.br', href: '#' },
      { label: 'ensino@ictdf.org.br', href: 'mailto:ensino@ictdf.org.br' },
      { label: '61 3403-5418', href: 'tel:+556134035418' },
      { label: 'Brasília · DF', href: '/#local' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-gold/30">
                <Image
                  src="/logo-simposio.png"
                  alt="Logo do I Simpósio Multidisciplinar ICTDF"
                  width={48}
                  height={48}
                  className="h-10 w-10 object-contain"
                />
              </span>
              <span className="font-serif text-2xl">Conectando Conhecimentos.</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              I Simpósio Multidisciplinar de Assistência Cardiovascular e Transplantes — realização
              do Instituto de Cardiologia e Transplantes do Distrito Federal.
            </p>
          </div>

          {columns.map((c) => (
            <div key={c.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                {c.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.16em] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ICTDF · Todos os direitos reservados</span>
          <span>Realização · ICTDF · Fundação Universitária de Cardiologia</span>
        </div>
      </div>
    </footer>
  )
}
