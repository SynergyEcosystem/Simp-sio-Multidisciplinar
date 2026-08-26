const specialties = [
  'Cardiologia',
  'Cirurgia Cardíaca',
  'Medicina Intensiva',
  'Enfermagem',
  'Perfusão',
  'Anestesia',
  'Nutrição',
  'Psicologia Hospitalar',
  'Fisioterapia',
  'Biomedicina',
  'Transplantes',
]

export function Marquee() {
  const row = [...specialties, ...specialties]
  return (
    <div className="overflow-hidden border-y border-border bg-cream py-5">
      <div className="flex w-max animate-marquee items-center gap-8 whitespace-nowrap">
        {row.map((s, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="font-serif text-xl text-navy/80 sm:text-2xl">{s}</span>
            <span className="h-1.5 w-1.5 rounded-full bg-wine/60" />
          </div>
        ))}
      </div>
    </div>
  )
}
