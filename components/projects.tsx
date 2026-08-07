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
                  <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4">
                      <svg viewBox="0 0 720 340" className="w-full" role="img" aria-label="EKS CI CD architecture flow diagram">
                        <defs>
                          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#67e8f9" />
                          </marker>
                        </defs>

                        <rect x="28" y="28" width="160" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="108" y="54" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">GitHub</text>
                        <text x="108" y="72" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Source Code</text>

                        <rect x="220" y="28" width="150" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="295" y="54" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Jenkins</text>
                        <text x="295" y="72" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">CI/CD Pipeline</text>

                        <rect x="430" y="28" width="160" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="510" y="54" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Security Gates</text>
                        <text x="510" y="72" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">SonarQube + Trivy</text>

                        <path d="M188 56 H220" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M370 56 H430" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="110" y="118" width="170" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="195" y="146" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Docker Build</text>
                        <text x="195" y="164" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Image push to ECR</text>

                        <rect x="310" y="118" width="170" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="395" y="146" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">ArgoCD</text>
                        <text x="395" y="164" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">GitOps Delivery</text>

                        <rect x="220" y="208" width="190" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="315" y="236" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">AWS EKS Cluster</text>
                        <text x="315" y="254" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Multi-AZ Kubernetes</text>

                        <path d="M195 150 V208" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M395 150 V208" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M520 56 V188" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="58" y="268" width="120" height="48" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="118" y="294" textAnchor="middle" fill="#e2f7fb" fontSize="12" fontFamily="monospace">ECR</text>
                        <text x="118" y="308" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Container Registry</text>

                        <rect x="268" y="268" width="120" height="48" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="328" y="294" textAnchor="middle" fill="#e2f7fb" fontSize="12" fontFamily="monospace">ALB Ingress</text>
                        <text x="328" y="308" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Ingress Controller</text>

                        <rect x="478" y="268" width="120" height="48" rx="14" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="538" y="294" textAnchor="middle" fill="#e2f7fb" fontSize="12" fontFamily="monospace">Prometheus</text>
                        <text x="538" y="308" textAnchor="middle" fill="#94a3b8" fontSize="11" fontFamily="monospace">Metrics</text>

                        <path d="M280 254 V268" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M390 254 V268" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M370 258 H390" stroke="#67e8f9" strokeWidth="2" />
                      </svg>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
                        <div className="flex items-center gap-2 text-sm font-semibold text-cyan-200">
                          <ShieldCheck className="size-4" aria-hidden="true" />
                          Platform Overview
                        </div>
                        <div className="mt-3 space-y-3 text-sm text-slate-300">
                          <p className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4">
                            GitHub commits trigger Jenkins pipelines, running build, unit tests, and security scans before pushing signed Docker images to Amazon ECR.
                          </p>
                          <p className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4">
                            ArgoCD pulls Helm manifests from Git and deploys microservices to AWS EKS, while ALB Ingress routes user traffic to React, Java, Python, Go, and Node.js services.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/60 p-6 text-slate-300">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Delivery Highlights</p>
                            <h5 className="mt-2 text-lg font-semibold text-slate-100">EKS CI/CD Platform</h5>
                          </div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                            Secure GitOps delivery with multi-language microservices and full observability
                          </div>
                        </div>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          {[
                            {
                              title: 'Pipeline',
                              detail: 'Jenkins triggers building, testing, scanning, and container publishing.',
                            },
                            {
                              title: 'GitOps',
                              detail: 'ArgoCD continuously syncs Kubernetes state from Git manifests.',
                            },
                            {
                              title: 'Security',
                              detail: 'SonarQube and Trivy enforce code quality and image security before deploy.',
                            },
                            {
                              title: 'Observability',
                              detail: 'Prometheus metrics and Grafana dashboards monitor cluster health.',
                            },
                          ].map((item) => (
                            <div key={item.title} className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-4 text-sm text-slate-300">
                              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{item.title}</p>
                              <p className="mt-2 text-slate-100">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4">
                      <svg viewBox="0 0 720 360" className="w-full" role="img" aria-label="EduBlitz architecture flow diagram">
                        <defs>
                          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto">
                            <path d="M0,0 L0,6 L8,3 z" fill="#67e8f9" />
                          </marker>
                        </defs>

                        <rect x="38" y="32" width="150" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="113" y="60" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">User Browser</text>
                        <text x="113" y="78" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">React SPA</text>

                        <rect x="248" y="32" width="170" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="333" y="56" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">Route 53 + ACM</text>
                        <text x="333" y="74" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">DNS & SSL</text>

                        <rect x="516" y="32" width="170" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="601" y="56" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">CloudFront CDN</text>
                        <text x="601" y="74" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">S3-hosted React SPA</text>

                        <path d="M188 60 H248" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M418 60 H516" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="260" y="130" width="200" height="60" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="360" y="158" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">AWS ALB Ingress</text>
                        <text x="360" y="176" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">EKS HTTP routing</text>

                        <path d="M601 88 V130" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="96" y="232" width="160" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="176" y="258" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">user-service</text>
                        <text x="176" y="276" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Auth | JWT | Org</text>

                        <rect x="280" y="226" width="160" height="64" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="360" y="252" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">product-service</text>
                        <text x="360" y="270" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Catalog | Inventory | Reserve</text>

                        <rect x="464" y="232" width="160" height="56" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="544" y="258" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">order-service</text>
                        <text x="544" y="276" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Order lifecycle + approval</text>

                        <path d="M360 190 V226" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M470 190 V232" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                        <path d="M250 190 V232" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />

                        <rect x="260" y="312" width="200" height="48" rx="16" fill="#07111f" stroke="#22d3ee" strokeWidth="2" />
                        <text x="360" y="338" textAnchor="middle" fill="#e2f7fb" fontSize="14" fontFamily="monospace">MongoDB Atlas</text>
                        <text x="360" y="356" textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">Users / Products / Orders</text>

                        <path d="M360 290 V312" stroke="#67e8f9" strokeWidth="2" markerEnd="url(#arrow)" />
                      </svg>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-5">
                        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-200">A</span>
                          EduBlitz Architecture Flow
                        </div>
                        <div className="mt-4 space-y-3 text-sm text-slate-300">
                          <p className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 text-slate-300">
                            Browser traffic is routed through Route 53 and CloudFront to an S3-hosted React SPA. API requests pass through AWS ALB Ingress into EKS where three Spring Boot microservices handle auth, catalog, inventory, and order approval.
                          </p>
                          <p className="rounded-2xl border border-cyan-400/20 bg-slate-950/80 p-4 text-slate-300">
                            The workflow reserves sellable stock across batches, enforces organization-scoped access, and persists data in MongoDB Atlas with separate collections for users, products, and orders.
                          </p>
                        </div>
                      </div>

                      <div className="rounded-3xl border border-cyan-500/40 bg-slate-950/60 p-6 text-slate-300">
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                          <div>
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">Production Highlights</p>
                            <h5 className="mt-2 text-lg font-semibold text-slate-100">Medical B2B ERP System</h5>
                          </div>
                          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-100">
                            Secure EKS delivery with JWT auth, MongoDB persistence, and CDN-hosted React assets.
                          </div>
                        </div>
                        <div className="mt-5 grid gap-4 sm:grid-cols-2">
                          {[
                            {
                              title: 'Frontend',
                              detail: 'React 18 + Vite SPA served through CloudFront and S3.',
                            },
                            {
                              title: 'Backend',
                              detail: 'Three Spring Boot 3.x microservices behind ALB Ingress in AWS EKS.',
                            },
                            {
                              title: 'Auth',
                              detail: 'JWT HS256 tokens shared across services and managed with Kubernetes secrets.',
                            },
                            {
                              title: 'Database',
                              detail: 'MongoDB Atlas with separate collections for users, products, and orders.',
                            },
                          ].map((item) => (
                            <div key={item.title} className="rounded-2xl border border-cyan-400/20 bg-slate-950/70 p-4 text-sm text-slate-300">
                              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">{item.title}</p>
                              <p className="mt-2 text-slate-100">{item.detail}</p>
                            </div>
                          ))}
                        </div>
                      </div>
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
