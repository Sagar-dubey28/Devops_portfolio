'use client'

import { motion } from 'framer-motion'
import { Briefcase, CheckCircle2 } from 'lucide-react'
import { METRICS, EXPERIENCE } from '@/lib/portfolio-data'

export function MetricsExperience() {
  return (
    <section id="experience" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      {/* metrics bar */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {METRICS.map((m, i) => (
          <motion.div
            key={m.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-xl border border-border bg-card/60 p-6 backdrop-blur-sm"
          >
            <div className="font-mono text-4xl font-bold text-primary">{m.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{m.label}</div>
          </motion.div>
        ))}
      </div>

      {/* experience card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur-sm"
      >
        <div className="flex flex-col gap-4 border-b border-border p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Briefcase className="size-6" aria-hidden="true" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">{EXPERIENCE.role}</h3>
              <p className="text-sm text-primary">{EXPERIENCE.company}</p>
            </div>
          </div>
          <span className="w-fit rounded-full border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground">
            {EXPERIENCE.period}
          </span>
        </div>

        <ul className="grid gap-4 p-6 sm:grid-cols-2">
          {EXPERIENCE.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
              <span className="text-sm leading-relaxed text-muted-foreground">{h}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  )
}
