import { motion, HTMLMotionProps } from "framer-motion"
import { useReducedMotion } from "../../hooks/use-reduced-motion"
import { HTMLAttributes } from "react"

type MotionDivProps = HTMLMotionProps<"div">
type MotionLiProps = HTMLMotionProps<"li">

/**
 * Pre-configured motion components with common animations.
 * Built on Framer Motion for consistent animations across the app.
 * 
 * @example
 * ```tsx
 * <MotionDiv variants={fadeIn}>
 *   <h1>Fades in on mount</h1>
 * </MotionDiv>
 * 
 * <MotionLi variants={listItemVariant}>
 *   List item with stagger animation
 * </MotionLi>
 * ```
 */

function filterMotionProps<T extends HTMLAttributes<HTMLElement>>(props: any): T {
  const {
    initial, animate, exit, transition, variants, 
    whileHover, whileTap, whileFocus, whileDrag, whileInView,
    layout, layoutId, ...filteredProps
  } = props
  return filteredProps
}

export function MotionDiv(props: MotionDivProps) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <div {...filterMotionProps<HTMLAttributes<HTMLDivElement>>(props)} />
  }
  
  return <motion.div {...props} />
}

export function MotionLi(props: MotionLiProps) {
  const shouldReduceMotion = useReducedMotion()
  
  if (shouldReduceMotion) {
    return <li {...filterMotionProps<HTMLAttributes<HTMLLIElement>>(props)} />
  }
  
  return <motion.li {...props} />
}

export const fadeIn = {
  initial: {
    opacity: 0,
    y: 3,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0
    }
  }
}

export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 5,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut"
    }
  }
}

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
}

export const listItemVariant = {
  initial: {
    opacity: 0,
    x: -4,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}
