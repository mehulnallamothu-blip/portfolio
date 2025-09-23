import { ReactNode } from "react";

export function Glass({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`glass ${className}`}>{children}</div>;
}

export function Badge({ className = "", children }: { className?: string; children: ReactNode }) {
  return <span className={`badge ${className}`}>{children}</span>;
}

export function Button({ className = "", children, href, onClick, variant = "solid" }:
  { className?: string; children: ReactNode; href?: string; onClick?: () => void; variant?: "solid" | "ghost"; }) {
  const base = variant === "solid" ? "btn" : "btn-ghost";
  if (href) return <a className={`${base} ${className}`} href={href} target="_blank" rel="noreferrer">{children}</a>;
  return <button className={`${base} ${className}`} onClick={onClick}>{children}</button>;
}

export function Section({ id, children, className = "" }:{ id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={`snap-start min-h-[100svh] flex items-center ${className}`}>{children}</section>;
}
