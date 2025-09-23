'use client';
import { useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MagneticButton({
  children,
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const dx = useMotionValue(0);
  const dy = useMotionValue(0);
  const x = useSpring(dx, { stiffness: 300, damping: 20 });
  const y = useSpring(dy, { stiffness: 300, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    dx.set(relX * 0.25);
    dy.set(relY * 0.25);
  };
  const reset = () => {
    dx.set(0);
    dy.set(0);
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x, y }}
      className={`btn ${className}`}
    >
      {children}
    </motion.button>
  );
}
