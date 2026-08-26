export const REGISTRATION_BATCH_CHANGE_AT = '2026-09-01T00:00:00-03:00'

export type RegistrationBatch = {
  label: string
  shortLabel: string
  priceNote: string
  closesText: string
  ctaLabel: string
  heroPrice: string
  prices: Record<string, string>
}

const secondBatch: RegistrationBatch = {
  label: '2º lote',
  shortLabel: '2º Lote',
  priceNote: 'garantido até 31/08/2026.',
  closesText: 'encerra em',
  ctaLabel: 'Garantir vaga — 2º lote',
  heroPrice: '85',
  prices: {
    academics: '85',
    ictdfResidents: '100',
    otherResidents: '130',
    affiliatedProfessionals: '180',
    professionals: '250',
  },
}

const thirdBatch: RegistrationBatch = {
  label: '3º lote',
  shortLabel: '3º Lote',
  priceNote: 'vigente a partir de 01/09/2026.',
  closesText: 'vigente',
  ctaLabel: 'Garantir vaga — 3º lote',
  heroPrice: '130',
  prices: {
    academics: '130',
    ictdfResidents: '100',
    otherResidents: '160',
    affiliatedProfessionals: '180',
    professionals: '300',
  },
}

export function getActiveRegistrationBatch(now = Date.now()) {
  return now >= new Date(REGISTRATION_BATCH_CHANGE_AT).getTime() ? thirdBatch : secondBatch
}

export function isFinalRegistrationBatch(now = Date.now()) {
  return getActiveRegistrationBatch(now) === thirdBatch
}
