'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { REGISTRATION_URL } from '@/lib/workshops'

const links = [
  { label: 'Sobre', href: '/#sobre' },
  { label: 'Programação', href: '/#programacao' },
  { label: 'Palestrantes', href: '/#palestrantes' },
  { label: 'Ingressos', href: '/#ingressos' },
  { label: 'Workshops', href: '/workshops' },
  { label: 'Local', href: '/#local' },
  { label: 'FAQ', href: '/#faq' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8"
      >
        <Link
          href="/"
          className={`flex items-center gap-2.5 transition-colors ${scrolled ? 'text-navy' : 'text-white'}`}
          onClick={() => setOpen(false)}
        >
          <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-cream ring-1 ring-gold/30">
            <Image
              src="/logo-simposio.png"
              alt="Logo do I Simpósio Multidisciplinar ICTDF"
              width={40}
              height={40}
              className="h-8 w-8 object-contain"
            />
          </span>
          <span className="text-[13px] font-semibold leading-tight tracking-tight">
            I Simpósio
            <span
              className={`block text-[11px] font-normal ${scrolled ? 'text-muted-foreground' : 'text-white/50'}`}
            >
              Multidisciplinar ICTDF
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[12px] font-medium uppercase tracking-[0.14em] transition-colors hover:text-gold ${
                  scrolled ? 'text-navy/70 hover:text-wine' : 'text-white/70'
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={REGISTRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full bg-wine px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-wine-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Inscrever-se
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <button
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden ${
              scrolled ? 'border-border text-navy' : 'border-white/25 text-white'
            }`}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden bg-background transition-all duration-300 lg:hidden ${
          open ? 'max-h-[80vh] border-b border-border' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-3 font-serif text-2xl text-navy"
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-wine px-5 py-3.5 text-sm font-semibold uppercase tracking-[0.12em] text-wine-foreground"
            >
              Inscrever-se <ArrowUpRight className="h-4 w-4" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export function HeartMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 20.5C12 20.5 3.5 15 3.5 8.9C3.5 6.2 5.5 4.2 8 4.2C9.7 4.2 11.2 5.2 12 6.7C12.8 5.2 14.3 4.2 16 4.2C18.5 4.2 20.5 6.2 20.5 8.9C20.5 15 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path
        d="M7 11.5H9.5L10.8 8.8L12.6 14L14 11.5H17"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
