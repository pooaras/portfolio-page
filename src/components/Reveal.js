import { motion, useReducedMotion } from 'framer-motion';

export function Reveal({ as: Component = 'div', children, className, delay = 0, amount = .18, ...props }) {
  const reduced = useReducedMotion();
  const supportsViewport = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const MotionComponent = motion[Component] || motion.div;
  return <MotionComponent className={className} initial={reduced || !supportsViewport ? false : { opacity: 0, y: 22 }} {...(supportsViewport ? { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount } } : { animate: { opacity: 1, y: 0 } })} transition={{ duration: reduced ? .15 : .55, delay: reduced ? 0 : delay, ease: [.2, .7, .2, 1] }} {...props}>{children}</MotionComponent>;
}
