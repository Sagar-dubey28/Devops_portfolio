'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/skills'
import { SOCIALS } from '@/lib/portfolio-data'

type Line = { type: 'input' | 'output' | 'error'; text: string }

const BANNER: Line[] = [
  { type: 'output', text: "sagar@devops:~$ Welcome to Sagar's interactive shell." },
  { type: 'output', text: "Type 'help' to see available commands." },
]

const COMMANDS: Record<string, string[]> = {
  help: [
    'Available commands:',
    '  whoami              → who is this?',
    '  cat skills.txt      → list core skills',
    '  kubectl get projects→ list deployed projects',
    '  cat experience.log  → work experience',
    '  contact             → how to reach me',
    '  resume              → open my resume',
    '  clear               → clear the terminal',
  ],
  whoami: [
    'Sagar Dubey ,Cloud & DevOps Engineer',
    'Bhopal, Madhya Pradesh, India',
    "Automating cloud infrastructure and deployments using AWS, Kubernetes, Terraform, and Jenkins."
  ],
  'cat skills.txt': [
    'AWS (EKS, EC2, VPC, IAM, Lambda, CloudWatch)',
    'Kubernetes • Helm • Ingress • Blue/Green • Rolling Updates',
    'Terraform • Ansible • Docker • Jenkins • ArgoCD',
    'SonarQube • Trivy • Prometheus • Grafana',
    'Bash • Python • Git',
  ],
  'kubectl get projects': [
    'NAME                                          STATUS    STRATEGY',
    'microservices-cicd-platform-eks               Running   GitOps/ArgoCD',
    'edublitz-medical-b2b-erp                       Running   ALB Ingress',
  ],
  'cat experience.log': [
    '[Jan 2026 - Jun 2026] DevOps Engineer Intern @ HisanLabs',
    '  - Zero-downtime Jenkins CI/CD (Java, Node.js, Python)',
    '  - Modular Terraform IaC for AWS provisioning',
    '  - EKS + Helm deployments with Blue/Green rollouts',
  ],
  contact: [
    'email    : connect.sagardubey@gmail.com',
    'github   : github.com/Sagar-dubey28',
    'linkedin : linkedin.com/in/sagar-dubey1900',
  ],
}

export function TerminalWidget() {
  const [lines, setLines] = useState<Line[]>(BANNER)
  const [value, setValue] = useState('')
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [lines])

  const run = (raw: string) => {
    const cmd = raw.trim()
    if (!cmd) return

    const next: Line[] = [...lines, { type: 'input', text: cmd }]

    if (cmd === 'clear') {
      setLines([])
      return
    }
    if (cmd === 'resume') {
      next.push({ type: 'output', text: 'Opening resume in a new tab...' })
      setLines(next)
      window.open(SOCIALS.resume, '_blank', 'noopener,noreferrer')
      return
    }
    if (cmd === 'ls') {
      next.push({ type: 'output', text: 'skills.txt  experience.log  projects/  contact' })
      setLines(next)
      return
    }

    const output = COMMANDS[cmd]
    if (output) {
      output.forEach((text) => next.push({ type: 'output', text }))
    } else {
      next.push({
        type: 'error',
        text: `command not found: ${cmd}. Type 'help' for options.`,
      })
    }
    setLines(next)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    run(value)
    setValue('')
  }

  return (
    <section id="terminal" className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="// try it yourself"
        title="Interactive Terminal"
        subtitle="Type a command and hit enter."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-8 overflow-hidden rounded-xl border border-border bg-[oklch(0.13_0.02_250)] shadow-2xl"
        onClick={() => inputRef.current?.focus()}
      >
        {/* title bar */}
        <div className="flex items-center gap-2 border-b border-border bg-card/80 px-4 py-3">
          <span className="size-3 rounded-full bg-destructive/80" />
          <span className="size-3 rounded-full bg-[oklch(0.78_0.16_60)]" />
          <span className="size-3 rounded-full bg-accent" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            sagar@devops: ~/portfolio
          </span>
        </div>

        {/* body */}
        <div
          ref={scrollRef}
          className="h-80 overflow-y-auto p-4 font-mono text-sm leading-relaxed"
        >
          {lines.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap break-words">
              {line.type === 'input' ? (
                <span>
                  <span className="text-accent">sagar@devops</span>
                  <span className="text-muted-foreground">:~$ </span>
                  <span className="text-foreground">{line.text}</span>
                </span>
              ) : line.type === 'error' ? (
                <span className="text-destructive">{line.text}</span>
              ) : (
                <span className="text-muted-foreground">{line.text}</span>
              )}
            </div>
          ))}

          <form onSubmit={onSubmit} className="mt-1 flex items-center">
            <span className="text-accent">sagar@devops</span>
            <span className="text-muted-foreground">:~$&nbsp;</span>
            <input
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              spellCheck={false}
              autoComplete="off"
              aria-label="Terminal command input"
              className="flex-1 bg-transparent text-foreground caret-primary outline-none"
            />
          </form>
        </div>
      </motion.div>

      <div className="mt-4 flex flex-wrap gap-2">
        {['whoami', 'cat skills.txt', 'kubectl get projects', 'contact', 'help'].map(
          (c) => (
            <button
              key={c}
              type="button"
              onClick={() => {
                run(c)
                inputRef.current?.focus()
              }}
              className="rounded-md border border-border bg-card/60 px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              {c}
            </button>
          ),
        )}
      </div>
    </section>
  )
}
