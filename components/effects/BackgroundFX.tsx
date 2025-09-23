'use client';
import { motion } from 'framer-motion';

export default function BackgroundFX() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 bg-black">
      {/* Teal glow (top-left) */}
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -20, 20, 0] }}
        transition={{ repeat: Infinity, duration: 48, ease: 'linear' }}
        className="absolute -top-32 -left-40 h-[50rem] w-[50rem] rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.08),transparent_70%)] blur-3xl"
      />
      {/* Purple glow (top-right) */}
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 25, -25, 0] }}
        transition={{ repeat: Infinity, duration: 52, ease: 'linear' }}
        className="absolute top-60 -right-40 h-[45rem] w-[45rem] rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.08),transparent_70%)] blur-3xl"
      />
      {/* Soft white glow (bottom-center) */}
      <motion.div
        animate={{ x: [0, 20, -15, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 56, ease: 'linear' }}
        className="absolute bottom-0 left-1/3 h-[40rem] w-[40rem] rounded-full
                   bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)] blur-3xl"
      />
    </div>
  );
}