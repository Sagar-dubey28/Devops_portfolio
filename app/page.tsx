import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { MetricsExperience } from '@/components/metrics-experience'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { TerminalWidget } from '@/components/terminal-widget'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="relative w-full max-w-7xl mx-auto px-4 overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <MetricsExperience />
      <Skills />
      <Projects />
      <TerminalWidget />
      <SiteFooter />
    </main>
  )
}
