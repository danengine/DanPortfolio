'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface GridFadeInProps {
  children: ReactNode
  delay?: number
}

export function GridFadeIn({ children, delay = 0 }: GridFadeInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.1,
            delay,
          },
        },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}