'use client';
import { motion, useScroll } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className="fixed top-0 left-0 right-0 h-[3px] z-[60] bg-white/10">
      <motion.div
        className="h-full bg-white"
        style={{ scaleX: scrollYProgress, transformOrigin: '0% 50%' }}
      />
    </motion.div>
  );
}
