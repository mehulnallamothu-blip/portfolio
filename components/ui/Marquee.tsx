'use client';
import { useEffect, useRef } from 'react';

export default function Marquee({
  items,
  speed = 60,
}: {
  items: string[];
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = 0;
    let raf: number;
    const step = () => {
      x = (x - 1) % (el.scrollWidth / 2);
      el.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={ref} className="flex gap-3 will-change-transform">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="badge">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
