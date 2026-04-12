// Project data — single source of truth
export const projects = [
  {
    id: 'skilio',
    num: '01',
    name: 'Skilio',
    image: '/skilio_full.png',
    tagline: 'Practice Real Interviews. Get Hired Faster.',
    desc: 'A premium AI-powered career platform bridging talent and industry-level performance. Features adaptive AI interview simulations, resume auditing, and real-time performance analytics.',
    longDesc: `Skilio transforms your interview preparation from guesswork to strategy. The platform uses AI to simulate real-world technical interviews and provide instant, actionable feedback.
    
    Key Features:
    • AI Interviewer — Real-time voice-enabled technical interviews
    • AI Resume Auditor — Instant screening and optimization tips
    • Performance Analytics — Deep metrics on your industry readiness
    • Monaco Editor — Realistic coding environment for technical rounds.`,
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
    image: '/pulsepoint_full.png',
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
    image: '/stickman_full.png',
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
    icon: 'Cpu',
    label: 'AI / ML',
    tags: ['PyTorch', 'Large Language Models (LLMs)', 'Computer Vision', 'Generative AI', 'Agents'],
  },
  {
    icon: 'CodeXml',
    label: 'Languages',
    tags: ['Python', 'C++', 'JavaScript', 'SQL'],
  },
  {
    icon: 'Globe',
    label: 'Infrastructure & Fullstack',
    tags: ['FastAPI', 'React', 'Node.js', 'Vite', 'Docker'],
  },
  {
    icon: 'Layers',
    label: 'Foundations',
    tags: ['Mathematics for ML', 'Advanced Algorithms', 'Systems Design'],
  },
];

export const goals = [
  { icon: 'Brain', title: 'AI Engineering', desc: 'Building intelligent systems that push the boundaries of automation. From LLM agents to custom vision models.' },
  { icon: 'Search', title: 'ML Research', desc: 'Understanding the "why" behind model architectures. Implementing papers and contributing to open-source AI projects.' },
  { icon: 'Rocket', title: 'Scalable Inference', desc: 'Optimizing model deployment for real-world use. Focusing on sub-1s latency and massive throughput.' },
  { icon: 'Cpu', title: 'Silicon to Software', desc: 'Bridging the gap between hardware constraints and software excellence. Mastering hardware acceleration (NVIDIA NIM, CUDA).' },
  { icon: 'Construction', title: 'Impactful Products', desc: 'Shipping production-grade AI tools that solve genuine problems, not just generic chatbots.' },
  { icon: 'TrendingUp', title: 'Constant growth', desc: 'Every day sharper than the last. In AI, staying still is moving backward. I move forward.' },
];

export const learningItems = [
  { label: 'LLM Orchestration (LangChain/Graph)', pct: 85, status: 'active' },
  { label: 'Fullstack Architecture', pct: 90, status: 'expert' },
  { label: 'Reinforcement Learning', pct: 25, status: 'exploring' },
  { label: 'MLOps & Deployment', pct: 40, status: 'learning' },
];

export const marqueeWords = [
  'Consistent', 'Fast learner', 'Problem solver', 'Self-driven',
  'Builder mindset', 'Deeply curious', 'Ship it mentality', 'Detail obsessed',
];
