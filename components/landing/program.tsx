'use client'

import Link from 'next/link'
import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, ChevronDown } from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/workshops'

const SIMPOSIO_URL = REGISTRATION_URL

type Item = { time: string; title: string; who: string; tag: string }
type Room = { id: string; label: string; sub: string; items: Item[] }

type Day = {
  id: string
  date: string
  label: string
  place: string
  cta: 'workshops' | 'simposio' | null
  rooms: Room[]
}

const days: Day[] = [
  {
    id: 'd25',
    date: '25 · Set',
    label: 'Workshops práticos',
    place: 'ICTDF',
    cta: 'workshops',
    rooms: [
      {
        id: 'd25-unica',
        label: 'Estações práticas',
        sub: 'Hands-on · vagas limitadas',
        items: [
          { time: '08h às 12h', title: 'Hands-On — ECMO na prática clínica', who: 'Vitor Barzilai', tag: 'Workshop' },
          { time: '08h às 16h', title: 'Emergências cardiológicas: instabilidades elétricas', who: 'Raniel Lima', tag: 'Workshop' },
          { time: '08h às 16h', title: 'Da insuficiência cardíaca ao transplante', who: 'Equipe Multi TX', tag: 'Workshop' },
          { time: '14h às 18h', title: 'Hands on — Máquina de CEC e perfusão', who: 'Maria Regina Barros', tag: 'Workshop' },
          { time: '14h às 18h', title: 'Anatomia cardíaca e dissecção', who: 'Cirurgia Cardíaca', tag: 'Workshop' },
          { time: '14h às 18h', title: 'Manejo das Vias Aéreas', who: 'Lucas Renhe', tag: 'Workshop' },
        ],
      },
    ],
  },
  {
    id: 'd26',
    date: '26 · Set',
    label: 'Simpósio Multidisciplinar',
    place: 'CEUB Campus Asa Norte',
    cta: 'simposio',
    rooms: [
      {
        id: 'd26-primaria',
        label: 'Sala Primária',
        sub: 'Cirurgia cardíaca e transplantes',
        items: [
          { time: '07h00', title: 'Cadastro e Credenciamento', who: '', tag: 'Abertura' },
          { time: '07h30', title: 'Abertura', who: '', tag: 'Abertura' },
          { time: '08h00', title: 'Preparo nutricional do paciente candidato à intervenção', who: 'Nutricionista · Thadeu / Karol', tag: 'Palestra' },
          { time: '08h35', title: 'Avaliação Pré-anestésica', who: 'Anestesiologista · Lucas Renhe', tag: 'Palestra' },
          { time: '09h10', title: 'Circulação extracorpórea — planejamento para boa condução', who: 'Perfusionista · Daniely', tag: 'Palestra' },
          { time: '09h45', title: 'Moderação — Cirurgia Cardíaca: Preparo do Paciente', who: 'Guilherme Urpia', tag: 'Moderação' },
          { time: '10h00', title: 'Coffee Break', who: '', tag: 'Intervalo' },
          { time: '10h30', title: 'Intraoperatório — Um trabalho de equipe', who: 'Cirurgião Cardiovascular · Tubino / Mamede', tag: 'Palestra' },
          { time: '11h10', title: 'Desafios do pós-operatório de cirurgia cardíaca', who: 'Intensivista · Dr. Vitor / Gustavo Lopes', tag: 'Palestra' },
          { time: '12h00', title: 'Almoço', who: '', tag: 'Intervalo' },
          { time: '14h00', title: 'Normativas e regulamentações — Atualizações', who: 'Diretora da Central de TX · Daniela Salomão', tag: 'Palestra' },
          { time: '14h40', title: 'O Doador de órgãos — Assistência essencial para o sucesso', who: 'Intensivista · Dr. Adegil', tag: 'Palestra' },
          { time: '15h20', title: 'Importância da Perfusão na Captação de órgãos', who: 'Perfusionista · Juliana', tag: 'Palestra' },
          { time: '16h00', title: 'Moderação — Transplantes: da doação à captação', who: 'Luiz Gustavo', tag: 'Moderação' },
          { time: '16h15', title: 'Coffee Break', who: '', tag: 'Intervalo' },
          { time: '16h45', title: 'O Transplante Renal', who: 'Nefrologista · Dra. Helen Souto', tag: 'Palestra' },
          { time: '17h25', title: 'O Transplante Hepático', who: 'Cirurgião de Transplante Hepático · Dr. André Watanabe', tag: 'Palestra' },
          { time: '18h10', title: 'O Transplante Cardíaco', who: 'Cirurgião Cardiovascular · Dr. Elson', tag: 'Palestra' },
          { time: '18h50', title: 'Moderação — Transplantes: programas e perspectivas no DF', who: 'Carolina Couto', tag: 'Moderação' },
          { time: '19h00', title: 'Encerramento', who: '', tag: 'Encerramento' },
        ],
      },
      {
        id: 'd26-paralela',
        label: 'Sala Paralela',
        sub: 'Hemodinâmica e cardiopatias',
        items: [
          { time: '07h00', title: 'Cadastro e Credenciamento', who: '', tag: 'Abertura' },
          { time: '07h30', title: 'Abertura', who: '', tag: 'Abertura' },
          { time: '08h00', title: 'Infarto agudo do Miocárdio — Intervenção hemodinâmica', who: 'Hemodinamicista · Dr. Jeferson', tag: 'Palestra' },
          { time: '08h40', title: 'Mapeamento da condução elétrica. Novos dispositivos', who: 'Eletrofisiologista · Dr. Álvaro', tag: 'Palestra' },
          { time: '09h20', title: 'TAVI', who: 'Hemodinamicista · Dr. Luciano', tag: 'Palestra' },
          { time: '10h00', title: 'Coffee Break', who: '', tag: 'Intervalo' },
          { time: '10h30', title: 'Pós operatório — Manejo e desmame ventilatório', who: 'Fisioterapia · Fisio Jonatas', tag: 'Palestra' },
          { time: '11h10', title: 'Questões éticas relacionadas ao Transplante', who: 'Enfermagem · Carolina Couto', tag: 'Palestra' },
          { time: '11h50', title: 'Almoço', who: '', tag: 'Intervalo' },
          { time: '14h00', title: 'Cirurgia por vídeo — Benefícios e indicações', who: 'Cirurgião Cardiovascular · Tatiane / Murilo', tag: 'Palestra' },
          { time: '14h40', title: 'Cirurgia por Robótica — Benefícios e indicações', who: 'Cirurgião Cardiovascular · Dr. Cláudio', tag: 'Palestra' },
          { time: '15h20', title: 'Desafios Anestésicos diante da evolução', who: 'Anestesiologista · Dr. Marlon', tag: 'Palestra' },
          { time: '16h00', title: 'Coffee Break', who: '', tag: 'Intervalo' },
          { time: '16h30', title: 'Correções complexas — os desafios do intraoperatório', who: 'Cirurgião Cardiovascular · Dra. Ana Thalita', tag: 'Palestra' },
          { time: '17h10', title: 'Desafios da perfusão em neonatos e pacientes pediátricos', who: 'Perfusionista · Maria Regina Barros', tag: 'Palestra' },
          { time: '17h50', title: 'Evoluções no tratamento das Cardiopatias Congênitas', who: 'Cardiologista · Dr. Jorge Afiune', tag: 'Palestra' },
          { time: '18h30', title: 'Encerramento', who: '', tag: 'Encerramento' },
        ],
      },
    ],
  },
  {
    id: 'd27',
    date: '27 · Set',
    label: 'Prova de estágio para residentes de anestesia',
    place: 'ICTDF',
    cta: null,
    rooms: [
      {
        id: 'd27-unica',
        label: 'Prova de estágio',
        sub: 'Residentes de anestesia',
        items: [
          { time: '08h', title: 'Prova de estágio para residentes de anestesia', who: 'Atividade optativa · inscrição à parte', tag: 'Prova' },
        ],
      },
    ],
  },
]

