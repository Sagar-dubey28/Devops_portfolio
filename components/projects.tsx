'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Activity, ArrowRight, ExternalLink, FolderGit2, Lock, Rocket, ShieldCheck, X } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { PROJECTS } from '@/lib/portfolio-data'
import { SectionHeading } from '@/components/skills'

export function Projects() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const activeProjectDetails = PROJECTS.find((project) => project.title === activeProject)

  return (
    <section id="projects" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="// selected work"
        title="Projects Showcase"
        subtitle="Production-grade platforms built end-to-end — from Terraform-provisioned infrastructure to GitOps delivery."
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

            {(project.title === 'End-to-End Microservices CI/CD Platform on AWS EKS' || project.title === 'EduBlitz Medical B2B ERP System') ? (
              <>
                <button
                  type="button"
                  onClick={() => setActiveProject(project.title)}
                  className="relative mt-3 rounded-2xl border border-cyan-400/30 bg-cyan-500/10 p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/50 hover:bg-cyan-500/15"
                >
                  <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                    <Rocket className="size-4" aria-hidden="true" />
                    View Architecture Flow
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    Explore the deployment architecture, delivery pipelines, and infrastructure layout for this project.
                  </p>
                </button>
                <p className="relative mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </>
            ) : (
              <p className="relative mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
            )}

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

      <AnimatePresence>
        {activeProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 px-4 py-6 backdrop-blur-xl"
            onClick={() => setActiveProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              onClick={(event) => event.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-3xl border border-cyan-400/40 shadow-[0_0_80px_rgba(34,211,238,0.18)]"
              style={{
                background: 'radial-gradient(circle at top left, rgba(34, 211, 238, 0.16), transparent 45%), rgba(2, 6, 23, 0.97)',
              }}
            >
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute right-4 top-4 rounded-full border border-cyan-400/20 bg-slate-950/70 p-2 text-cyan-200 transition hover:bg-cyan-400/10"
                aria-label="Close architecture view"
              >
                <X className="size-4" aria-hidden="true" />
              </button>

              <div className="border-b border-cyan-400/20 px-6 py-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                  <Activity className="size-3.5" aria-hidden="true" />
                  Architecture Flow
                </div>
                <h4 className="mt-2 text-xl font-semibold text-slate-100">
                  {activeProjectDetails?.title}
                </h4>
                <p className="mt-2 text-sm text-slate-400">
                  {activeProjectDetails?.description}
                </p>
              </div>

              <div className="max-h-[73vh] overflow-y-auto custom-scrollbar px-6 pb-6 pt-4">
                {activeProject === 'End-to-End Microservices CI/CD Platform on AWS EKS' ? (
                  <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4">
                      <svg viewBox="0 0 620 280" className="w-full" role="img" aria-label="Architecture flow diagram">
                        <rect x="20" y="30" width="140" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="90" y="62" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">GitHub Webhook</text>

                        <rect x="200" y="30" width="140" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="270" y="62" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Jenkins CI</text>

                        <rect x="380" y="30" width="170" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="465" y="62" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">SonarQube &amp; Trivy</text>

                        <path d="M160 57 H200" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M340 57 H380" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="80" y="132" width="170" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="165" y="164" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Docker Build / ECR Push</text>

                        <rect x="290" y="132" width="150" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="365" y="164" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">ArgoCD GitOps</text>

                        <rect x="480" y="132" width="120" height="54" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="540" y="164" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">AWS EKS Cluster</text>

                        <path d="M465 84 V132" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M250 186 H290" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M440 186 H480" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <path d="M160 186 H160 220" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M160 220 H480 220" stroke="#67e8f9" strokeWidth="2" />
                        <path d="M480 220 V186" stroke="#67e8f9" strokeWidth="2" />

                        <defs>
                          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#67e8f9" />
                          </marker>
                        </defs>
                      </svg>
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                          <ShieldCheck className="size-4" aria-hidden="true" />
                          Production Metrics
                        </div>
                        <div className="mt-3 space-y-2 text-sm text-slate-300">
                          <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-3">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Deployment Strategy</p>
                            <p className="mt-1">Blue-Green / Rolling Updates</p>
                          </div>
                          <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-3">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Security Gateways</p>
                            <p className="mt-1">SonarQube quality gates &amp; Trivy container scans</p>
                          </div>
                          <div className="rounded-xl border border-cyan-400/20 bg-slate-950/70 p-3">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Observability</p>
                            <p className="mt-1">Prometheus metrics &amp; Grafana dashboards</p>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 text-sm text-slate-300">
                        <div className="flex items-center gap-2 font-semibold text-slate-100">
                          <ArrowRight className="size-4 text-cyan-300" aria-hidden="true" />
                          Delivery Highlights
                        </div>
                        <ul className="mt-3 space-y-2 text-sm text-slate-400">
                          <li>• Automated GitHub webhooks trigger Jenkins pipelines on every commit.</li>
                          <li>• Secure image promotion with container scanning and registry signing.</li>
                          <li>• ArgoCD continuously reconciles the cluster with Git-defined state.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid gap-6">
                      <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">A</span>
                          Static Frontend CDN Pathway
                        </div>
                        <div className="mt-4 grid gap-4">
                          {[
                            ['User Browser', 'AWS Route 53 (A Record / DNS)'],
                            ['Route 53', 'AWS CloudFront CDN + ACM SSL'],
                            ['CloudFront', 'AWS S3 Bucket (React SPA Static Hosting)'],
                          ].map(([start, end], index) => (
                            <div key={index} className="flex flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 sm:flex-row sm:items-center">
                              <div className="flex items-center justify-center rounded-2xl bg-cyan-500/10 p-3 text-cyan-200">{index + 1}</div>
                              <div className="space-y-1 text-sm text-slate-300">
                                <p className="font-semibold text-slate-100">{start}</p>
                                <p className="text-slate-400">→ {end}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">B</span>
                          Microservices Backend Pathway
                        </div>
                        <div className="mt-4 grid gap-4">
                          {[
                            ['User API Request', 'AWS Route 53 (Subdomain DNS)'],
                            ['Route 53', 'AWS Application Load Balancer (ALB Ingress)'],
                            ['ALB Ingress', 'AWS EKS Cluster (Spring Boot Microservices)'],
                            ['EKS Cluster', 'MongoDB Atlas Multi-node Cluster'],
                          ].map(([start, end], index) => (
                            <div key={index} className="flex flex-col gap-3 rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 sm:flex-row sm:items-center">
                              <div className="flex items-center justify-center rounded-2xl bg-cyan-500/10 p-3 text-cyan-200">{index + 1}</div>
                              <div className="space-y-1 text-sm text-slate-300">
                                <p className="font-semibold text-slate-100">{start}</p>
                                <p className="text-slate-400">→ {end}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/60 p-6 text-slate-300">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Production Highlights</p>
                          <h5 className="mt-2 text-lg font-semibold text-slate-100">EduBlitz Medical B2B ERP System</h5>
                        </div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                          Live-ready AWS architecture with secure frontend & backend routing
                        </div>
                      </div>
                      <div className="mt-5 grid gap-4 sm:grid-cols-3">
                        {[
                          'Authentication: JWT HMAC SHA256 Injected via K8s Secrets',
                          'Database: High-Availability MongoDB Atlas Connection Pooling',
                          'CDN & Security: Edge-cached React Assets with ACM SSL Certificates',
                        ].map((item) => (
                          <div key={item} className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-4 text-sm text-slate-300">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{item.split(':')[0]}</p>
                            <p className="mt-2 text-slate-100">{item.split(':')[1].trim()}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  )
}
