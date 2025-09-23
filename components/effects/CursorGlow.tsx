'use client';
import { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;

    const handler = (e: MouseEvent) => {
      x += (e.clientX - x) * 0.15;
      y += (e.clientY - y) * 0.15;
      el.style.transform = `translate(${x - 150}px, ${y - 150}px)`;
    };

    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-0 size-[300px] rounded-full opacity-30 blur-3xl"
      style={{
        background:
          'radial-gradient(circle at center, rgba(128,255,219,.35), transparent 60%)',
      }}
    />
  );
}
