import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'
import { SOCIALS } from '@/lib/portfolio-data'

export function SiteFooter() {
  const links = [
    { icon: GithubIcon, href: SOCIALS.github, label: 'GitHub' },
    { icon: LinkedinIcon, href: SOCIALS.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: SOCIALS.email, label: 'Email' },
  ]

  return (
    <footer className="relative border-t border-border">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(to right, transparent, oklch(0.78 0.15 195 / 0.5), transparent)',
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-12 sm:px-6">
        <a href="#top" className="font-mono text-lg font-bold">
          sagar<span className="text-primary">.dubey</span>
        </a>

        <div className="flex items-center gap-3">
          {links.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className="flex size-11 items-center justify-center rounded-lg border border-border bg-card/60 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="size-5" aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="text-center font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sagar Dubey. Cloud and Devops Engineer
        </p>
      </div>
    </footer>
  )
}
