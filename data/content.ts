export const PROFILE = {
  name: "Sai Vivek Padakanti",
  title: "Software Engineer · M.S. CS @ Colorado State University",
  tagline: "I build fast, delightful, and scalable software—sprinkled with ML where it matters.",
  location: "Fort Collins, CO",
  email: "saivivek265@gmail.com",
  phone: "(970) 581-8300",
  github: "https://github.com/PSaiVivek24",
  linkedin: "https://www.linkedin.com/in/sai-vivek-24s",
  resume: "/resume.pdf"
};

export const EXPERIENCE = [
  {
    org: "Colorado State University",
    role: "Research Assistant (NLP Recommender)",
    when: "Jan 2025 – Present",
    bullets: [
      "Built NLP recommender that matched 85% of students to clubs.",
      "Aggregated and engineered features from 500+ survey responses.",
      "Scaled TF-IDF + cosine pipeline; cut manual effort by 90%."
    ],
    stack: ["Python", "Pandas", "scikit-learn", "Google Apps Script", "JavaScript", "Google Forms API", "Microsoft Graph API"]
  },
  {
    org: "Crestron Electronics",
    role: "Firmware Engineer (Intern)",
    when: "May 2024 – Aug 2024",
    bullets: [
      "Automated Jenkins CI/CD: 30% faster deployments, 25% fewer failures.",
      "Built Python-Kivy audio control app: 25% faster data, +30% user satisfaction.",
      "Button characteristic study across 5+ products → +20% quality, +15% UX."
    ],
    stack: ["Python", "Kivy", "REST", "WebSocket", "Jenkins", "Jira", "SVN", "GitHub"]
  },
  {
    org: "Morgan Library, CSU",
    role: "Peer Research Mentor",
    when: "Aug 2023 – Present",
    bullets: [
      "Mentored 50+ students on research tools & databases.",
      "Analyzed engagement → improved workshop effectiveness.",
      "Raised database usage by 40% via tailored guidance."
    ],
    stack: ["Research", "Workshops", "Data Analysis"]
  }
];

export const PROJECTS = [
  {
    name: "Python Mutation Testing Tool Comparison",
    period: "Oct 2024 – Dec 2024",
    about: "Evaluated MutPy, MutMut, Mutatest; automated test generation; delivered insights to lift testing efficiency in real-world codebases.",
    tags: ["Python", "Pytest", "Unittest", "MutPy", "MutMut", "Mutatest"],
    repo: "https://github.com/PSaiVivek24"
  },
  {
    name: "Anomaly Detection for Android Apps",
    period: "Jan 2023 – May 2023",
    about: "Built ML model detecting anomalous app behavior with 90% accuracy using real usage data; Streamlit prototype for demo.",
    tags: ["Python", "ML", "Streamlit"],
  },
  {
    name: "NLP Club Recommendation Engine",
    period: "2025",
    about: "TF-IDF + cosine similarity pipeline aggregating open-ended + structured responses to match students with clubs (85% success).",
    tags: ["Python", "NLP", "Pandas", "scikit-learn"],
    repo: "https://github.com/PSaiVivek24"
  }
];

export const EDUCATION = [
  {
    school: "Colorado State University",
    degree: "M.S., Computer Science",
    when: "Aug 2023 – Dec 2025",
    courses: [
      "Introduction to Graduate Research in Computer Science",
      "Introduction to Artificial Intelligence",
      "Artificial Intelligence",
      "Machine Learning",
      "Trustworthy Machine Learning",
      "Quantitative Security",
      "Fault Tolerance Computing",
      "Software Process and Product Evaluation",
    ],
  },
  {
    school: "VNR VJIET",
    degree: "B.Tech, Electronics & Instrumentation (Minor: AI/ML)",
    when: "Aug 2019 – May 2023",
    courses: [
      "Control Systems",
      "Digital Signal Processing",
      "Microprocessors & Interfacing",
      "Biomedical Instrumentation",
      "Machine Learning (Minor)",
      "Deep Learning (Minor)",
    ],
  },
];


export const PUBLICATIONS = [
  { title: "Bird Species Identification Using Speech Recognition", venue: "IEEE INCOFT 2023", link: "#" }
];

export const ACHIEVEMENTS = [
  { title: "USDA Hackathon Winner – Beef Quality Image Recognition", when: "Apr 2024" },
  { title: "Google UX Design Professional Certificate", when: "Apr 2023" },
  { title: "ISRO IIRS – SAR Data Processing Training", when: "May 2023" }
];
