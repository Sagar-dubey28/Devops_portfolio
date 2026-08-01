import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sagar Dubey — Cloud & DevOps Engineer',
  description:
    'DevOps Engineer specializing in AWS, Kubernetes, Terraform, ArgoCD, Jenkins and DevSecOps. Architecting cloud reliability, zero-downtime pipelines & Infrastructure as Code at scale.',
  generator: 'v0.app',
  keywords: [
    'Sagar Dubey',
    'DevOps Engineer',
    'AWS',
    'Kubernetes',
    'Terraform',
    'ArgoCD',
    'Jenkins',
    'DevSecOps',
    'CI/CD',
    'Cloud Engineer',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090D16',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`dark bg-background ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
