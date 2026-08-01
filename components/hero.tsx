'use client'

import { motion } from 'framer-motion'
import { ArrowRight, FileText, Mail } from 'lucide-react'
import { OrbitingBadges } from '@/components/orbiting-badges'
import { SOCIALS } from '@/lib/portfolio-data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24"
    >
      {/* background */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(60% 50% at 50% 0%, oklch(0.78 0.15 195 / 0.16), transparent 70%), radial-gradient(45% 45% at 85% 30%, oklch(0.8 0.17 165 / 0.12), transparent 70%)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        aria-hidden="true"
        style={{ background: 'linear-gradient(to top, var(--background), transparent)' }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur-sm">
            <span className="size-2 animate-pulse rounded-full bg-accent" />
            Available for DevOps & Cloud roles
          </span>

          <div className="mt-6 flex flex-col gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Sagar Dubey
              </h1>
              <div className="group relative inline-flex items-center rounded-full border border-cyan-400/20 bg-[#090D16]/90 px-4 py-2 text-sm text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-cyan-300/40">
                <span className="mr-3 inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.55)] animate-pulse" />
                AWS Infrastructure: Healthy (99.99% Uptime)

                <div className="pointer-events-none absolute right-0 top-full mt-3 hidden w-72 rounded-3xl border border-cyan-400/20 bg-[#090D16]/95 p-4 text-left text-xs text-slate-200 shadow-[0_0_40px_rgba(34,211,238,0.18)] backdrop-blur-2xl transition-opacity duration-200 group-hover:block">
                  <p className="font-semibold text-cyan-200">Active Cluster Services</p>
                  <ul className="mt-3 space-y-2">
                    <li>• EKS Cluster: Online (v1.28)</li>
                    <li>• GitOps Engine: ArgoCD Synced</li>
                    <li>• Security Gateways: Passed</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="max-w-xl text-pretty font-mono text-sm leading-relaxed text-muted-foreground sm:text-base">
              DevOps Engineer | AWS, AZURE, GCP | Docker, Kubernetes, Terraform, Jenkins, ArgoCD  &amp;
              DevSecOps Specialist.
              <span className="block">| Python, Shell Scripting.| Git, Github</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore Projects
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href={SOCIALS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/50 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary transition-all hover:border-primary hover:shadow-[0_0_28px_-6px_var(--primary)]"
            >
              <FileText className="size-4" aria-hidden="true" />
              View Resume
            </a>
            <a
              href={SOCIALS.email}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/60 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:border-accent/60 hover:text-accent"
            >
              <Mail className="size-4" aria-hidden="true" />
              Get in Touch
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
          className="order-first lg:order-last"
        >
          <OrbitingBadges />
        </motion.div>
      </div>
    </section>
  )
}
