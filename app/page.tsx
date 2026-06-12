'use client';

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Rocket,
  Sparkles,
  Trophy,
  GraduationCap,
  Briefcase,
  Download
} from "lucide-react";

import { Glass, Badge, Button, Section } from "@/components/ui";
import MagneticButton from "@/components/interactions/MagneticButton";
import TiltCard from "@/components/interactions/TiltCard";
import Marquee from "@/components/ui/Marquee";
import { ChevronDown } from "lucide-react";
import Collapse from "@/components/ui/Collapse";


import {
  PROFILE,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  PUBLICATIONS,
  ACHIEVEMENTS,
} from "@/data/content";

/** Small utility for icon links in the header */
function IconLink({
  href,
  Icon,
  label,
}: {
  href: string;
  Icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center rounded-full size-9 text-white/80 hover:text-white hover:bg-white/10 transition-colors"
    >
      <Icon className="size-5" />
    </a>
  );
}

export default function Home() {
  /** Parallax for hero */
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -160]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const [openEdu, setOpenEdu] = useState<number | null>(null);
  const toggleEdu = (i: number) => {
    setOpenEdu(prev => (prev === i ? null : i));
  };

  



  /** Active section highlight in nav */
  const [active, setActive] = useState("home");
  useEffect(() => {
    const handler = () => {
      const sections = [
        "home",
        "skills",
        "experience",
        "projects",
        "education",
        "awards",
        "contact",
      ];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.35 &&
          rect.bottom >= window.innerHeight * 0.35
        ) {
          current = id;
        }
      });
      setActive(current);
    };
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="relative w-full text-white overflow-x-hidden scroll-smooth">
      {/* ======= Sticky Nav ======= */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="glass flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold tracking-tight">
                {PROFILE.name}
              </span>
            </div>

            <nav className="hidden md:flex items-center gap-2">
              {[
                { id: "home", label: "Home" },
                { id: "skills", label: "Skills" },
                { id: "experience", label: "Experience" },
                { id: "projects", label: "Projects" },
                { id: "education", label: "Education" },
                { id: "awards", label: "Awards" },
                { id: "contact", label: "Contact" },
              ].map((link) => (
                <Button
                  key={link.id}
                  variant={active === link.id ? "solid" : "ghost"}
                  onClick={() =>
                    document.getElementById(link.id)?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                  }
                >
                  {link.label}
                </Button>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <IconLink href={PROFILE.github} Icon={Github} label="GitHub" />
              <IconLink
                href={PROFILE.linkedin}
                Icon={Linkedin}
                label="LinkedIn"
              />
              <IconLink
                href={`mailto:${PROFILE.email}`}
                Icon={Mail}
                label="Email"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero gradient blobs */}
      <div className="pointer-events-none blur-3xl opacity-50 absolute -top-32 -left-24 h-[40rem] w-[40rem] bg-[radial-gradient(circle_at_center,rgba(0,255,200,0.35),transparent_60%)]" />
      <div className="pointer-events-none blur-3xl opacity-50 absolute top-40 -right-40 h-[36rem] w-[36rem] bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.35),transparent_60%)]" />

      {/* ======= Sections ======= */}
      <main className="snap-y snap-mandatory">
        {/* ======= HERO ======= */}
        <Section id="home" className="relative">
          <div
            ref={heroRef}
            className="relative mx-auto max-w-6xl px-4 pt-28 md:pt-36 pb-16 w-full"
          >
            <motion.div
              style={{ y, scale }}
              className="grid md:grid-cols-12 gap-8 items-center"
            >
              <div className="md:col-span-7">
                <motion.h1
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05]"
                >
                  Crafted with{" "}
                  <span className="bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
                    Passion
                  </span>
                  .<br />
                  Built like an{" "}
                  <span className="bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
                    Engineer
                  </span>
                  .
                </motion.h1>




                <p className="mt-6 text-lg text-white/70 max-w-xl">
                  {PROFILE.title}
                </p>
                <p className="mt-2 text-white/70 max-w-xl">
                  {PROFILE.tagline}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <MagneticButton
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior : "instant" })}
                    className="btn-gradient"
                  >
                    <Rocket className="size-4" /> Explore Projects
                  </MagneticButton>
                  <Button variant="ghost" href={PROFILE.resume}>
                    <Download className="size-4" /> Resume
                  </Button>
                </div>

                <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
                  <span></span>
                  <span>85% NLP matches</span>
                  <span>•</span>
                  <span>30% faster CI/CD</span>
                  <span>•</span>
                  <span>IEEE-published</span>
                </div>
              </div>

              <div className="md:col-span-5">
                <div className="card card-gradient">
                  <div className="flex items-center gap-3">
                    <Sparkles className="size-5 text-emerald-300" />
                    <p className="text-white/80">
                      Currently: Data Analyst at Athenadoyens LLC
                    </p>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="stat">
                      <div className="text-2xl font-semibold">85%</div>
                      <div className="text-xs text-white/60">Club matches</div>
                    </div>
                    <div className="stat">
                      <div className="text-2xl font-semibold">-70%</div>
                      <div className="text-xs text-white/60">Manual effort</div>
                    </div>
                    <div className="stat">
                      <div className="text-2xl font-semibold">+30%</div>
                      <div className="text-xs text-white/60">Deploy speed</div>
                    </div>
                    <div className="stat">
                      <div className="text-2xl font-semibold">-10%</div>
                      <div className="text-xs text-white/60">
                        Build failures
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-white/70">Scroll to explore ↓</div>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* ======= SKILLS MARQUEE (inserted before Experience) ======= */}
        <Section id="skills" className="section-bg">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Sparkles className="size-4" />
                <span className="tracking-widest uppercase">Skills</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Tasteful stack.
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                A curated toolkit I reach for often.
              </p>
            </div>

            <div className="mt-6">
              <Marquee
                items={[
                  "Python",
                  "C",
                  "C++",
                  "JavaScript",
                  "SQL",
                  "HTML",
                  "CSS",
                  "Kivy",
                  "PLC",
                  "NumPy",
                  "Pandas",
                  "scikit-learn",
                  "TensorFlow",
                  "PyTorch",
                  "OpenCV",
                  "Streamlit",
                  "Jenkins",
                  "Git",
                  "Docker",
                  "Jira",
                  "Tableau",
                  "Postman",
                  "Figma",
                  "Linux",
                  "macOS",
                  "VS Code",
                  "CI/CD",
                  "REST APIs",
                  "WebSocket APIs",
                  "Data Viz",
                  "Machine Learning",
                ]}
              />
            </div>
          </div>
        </Section>

        {/* ======= EXPERIENCE ======= */}
        <Section id="experience" className="section-bg">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Briefcase className="size-4" />
                <span className="tracking-widest uppercase">Experience</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Impact, not just internships.
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                Highlights from research, industry, and mentorship.
              </p>
            </div>

            <div className="mt-8 space-y-6">
              {EXPERIENCE.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="card card-gradient">
                    <div className="text-white/90 text-xl">
                      {job.role} <span className="text-white/40">·</span>{" "}
                      <span className="text-white/70">{job.org}</span>
                    </div>
                    <div className="text-sm text-white/50">{job.when}</div>
                    <ul className="list-disc list-inside space-y-2 text-white/80 mt-3">
                      {job.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((t: string) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ======= PROJECTS (Tilt cards) ======= */}
        <Section id="projects" className="section-bg">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Sparkles className="size-4" />
                <span className="tracking-widest uppercase">Projects</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Shipped with care.
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                Selected builds that blend performance and polish.
              </p>
            </div>

            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <TiltCard className="card card-gradient">
                    <div className="text-white/90 text-xl">{p.name}</div>
                    <div className="text-sm text-white/50">{p.period}</div>
                    <p className="text-white/80 mt-2">{p.about}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.tags.map((t: string) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                    <div className="mt-4">
                      <Button variant="ghost" href={p.repo}>
                        <Github className="size-4" /> View Code
                      </Button>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ======= EDUCATION ======= */}
        <Section id="education" className="section-bg">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <GraduationCap className="size-4" />
                <span className="tracking-widest uppercase">Education</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Foundations first.
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                Bridging hardware roots with modern software.
              </p>
            </div>

            


            <div className="mt-8 grid md:grid-cols-2 gap-6">
              {EDUCATION.map((ed, i) => {
                const isOpen = openEdu === i;
                const panelId = `edu-panel-${i}`;
                return (
                  <div key={i} id={`edu-${i}`} className="card card-gradient">
                    <button
                      type="button"
                      onClick={() => toggleEdu(i)}
                      className="w-full text-left flex items-start justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 rounded-xl"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <div>
                        <div className="text-white/90 text-xl">{ed.school}</div>
                        <div className="text-sm text-white/50">{ed.degree}</div>
                        <div className="text-white/60 mt-1">{ed.when}</div>
                      </div>
                      <ChevronDown
                        className={`size-5 shrink-0 text-white/60 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Collapsible courses as badges */}
                    {Array.isArray(ed.courses) && ed.courses.length > 0 && (
                      <Collapse show={isOpen}>
                        <div id={panelId} className="border-t border-white/10 mt-3 pt-3">
                          <div className="text-sm text-white/60 mb-2">Courses</div>
                          <div className="flex flex-wrap gap-2">
                            {ed.courses.map((c: string) => (
                              <span key={c} className="badge">{c}</span>
                            ))}
                          </div>
                        </div>
                      </Collapse>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* ======= AWARDS / PUBLICATIONS ======= */}
        <Section id="awards" className="section-bg">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Trophy className="size-4" />
                <span className="tracking-widest uppercase">
                  Recognition
                </span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Awards & Publications
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                Moments that meant a lot.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="glass p-6">
                <h3 className="text-xl font-semibold">Awards</h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  {ACHIEVEMENTS.map((a, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between"
                    >
                      <span>{a.title}</span>
                      <span className="text-white/50 text-sm">{a.when}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass p-6">
                <h3 className="text-xl font-semibold">Publications</h3>
                <ul className="mt-3 space-y-2 text-white/80">
                  {PUBLICATIONS.map((p, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-between"
                    >
                      <span>
                        {p.title} —{" "}
                        <span className="text-white/60">{p.venue}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* ======= CONTACT ======= */}
        <Section id="contact" className="section-bg pb-24">
          <div className="mx-auto max-w-6xl px-4 w-full">
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="size-4" />
                <span className="tracking-widest uppercase">Contact</span>
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white/95 gradient-title">
                Say hello.
              </h2>
              <p className="mt-2 text-white/60 max-w-prose">
                Open to Software Engineering, ML-adjacent, and infra roles.
              </p>
            </div>

            <div className="glass p-6 md:p-8 mt-8">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h3 className="text-2xl font-semibold">
                    Let’s build something great
                  </h3>
                  <p className="mt-3 text-white/70 max-w-prose">
                    I’m actively exploring roles where I can combine systems
                    thinking with product polish. If you’ve got a hard problem—or
                    just want to jam on ideas—drop a line.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Badge>{PROFILE.location}</Badge>
                    <Badge>{PROFILE.phone}</Badge>
                    <Badge>{PROFILE.email}</Badge>
                  </div>
                  <div className="mt-6 flex items-center gap-3">
                    <Button href={`mailto:${PROFILE.email}`}>Email Me</Button>
                    <Button variant="ghost" href={PROFILE.linkedin}>
                      Connect
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-white/40 text-sm mt-6">
              © {new Date().getFullYear()} {PROFILE.name}. Built with Next.js,
              Tailwind and Motion.
            </p>
          </div>
        </Section>
      </main>
    </div>
  );
}
