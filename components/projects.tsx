'use client'

import { motion } from 'framer-motion'
import { ExternalLink, FolderGit2, Lock } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { PROJECTS } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/skills'

export function Projects() {

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="// selected work"
        title="Projects Showcase"
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-primary/40"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              style={{ background: 'oklch(0.78 0.15 195 / 0.35)' }}
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <FolderGit2 className="size-5" aria-hidden="true" />
              </div>
              <span className="font-mono text-xs text-muted-foreground">
                0{i + 1} / EKS Platform
              </span>
            </div>

            <h3 className="relative mt-4 text-balance text-xl font-semibold leading-snug">
              {project.title}
            </h3>

            <p className="relative mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="relative mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="relative mt-6 flex-1" />

            <div className="relative pt-2">
              {project.available && project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                >
                  <GithubIcon className="size-4" />
                  {project.linkLabel}
                  <ExternalLink className="size-3.5 opacity-70" aria-hidden="true" />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center gap-2 rounded-lg border border-border bg-secondary/40 px-4 py-2.5 text-sm font-semibold text-muted-foreground opacity-70"
                >
                  <Lock className="size-4" aria-hidden="true" />
                  {project.linkLabel}
                </button>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
