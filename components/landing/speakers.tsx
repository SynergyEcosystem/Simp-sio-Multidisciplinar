'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { X, ArrowUpRight, ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/reveal'

type Speaker = {
  name: string
  field: string
  photo: string
  role: string
  bio: string[]
}

const speakers: Speaker[] = [
  {
    name: 'Dr. André Watanabe',
    field: 'Transplante Hepático',
    photo: '/palestrantes/andre-watanabe.png',
    role: 'Gerente geral de Assistência do ICTDF e supervisor do Programa de Transplante Hepático',
    bio: [
      'Cirurgião do aparelho digestivo.',
      'Gerente geral de Assistência do ICTDF.',
      'Supervisor do Programa de Transplante Hepático do ICTDF.',
      'Professor Assistente da Faculdade de Medicina da Universidade de Brasília - FM/UnB.',
      'Mestre em Clínica Cirúrgica pela Universidade Federal do Paraná - UFPR.',
      'Especialista em Cirurgia Geral e Cirurgia do Aparelho Digestivo pela Associação Médica Brasileira.',
      'Membro Titular do Colégio Brasileiro de Cirurgiões, do Colégio Brasileiro de Cirurgia Digestiva e da Associação Brasileira de Transplante de Órgãos.',
      'Supervisor dos programas de Transplante Hepático do ICTDF, Hospital Brasília e Hospital Santa Lúcia Sul.',
      'Diretor Médico do Instituto de Cardiologia e Transplantes do Distrito Federal - FUC/ICTDF.',
    ],
  },
  {
    name: 'Dr. Jorge Afiune',
    field: 'Cardiologia Pediátrica',
    photo: '/palestrantes/jorge-afiune.jpeg',
    role: 'Diretor da Divisão de Cardiologia Pediátrica do ICTDF',
    bio: [
      'Graduação em Medicina pela Universidade de Brasília (UnB), concluída em 1987.',
      'Residência em Pediatria pela Faculdade de Medicina de Ribeirão Preto da USP (FMRP-USP).',
      'Residência em Neonatologia pela Faculdade de Medicina de Ribeirão Preto da USP (FMRP-USP).',
      'Residência em Cardiologia Pediátrica pelo Instituto do Coração da FMUSP (InCor-FMUSP).',
      'Especialização em Ecocardiografia Pediátrica pelo Instituto do Coração da FMUSP (InCor-FMUSP).',
      'Doutorado em Medicina, área de Pediatria, pela Faculdade de Medicina da USP (FMUSP).',
      'Títulos de Especialista em Pediatria, Terapia Intensiva Pediátrica e Cardiologia Pediátrica pela AMB.',
      'Diretor da Divisão de Cardiologia Pediátrica do ICTDF.',
      'Coordenador da UTI Cardíaca Pediátrica do ICTDF.',
      'Presidente do Departamento Científico de Cardiologia da Sociedade Brasileira de Pediatria (SBP).',
    ],
  },
  {
    name: 'Enf. Carolina Couto',
    field: 'Enfermagem / Transplantes',
    photo: '/palestrantes/carol-couto.jpeg',
    role: 'Coordenadora da linha de cuidados em transplantes do ICTDF',
    bio: [
      'Enfermeira especialista em gestão do sistema brasileiro de transplantes e cardiologia.',
      'Mestre em Ciências Médicas.',
      'Cursando Doutorado em Ciências Médicas pela UnB.',
      'Coordenadora da linha de cuidados em transplantes do ICTDF.',
    ],
  },
  {
    name: 'Dr. Adegil Silva',
    field: 'Cardiologia / Insuficiência Cardíaca',
    photo: '/palestrantes/adegil-silva.jpeg',
    role: 'Médico assistente do Programa de Transplante Cardíaco e Insuficiência Cardíaca do IC-DF',
    bio: [
      'Graduação em Medicina pela Universidade de Brasília (UnB/DF).',
      'Residência em Clínica Médica pela Universidade Estadual de Campinas (UNICAMP).',
      'Residência em Cardiologia pelo Incor-DF e Instituto de Cardiologia em cooperação com a Fundação Universitária de Brasília — FUB/UnB.',
      'Especialização em Insuficiência Cardíaca e Transplante Cardíaco pelo Instituto de Cardiologia do DF.',
      'Título de Especialista em Cardiologia pela Sociedade Brasileira de Cardiologia.',
      'Instrutor do curso Advanced Cardiac Life Support (ACLS) pela American Heart Association.',
      'Médico assistente do Programa de Transplante Cardíaco e Insuficiência Cardíaca do Instituto de Cardiologia do Distrito Federal (IC-DF).',
      'Coordenador Adjunto da Unidade de Dor Torácica do Instituto de Cardiologia do Distrito Federal (IC-DF).',
    ],
  },
  {
    name: 'Dr. Vitor Barzilai',
    field: 'Medicina Intensiva',
    photo: '/palestrantes/vitor-barzilai.jpeg',
    role: 'Supervisor das Unidades de Terapia Intensiva do ICTDF',
    bio: [
      'Médico supervisor das Unidades de Terapia Intensiva do ICTDF.',
      'Integrante do Programa de Insuficiência Cardíaca e Transplante Cardíaco.',
      'Corresponsável pelo Programa de Suporte Circulatório Mecânico.',
    ],
  },
  {
    name: 'Dr. Alvaro Sarabanda',
    field: 'Arritmias / Eletrofisiologia',
    photo: '/palestrantes/dr-alvaro.jpeg',
    role: 'Supervisor da Unidade Clínica de Arritmias, Eletrofisiologia e Estimulação Cardíaca Artificial',
    bio: [
      'Médico supervisor da Unidade Clínica de Arritmias, Eletrofisiologia e Estimulação Cardíaca Artificial.',
      'Fellow da Heart Rhythm Society / North American Society of Pacing and Electrophysiology (NASPE) desde abril de 1998.',
      'Membro titular da Sociedade Brasileira de Cardiologia (SBC), matrícula nº 08515-7.',
      'Membro titular da Sociedade Brasileira de Arritmias Cardíacas (SOBRAC) e do Departamento de Arritmias e Eletrofisiologia (DAEC) da SBC desde janeiro de 1996.',
    ],
  },
  {
    name: 'Dr. Marlon Rodrigues',
    field: 'Anestesiologia',
    photo: '/palestrantes/dr-marlon.jpeg',
    role: 'Anestesiologista',
    bio: ['Anestesiologista.'],
  },
  {
    name: 'Dr. Elson Borges',
    field: 'Cirurgia Cardiovascular',
    photo: '/palestrantes/elson-borges.jpeg',
    role: 'Cirurgião Cardiovascular no ICTDF e no Hospital de Base',
    bio: [
      'Cirurgião Cardiovascular no ICTDF e no Hospital de Base.',
      'Membro Especialista da Sociedade Brasileira de Cirurgia Cardiovascular (SBCCV).',
    ],
  },
  {
    name: 'Dr. Lucas Renhe',
    field: 'Anestesiologia',
    photo: '/palestrantes/lucas-renhe.jpeg',
    role: 'Anestesiologista',
    bio: ['Anestesiologista.'],
  },
  {
    name: 'Juliana Rocha',
    field: 'Psicologia Hospitalar',
    photo: '/palestrantes/juliana-rocha.jpeg',
    role: 'Psicologia Hospitalar',
    bio: ['Psicóloga hospitalar atuante na assistência cardiovascular e transplantes. Currículo completo em breve.'],
  },
  {
    name: 'Enf. Raniel Lima',
    field: 'Enfermagem / Hemodinâmica',
    photo: '/palestrantes/raniel-lima.jpeg',
    role: 'Enfermeiro especialista em Cardiologia e Hemodinâmica no ICTDF',
    bio: [
      'Enfermeiro especialista em Cardiologia e Hemodinâmica no ICTDF.',
      'Enfermeiro master do Núcleo de Ensino e Educação Continuada.',
      'Instrutor certificado pela American Heart Association (AHA) nos cursos BLS e ACLS do Centro de Treinamentos do ICTDF.',
      'Tutor e preceptor do Programa de Residência Uniprofissional em Cardiologia e Hemodinâmica.',
    ],
  },
  {
    name: 'Daniely Maciel',
    field: 'Perfusão',
    photo: '/palestrantes/daniely-maciel.jpeg',
    role: 'Perfusionista do ICTDF',
    bio: [
      'Fisioterapeuta pela Universidade da Amazônia.',
      'Especialista em Assistência Cardiorrespiratória pela Faculdade de Medicina da USP (residência).',
      'Sócia da SBCEC (em processo de titularidade).',
      'Perfusionista do ICTDF.',
    ],
  },
  {
    name: 'Dr. Gustavo Lopes',
    field: 'Cardiologia',
    photo: '/palestrantes/gustavo-lopes.jpeg',
    role: 'Cardiologista',
    bio: [
      'Graduação em Medicina pela Universidade Federal do Triângulo Mineiro (UFTM), 2009-2015.',
      'Residência em Clínica Médica pela Universidade Federal do Triângulo Mineiro (UFTM), 2017-2019.',
      'Residência em Cardiologia pelo Instituto de Cardiologia do Distrito Federal (ICDF), 2019-2021.',
    ],
  },
  {
    name: 'Dra. Helen Souto Siqueira',
    field: 'Nefrologia / Transplante Renal',
    photo: '/palestrantes/helen-souto.jpg',
    role: 'Coordenadora do Serviço de Nefrologia e Transplante Renal do ICTDF',
    bio: [
      'Especialização em Nefrologia pela Escola Paulista de Medicina (EPM).',
      'Coordenadora do Serviço de Nefrologia e Transplante Renal do Instituto de Cardiologia e Transplantes do Distrito Federal (ICTDF).',
    ],
  },
  {
    name: 'Dr. Guilherme Urpia',
    field: 'Cardiologia / Imagem Cardiovascular',
    photo: '/palestrantes/guilherme-urpia.jpeg',
    role: 'Médico supervisor do Instituto de Cardiologia do Distrito Federal',
    bio: [
      'Graduação em Medicina pela Universidade Federal da Bahia (UFBA), concluída em 1997.',
      'Residência em Clínica Médica pela Universidade de São Paulo (USP).',
      'Residência em Cardiologia pela Universidade de São Paulo (USP).',
      'Especialização em Ressonância Magnética e Tomografia Computadorizada Cardiovascular pelo InCor-FMUSP.',
      'Doutorado em Cardiologia pela Universidade de São Paulo (USP).',
      'Médico supervisor do Instituto de Cardiologia do Distrito Federal, vinculado à Fundação Universitária de Cardiologia.',
      'Ênfase em ressonância magnética e tomografia computadorizada cardiovascular.',
    ],
  },
  {
    name: 'Dr. Cláudio Cunha',
    field: 'Cirurgia Cardiovascular',
    photo: '/palestrantes/claudio-cunha.png',
    role: 'Cirurgião cardiovascular do Instituto de Cardiologia do Distrito Federal',
    bio: [
      'Graduação em Medicina pela Universidade Federal de Uberlândia (UFU), concluída em 1994.',
      'Residência em Cirurgia Geral pela Universidade Federal de Uberlândia (UFU).',
      'Residência em Cirurgia Cardiovascular pela Universidade de São Paulo (USP).',
      'Doutorado em Imunologia e Parasitologia Aplicadas pela Universidade Federal de Uberlândia (UFU).',
      'Título de Especialista pela Sociedade Brasileira de Cirurgia Cardiovascular (SBCCV).',
      'Cirurgião cardiovascular do Instituto de Cardiologia do Distrito Federal.',
      'Cirurgião cardiovascular do Hospital de Clínicas da FAEPU (Uberlândia).',
      'Atuação em cirurgia da aorta, plastias valvares, cardiopatias congênitas e cirurgia cardíaca robótica.',
    ],
  },
]