const PREVIEW_COUNT = 6

export function Program() {
  const [active, setActive] = useState(days[1].id)
  const current = days.find((d) => d.id === active)!
  const [room, setRoom] = useState(current.rooms[0].id)
  const [expanded, setExpanded] = useState(false)
  const scheduleRef = useRef<HTMLDivElement>(null)

  const currentRoom = current.rooms.find((r) => r.id === room) ?? current.rooms[0]
  const showRoomTabs = current.rooms.length > 1

  const collapsible = current.cta === 'simposio' && currentRoom.items.length > PREVIEW_COUNT
  const visibleItems = collapsible && !expanded ? currentRoom.items.slice(0, PREVIEW_COUNT) : currentRoom.items

  function selectDay(id: string) {
    setActive(id)
    const day = days.find((d) => d.id === id)!
    setRoom(day.rooms[0].id)
    setExpanded(false)
  }

  function selectRoom(id: string) {
    setRoom(id)
    setExpanded(false)
  }

  function toggleExpanded() {
    if (expanded) {
      // Recolhendo: volta a rolagem para o topo da lista de programação.
      setExpanded(false)
      scheduleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      setExpanded(true)
    }
  }

  return (
    <section id="programacao" className="bg-navy py-20 text-white md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-2xl">
          <p className="text-[11px] font-medium uppercase tracking-[0.24em] text-gold">
            02 · Programação
          </p>
          <h2 className="mt-5 font-serif text-4xl font-light leading-[1.05] text-balance sm:text-5xl">
            Três dias para <em className="not-italic text-gold">transformar</em> a assistência
            cardiovascular.
          </h2>
          <p className="mt-5 leading-relaxed text-white/60">
            Programação desenhada para quem está na linha de frente. Cada sessão conecta evidência
            científica com prática clínica real.
          </p>
        </div>

        <div className="mt-12">
          <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.24em] text-white/40">
            Escolha o dia
          </p>
          <div
            role="tablist"
            aria-label="Dias do simpósio"
            className="grid grid-cols-1 gap-2 sm:grid-cols-3"
          >
            {days.map((d) => {
              const on = d.id === active
              return (
                <button
                  key={d.id}
                  role="tab"
                  aria-selected={on}
                  onClick={() => selectDay(d.id)}
                  className={`rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                    on
                      ? 'border-gold bg-white/[0.06]'
                      : 'border-white/10 bg-transparent hover:border-white/25'
                  }`}
                >
                  <span className={`text-sm font-semibold ${on ? 'text-gold' : 'text-white/70'}`}>
                    {d.date}
                  </span>
                  <span className="mt-1 block font-serif text-base leading-tight sm:text-lg">
                    {d.label}
                  </span>
                  <span className="mt-1 block text-[11px] uppercase tracking-[0.16em] text-white/40">
                    {d.place}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        <div ref={scheduleRef} className="scroll-mt-24">
          <div className="mt-10 flex items-center gap-4">
            <span className="font-serif text-2xl text-gold sm:text-3xl">Programação</span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="text-[11px] uppercase tracking-[0.16em] text-white/40">
              {current.date}
            </span>
          </div>

          {showRoomTabs && (
            <div
              role="tablist"
              aria-label="Salas do simpósio"
              className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2"
            >
              {current.rooms.map((r) => {
                const on = r.id === room
                return (
                  <button
                    key={r.id}
                    role="tab"
                    aria-selected={on}
                    onClick={() => selectRoom(r.id)}
                    className={`rounded-xl border px-4 py-3 text-left transition-all duration-300 sm:px-5 ${
                      on
                        ? 'border-gold/70 bg-gold/10'
                        : 'border-white/10 bg-transparent hover:border-white/25'
                    }`}
                  >
                    <span className={`font-serif text-base ${on ? 'text-gold' : 'text-white/80'}`}>
                      {r.label}
                    </span>
                    <span className="mt-0.5 block text-[11px] uppercase tracking-[0.14em] text-white/40">
                      {r.sub}
                    </span>
                  </button>
                )
              })}
            </div>
          )}
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
          {visibleItems.map((it, i) => (
            <div
              key={`${currentRoom.id}-${i}`}
              className="group grid grid-cols-1 gap-2 border-b border-white/10 p-5 transition-colors last:border-b-0 hover:bg-white/[0.04] sm:grid-cols-[120px_1fr_auto] sm:items-center sm:gap-6 sm:p-6"
              style={{ animation: `fadeUp 0.5s ease ${Math.min(i, 8) * 50}ms both` }}
            >
              <span className="order-1 text-sm font-medium text-gold">{it.time}</span>
              <div className="order-3 sm:order-2">
                <h3 className="font-serif text-lg leading-tight sm:text-xl">{it.title}</h3>
                {it.who && <p className="mt-1 text-sm text-white/50">{it.who}</p>}
              </div>
              <span className="order-2 justify-self-start rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white/60 sm:order-3 sm:justify-self-end">
                {it.tag}
              </span>
            </div>
          ))}
        </div>

        {collapsible && (
          <div className="mt-5 flex justify-center">
            <button
              onClick={toggleExpanded}
              aria-expanded={expanded}
              className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition-colors duration-300 hover:border-gold/70 hover:text-gold"
            >
              {expanded ? 'Ver menos' : 'Ver programação completa'}
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
              />
            </button>
          </div>
        )}

        {current.cta === 'workshops' && (
          <div className="mt-6 flex justify-center">
            <Link
              href="/workshops"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              Ver e inscrever-se nos workshops
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        )}

        {current.cta === 'simposio' && (
          <div className="mt-6 flex justify-center">
            <a
              href={SIMPOSIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-navy transition-transform duration-300 hover:-translate-y-0.5"
            >
              Inscrever-se no simpósio
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        )}
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}`}</style>
    </section>
  )
}
