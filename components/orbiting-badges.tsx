'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ORBIT_BADGES } from '@/lib/portfolio-data'

function TechIcon({
  logo,
  color,
  name,
}: {
  logo: string
  color: string
  name: string
}) {
  // Icons ship with fill="currentColor"; render them as a mask so we can
  // apply the per-brand tint on the dark background.
  return (
    <span
      role="img"
      aria-label={name}
      className="size-6 sm:size-7"
      style={{
        backgroundColor: color,
        WebkitMaskImage: `url(${logo})`,
        maskImage: `url(${logo})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
        display: 'inline-block',
      }}
    />
  )
}

export function OrbitingBadges() {
  const ring1 = ORBIT_BADGES.slice(0, 5)
  const ring2 = ORBIT_BADGES.slice(5)

  return (
    <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
      {/* decorative orbit rings */}
      <div className="absolute inset-[12%] rounded-full border border-border/60" aria-hidden="true" />
      <div className="absolute inset-0 rounded-full border border-border/40" aria-hidden="true" />

      {/* outer rotating ring */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        {ring2.map((badge, i) => {
          const angle = (i / ring2.length) * 360
          return (
            <div
              key={badge.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-50% - 11.5rem)) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="-translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex size-12 items-center justify-center rounded-xl border border-border bg-card/90 shadow-lg backdrop-blur-sm sm:size-14">
                  <TechIcon {...badge} />
                </div>
              </motion.div>
            </div>
          )
        })}
      </motion.div>

      {/* inner rotating ring (reverse) */}
      <motion.div
        className="absolute inset-[14%]"
        animate={{ rotate: -360 }}
        transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
        aria-hidden="true"
      >
        {ring1.map((badge, i) => {
          const angle = (i / ring1.length) * 360
          return (
            <div
              key={badge.name}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `rotate(${angle}deg) translateY(calc(-50% - 8rem)) rotate(-${angle}deg)`,
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
                className="-translate-x-1/2 -translate-y-1/2"
              >
                <div className="flex size-11 items-center justify-center rounded-xl border border-border bg-card/90 shadow-lg backdrop-blur-sm sm:size-12">
                  <TechIcon {...badge} />
                </div>
              </motion.div>
            </div>
          )
        })}
      </motion.div>

      {/* profile picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="relative z-10 size-40 overflow-hidden rounded-full glow-ring sm:size-48"
      >
        <Image
          src="/sagar-profile.png"
          alt="Sagar Dubey"
          fill
          priority
          sizes="(max-width: 640px) 160px, 192px"
          className="object-cover"
        />
      </motion.div>
    </div>
  )
}
