import { motion, useReducedMotion, useScroll } from 'framer-motion';

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  return <motion.div className="scroll-progress" aria-hidden="true" style={{ scaleX: reduced ? 0 : scrollYProgress }} />;
}