export function Speakers() {
  const [active, setActive] = useState<Speaker | null>(null)
  const [showAll, setShowAll] = useState(false)
  const visibleSpeakers = showAll ? speakers : speakers.slice(0, 6)

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section id="palestrantes" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-wine">
            03 · Palestrantes e convidados
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
            Conectando Conhecimentos.
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Uma curadoria de especialistas ativos nas principais áreas da assistência cardiovascular
            e transplantes multidisciplinar. Clique em um palestrante para ver o currículo completo.
          </p>
        </Reveal>

        <div
          id="speakers-grid"
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 lg:gap-6"
        >
          {visibleSpeakers.map((s, i) => (
            <Reveal key={s.name} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setActive(s)}
                aria-label={`Ver currículo de ${s.name}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-cream text-left transition-all duration-300 hover:-translate-y-1 hover:border-wine/40 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                <Image
                  src={s.photo || '/placeholder.svg'}
                  alt={`Foto de ${s.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 30vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent opacity-90"
                />
                <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-cream/85 text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                </span>
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <span className="inline-flex rounded-full bg-gold/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-navy">
                    {s.field}
                  </span>
                  <h3 className="mt-2 font-serif text-lg leading-tight text-white md:text-2xl">
                    {s.name}
                  </h3>
                  <span className="mt-1.5 inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-white/60">
                    Ver currículo
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {speakers.length > 6 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((value) => !value)}
              aria-expanded={showAll}
              aria-controls="speakers-grid"
              className="group inline-flex items-center gap-2 rounded-full border border-wine/20 bg-background px-7 py-3.5 text-xs font-semibold uppercase tracking-[0.14em] text-wine transition-all duration-300 hover:-translate-y-0.5 hover:border-wine hover:bg-wine hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              {showAll ? 'Ver menos' : 'Ver mais'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-end justify-center bg-navy/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="speaker-modal-title"
        >
          <div
            className="relative max-h-[90vh] w-full max-w-3xl animate-modal-in overflow-y-auto rounded-t-3xl bg-background sm:rounded-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActive(null)}
              aria-label="Fechar"
              className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-cream/90 text-navy transition-colors hover:bg-gold"
            >
              <X className="h-5 w-5" strokeWidth={2} />
            </button>

            <div className="grid gap-0 sm:grid-cols-[minmax(0,240px)_1fr]">
              <div className="relative h-64 w-full sm:h-full">
                <Image
                  src={active.photo || '/placeholder.svg'}
                  alt={`Foto de ${active.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 240px"
                  className="object-cover object-top"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent sm:bg-gradient-to-r sm:from-transparent sm:to-background/10"
                />
              </div>

              <div className="p-6 sm:p-9">
                <span className="inline-flex rounded-full bg-wine/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-wine">
                  {active.field}
                </span>
                <h3
                  id="speaker-modal-title"
                  className="mt-4 font-serif text-3xl font-light leading-tight text-navy sm:text-4xl"
                >
                  {active.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{active.role}</p>

                <div className="mt-6 h-px w-full bg-border" />

                <ul className="mt-6 space-y-3">
                  {active.bio.map((line, idx) => (
                    <li key={idx} className="flex gap-3 leading-relaxed text-foreground/85">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold"
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
