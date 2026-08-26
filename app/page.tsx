import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/landing/hero'
import { Marquee } from '@/components/landing/marquee'
import { About } from '@/components/landing/about'
import { Program } from '@/components/landing/program'
import { Speakers } from '@/components/landing/speakers'
import { Tickets } from '@/components/landing/tickets'
import { WorkshopsCta } from '@/components/landing/workshops-cta'
import { Venue } from '@/components/landing/venue'
import { Faq } from '@/components/landing/faq'
import { Sponsors } from '@/components/landing/sponsors'

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Program />
        <Speakers />
        <Tickets />
        <WorkshopsCta />
        <Venue />
        <Faq />
        <Sponsors />
      </main>
      <SiteFooter />
    </>
  )
}
