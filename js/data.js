// ============================================================
//  PORTFOLIO DATA — Edit this file to customize your portfolio
//  All your personal info, projects, skills, etc. live here.
//  No need to touch HTML or CSS to change content!
// ============================================================

const PORTFOLIO = {

  // ─── Personal Info ──────────────────────────────────────────
  name: "Ibrahim Mohamed",
  firstName: "Ibrahim",
  lastName: "Mohamed",
  title: "Computer Science & Cybersecurity Student",
  tagline: "Software Engineering • AI / ML • Cybersecurity",
  // Rotating titles in the hero typing animation
  typingTexts: [
    "Software Engineer",
    "AI / ML Enthusiast",
    "Cybersecurity Explorer",
    "CTF Competitor",
    "Problem Solver"
  ],
  email: "mohamedhalme169@gmail.com",
  phone: "+20 106 886 2124",
  location: "Cairo, Egypt",
  profileImage: "assets/profile.png",   // Replace with your photo
  resumeFile: "CV_Ibrahim_Mohamed.md", // Path to CV

  // ─── About ─────────────────────────────────────────────────
  about: {
    description: `Computer Science student at the Egyptian Chinese University with a passion for 
    Software Engineering, Artificial Intelligence, and Cybersecurity. Skilled in Python, C++, 
    Linux, and OOP with hands-on experience building AI, embedded systems, and software projects 
    through hackathons and academic teamwork. Completed the TryHackMe Pre-Security path and actively training 
    in Sec101, alongside participating in CTF competitions and cybersecurity workshops. Currently seeking 
    internships in Software Engineering, AI/ML, or Cybersecurity to build secure, intelligent software.`,
    highlights: [
      { icon: "fas fa-code", label: "Clean Code", value: "C++ / Python" },
      { icon: "fas fa-brain", label: "AI & ML", value: "NLP / Deep Learning" },
      { icon: "fas fa-shield-alt", label: "Cybersecurity", value: "TryHackMe / CTF" },
      { icon: "fas fa-terminal", label: "Linux & Shell", value: "Bash / CLI" },
    ]
  },

  // ─── Stats (animated counters) ─────────────────────────────
  stats: [
    { value: 6, suffix: "+", label: "Projects & Writeups" },
    { value: 17, suffix: "th", label: "Hackathon Rank / 151" },
    { value: 4, suffix: "+", label: "Programming Languages" },
    { value: 1, suffix: "", label: "International Program" },
  ],

  // ─── Skills ────────────────────────────────────────────────
  skills: {
    programming: [
      { name: "Python", level: 85, icon: "fab fa-python" },
      { name: "C++", level: 80, icon: "fas fa-code" },
      { name: "Bash & Linux Shell", level: 65, icon: "fas fa-terminal" },
      { name: "HTML / CSS", level: 75, icon: "fab fa-html5" },
      { name: "JavaScript", level: 60, icon: "fab fa-js-square" },
      { name: "C (Basics)", level: 50, icon: "fas fa-copyright" },
    ],
    technical: [
      { name: "OOP", icon: "fas fa-cubes" },
      { name: "Data Structures & Algorithms", icon: "fas fa-project-diagram" },
      { name: "Cybersecurity & Pentesting", icon: "fas fa-shield-alt" },
      { name: "Network Security & Protocols", icon: "fas fa-network-wired" },
      { name: "Linux Administration & Hardening", icon: "fab fa-linux" },
      { name: "Arduino & Embedded Systems", icon: "fas fa-microchip" },
      { name: "Machine Learning & NLP", icon: "fas fa-brain" },
      { name: "Git & GitHub", icon: "fab fa-git-alt" },
    ],
    soft: [
      { name: "Communication", icon: "fas fa-comments" },
      { name: "Teamwork", icon: "fas fa-users" },
      { name: "Leadership", icon: "fas fa-chess-king" },
      { name: "Public Speaking", icon: "fas fa-microphone" },
      { name: "Time Management", icon: "fas fa-clock" },
    ]
  },

  // ─── Projects ──────────────────────────────────────────────
  projects: [
    {
      title: "Solar Tracking System with Rain Safety",
      category: "Embedded Systems",
      description: "Led a team to design and build an Arduino-based solar tracker. Implemented automatic panel positioning using LDRs, Rain sensor weather-override, and Night sleep mode.",
      tags: ["Arduino", "C++", "Hardware", "LDRs", "Servo", "Team Lead"],
      image: "assets/project-bg.png",
      link: "https://github.com/hema2007-sketch/solar-tracking-system",
      github: "https://github.com/hema2007-sketch/solar-tracking-system",
      year: "2026"
    },
    {
      title: "Arabic Aspect-Based Sentiment Analysis",
      category: "AI / NLP",
      description: "Fine-tuned AraBERT models for Arabic aspect-based sentiment analysis and deployed a Streamlit dashboard during a 12-hour AI hackathon.",
      tags: ["Python", "NLP", "AraBERT", "Streamlit", "ML"],
      image: "assets/project-bg.png",
      link: "https://github.com/hema2007-sketch/Deepx_Hackathon",
      github: "https://github.com/hema2007-sketch/Deepx_Hackathon",
      year: "2026"
    },
    {
      title: "Learning Management System (LMS)",
      category: "Software Engineering",
      description: "Developed a console C++ Learning Management System utilizing OOP principles. Implemented Role-Based Access Control (RBAC), grading mechanisms, and custom file I/O storage.",
      tags: ["C++", "OOP", "File Storage", "Auth", "RBAC"],
      image: "assets/lms_project_thumbnail.png",
      link: "https://github.com/hema2007-sketch/lms-oop",
      github: "https://github.com/hema2007-sketch/lms-oop",
      year: "2025"
    },
    {
      title: "Cinema Ticket Booking System",
      category: "Software Engineering",
      description: "Built a console-based cinema reservation system with seat selection, booking management, and structured menu navigation in C++.",
      tags: ["C++", "OOP", "Console App"],
      image: "assets/project-bg.png",
      link: "https://github.com/hema2007-sketch/cinema-booking-system",
      github: "https://github.com/hema2007-sketch/cinema-booking-system",
      year: "2025"
    },
  ],

  // ─── Experience / Timeline ─────────────────────────────────
  timeline: [
    {
      year: "2026",
      title: "GCI World — Tokyo, Japan",
      subtitle: "Matsuo-Iwasawa Laboratory, University of Tokyo",
      description: "Diploma program covering Data Science, Python, and Artificial Intelligence at one of the world's top research labs.",
      icon: "fas fa-globe-asia",
      type: "education"
    },
    {
      year: "2026",
      title: "Cybersecurity Training & CTFs",
      subtitle: "TryHackMe, Nile University & 180 Degrees",
      description: "Completed TryHackMe's Pre-Security path and ongoing Sec101. Attended a Cyber workshop by 180 Degrees and Microsoft Club at Nile University. Actively competed in Capture The Flag (CTF) challenges.",
      icon: "fas fa-shield-alt",
      type: "achievement"
    },
    {
      year: "2025 – Present",
      title: "Bachelor of CIS — Egyptian Chinese University",
      subtitle: "Computer and Information Systems",
      description: "Studying Computer Science with focus on Software Engineering, AI, and Cybersecurity.",
      icon: "fas fa-graduation-cap",
      type: "education"
    },
    {
      year: "Apr 2025",
      title: "DeepX AI Hackathon",
      subtitle: "Nile University — Microsoft Club",
      description: "Ranked 17th out of 151 teams. Achieved one of the highest model accuracy scores among all submissions.",
      icon: "fas fa-trophy",
      type: "achievement"
    },
    {
      year: "2025 – Present",
      title: "Community Memberships",
      subtitle: "ICPC • GDG • IEEE",
      description: "Active member in Competitive Programming (ICPC), Google Developer Groups (GDG), and IEEE student chapter.",
      icon: "fas fa-users",
      type: "activity"
    },
    {
      year: "2025",
      title: "Operations Volunteer",
      subtitle: "Made in Ain Shams Event",
      description: "Assisted in logistics and team coordination for a major university event.",
      icon: "fas fa-hands-helping",
      type: "activity"
    },
  ],

  // ─── Certificates & Courses ────────────────────────────────
  certificates: [
    {
      title: "TryHackMe — Pre-Security Path",
      issuer: "TryHackMe Platform",
      icon: "fas fa-shield-alt",
      link: "https://tryhackme.com",
      color: "#88cc14"
    },
    {
      title: "TryHackMe — Sec101 Path (In Progress)",
      issuer: "TryHackMe Platform",
      icon: "fas fa-user-secret",
      link: "https://tryhackme.com",
      color: "#f59e0b"
    },
    {
      title: "GCI World 2026 — AI & Data Science",
      issuer: "University of Tokyo",
      icon: "fas fa-robot",
      link: "#",
      color: "#06b6d4"
    },
    {
      title: "Cybersecurity Workshop Certificate",
      issuer: "Nile University (Microsoft Club) & 180 Degrees",
      icon: "fas fa-certificate",
      link: "#",
      color: "#3b82f6"
    },
    {
      title: "CS50: Introduction to Computer Science",
      issuer: "Harvard University",
      icon: "fas fa-university",
      link: "#",
      color: "#a51c30"
    },
  ],

  // ─── Social Links ──────────────────────────────────────────
  socials: [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ibrahim-mohamed-2b7857358",
      icon: "fab fa-linkedin-in"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/h.e.m.a2007",
      icon: "fab fa-instagram"
    },
    {
      name: "GitHub",
      url: "https://github.com/hema2007-sketch",
      icon: "fab fa-github"
    },
    {
      name: "Email",
      url: "mailto:mohamedhalme169@gmail.com",
      icon: "fas fa-envelope"
    },
  ],

  // ─── Color Theme (CSS custom properties) ───────────────────
  // Change these to instantly retheme your entire portfolio
  theme: {
    primary: "#06b6d4",       // Cyan
    secondary: "#8b5cf6",     // Violet
    accent: "#10b981",        // Emerald green
    background: "#0a0a0f",    // Near-black
    surface: "#111119",       // Dark card surface
    surfaceLight: "#1a1a2e",  // Lighter surface
    text: "#e2e8f0",          // Light gray text
    textMuted: "#94a3b8",     // Muted gray
    gradient1: "#06b6d4",     // Gradient start
    gradient2: "#8b5cf6",     // Gradient end
  }
};
