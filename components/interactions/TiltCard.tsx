'use client';
import { useRef } from 'react';

export default function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const tiltX = (py - 0.5) * -10;
    const tiltY = (px - 0.5) * 10;
    el.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateZ(0)`;
  };

  const reset = () => {
    const el = ref.current;
    if (el) el.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`transition-transform will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
