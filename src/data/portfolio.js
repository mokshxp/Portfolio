// Project data — single source of truth
export const projects = [
  {
    id: 'skilio',
    num: '01',
    name: 'Skilio',
    tagline: 'AI-powered career platform',
    desc: 'A premium AI-powered career platform bridging talent and industry-level performance. Features adaptive interview simulations, a Peak Performance Score dashboard, AI resume auditing, and an in-browser Monaco code editor — built on a full-stack architecture with real-time WebSockets.',
    longDesc: `Skilio is built for serious candidates who want more than practice tests. The platform uses OpenAI and NVIDIA NIM to simulate real-world interviews, score candidates on industry benchmarks, and give actionable feedback.

Key Features:
• Adaptive interview engine — questions adapt to your performance in real-time
• Peak Performance Score — a composite metric across 5 dimensions (speed, accuracy, clarity, depth, consistency)
• AI Resume Auditor — uploads your PDF, scores it, suggests rewrites
• Monaco Editor — in-browser code editor with syntax highlighting for 20+ languages
• Real-time WebSocket feedback — zero-latency interview grading

Architecture: React 18 frontend, Node.js + Express backend, Supabase for auth + DB, Redis for sessions, Razorpay for subscriptions.`,
    tags: [
      { label: 'React 18', variant: 'g' },
      { label: 'Node.js', variant: 'g' },
      { label: 'Supabase', variant: 'g' },
      { label: 'OpenAI', variant: 'p' },
      { label: 'NVIDIA NIM', variant: 'p' },
      { label: 'WebSockets', variant: 'a' },
      { label: 'Razorpay', variant: 'a' },
    ],
    github: 'https://github.com/mokshxp',
    color: '#7c6af5',
    gradient: 'from-violet-500/10 to-purple-500/5',
  },
  {
    id: 'pulsepoint',
    num: '02',
    name: 'PulsePoint AI',
    tagline: 'Smart health triage app',
    desc: 'A smart health triage app for regions with limited healthcare access. Uses Llama 3.3 70B via Groq to analyze symptoms, categorize risk levels, and navigate users to nearby clinics — with voice input, patient history tracking, and multilingual support.',
    longDesc: `PulsePoint AI was built to solve a real problem: rural areas in India where the nearest doctor is hours away. The app triages your symptoms in under 30 seconds and tells you how urgent the situation is.

Key Features:
• AI Diagnosis Engine — Llama 3.3 70B analyzes symptoms and returns structured risk assessment
• Multilingual Support — English, Gujarati, and Telugu with voice input
• OpenStreetMap Integration — finds nearest clinics, hospitals, and pharmacies
• Patient History — tracks previous visits, conditions, and risk trends over time
• Risk level categorization — Low / Moderate / High / Critical with escalation paths

Built with Flutter for cross-platform mobile, Firebase for backend, Groq for inference speed (sub-1s responses).`,
    tags: [
      { label: 'Flutter', variant: 'g' },
      { label: 'Firebase', variant: 'g' },
      { label: 'Groq / Llama 3.3', variant: 'p' },
      { label: 'OpenStreetMap', variant: 'a' },
      { label: 'fl_chart', variant: 'a' },
    ],
    github: 'https://github.com/mokshxp',
    color: '#4ade80',
    gradient: 'from-green-500/10 to-emerald-500/5',
  },
  {
    id: 'stickman',
    num: '03',
    name: 'Stickman Hook Clone',
    tagline: 'Physics game from scratch',
    desc: 'A faithful clone of the viral Stickman Hook game — built from scratch. Engineered realistic pendulum physics, smooth player movement, and responsive hook mechanics. A deep dive into game development fundamentals.',
    longDesc: `Building this clone from scratch was a masterclass in physics simulation. Every swing, bounce, and collision was implemented by hand using trigonometry and Newtonian mechanics.

Key Features:
• Pendulum Physics — realistic angular momentum, tension, and release timing
• Collision Detection — AABB + circle collision with resolution
• Level System — dynamically generated levels with increasing difficulty
• Responsive Controls — works on both desktop (click) and mobile (touch)
• Particle Effects — trail particles on the stickman using Canvas API
• Score System — speed bonuses for stylish swings

Built with vanilla JavaScript and the HTML5 Canvas API — zero dependencies, pure code.`,
    tags: [
      { label: 'JavaScript', variant: 'g' },
      { label: 'Canvas API', variant: 'a' },
      { label: 'Game Physics', variant: 'p' },
    ],
    github: 'https://github.com/mokshxp',
    color: '#f59e0b',
    gradient: 'from-amber-500/10 to-yellow-500/5',
  },
];

export const skills = [
  {
    icon: 'CodeXml',
    label: 'Languages',
    tags: ['Python', 'C++', 'JavaScript', 'Dart'],
  },
  {
    icon: 'Globe',
    label: 'Web Dev',
    tags: ['React', 'Node.js', 'Express', 'Vite', 'HTML/CSS'],
  },
  {
    icon: 'Layers',
    label: 'Fundamentals',
    tags: ['DSA', 'Algorithms', 'OOP', 'System Design'],
  },
  {
    icon: 'Cpu',
    label: 'AI / ML',
    tags: ['ML Basics', 'Groq AI', 'OpenAI', 'Neural Nets'],
  },
];

export const goals = [
  { icon: 'Target', title: 'DSA mastery', desc: 'Dominate coding interviews. Solve hard problems on LeetCode and Codeforces consistently, at speed.' },
  { icon: 'Construction', title: 'Real projects', desc: 'Ship production-grade apps that solve genuine problems. A portfolio that speaks louder than a resume.' },
  { icon: 'Rocket', title: 'FAANG placement', desc: 'Land a role at Google, Amazon, or equivalent — through deep skills and relentless preparation.' },
  { icon: 'Cpu', title: 'AI/ML expertise', desc: 'Build and deploy real ML models. Understand neural networks deeply and contribute to AI projects.' },
  { icon: 'Settings', title: 'Backend & scale', desc: 'Master distributed systems, scalable APIs, and what makes software truly production-ready.' },
  { icon: 'TrendingUp', title: 'Constant growth', desc: 'Every day sharper than the last. No plateau, no complacency — relentless improvement.' },
];

export const learningItems = [
  { label: 'Advanced DSA', pct: 65, status: 'in progress' },
  { label: 'Full-Stack Dev', pct: 50, status: 'in progress' },
  { label: 'Machine Learning', pct: 30, status: 'early stage' },
  { label: 'Deep Learning', pct: 20, status: 'roadmap' },
];

export const marqueeWords = [
  'Consistent', 'Fast learner', 'Problem solver', 'Self-driven',
  'Builder mindset', 'Deeply curious', 'Ship it mentality', 'Detail obsessed',
];
