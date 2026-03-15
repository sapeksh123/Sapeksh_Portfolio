/**
 * Centralized site content. Edit copy and data here; pages handle layout only.
 * Icon fields are string keys; each page maps them to Lucide components.
 */

export const homeContent = {
  greetingBadge: "Welcome to my portfolio",
  name: "Sapeksh Vishwakarma",
  role: "Software Engineer | Entry-Level Technology Professional",
  bio: "Software Engineer / Entry-Level Technology Professional Full Stack Developer with practical experience in JavaScript, Flutter, React.js, Node.js, Express.js, REST APIs, and database integration. Strong understanding of business requirements, testing workflows, and technical documentation. Eager to contribute to enterprise-level projects while following structured development processes and delivery standards.",
  cvUrl: "https://drive.google.com/file/d/17fAQpH4RBatQWXqlJxPesNXHRac065Qf/view?usp=sharing",
  availabilityBadge: "Available",
  socialLinks: [
    { name: "GitHub", url: "https://github.com/sapeksh123/", icon: "Github" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sa-12v", icon: "Linkedin" },
    { name: "Email", url: "mailto:sapekshvishwakarma@gmail.com", icon: "Mail" },
  ],
}

export const aboutContent = {
  sectionTitle: "About",
  sectionTitleHighlight: "Me",
  sectionSubtitle: "Get to know more about my background and expertise",
  highlights: [
    {
      title: "Who I Am",
      description: "I'm Sapeksh Vishwakarma, a Software Engineer based in Jabalpur, MP. I'm currently working at ADRS Techno Pvt Ltd, where I build and integrate MERN full-stack applications and work with cross-functional teams and international stakeholders.",
      icon: "User",
      color: "from-blue-500 via-blue-600 to-cyan-500",
      bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    },
    {
      title: "Background",
      description: "I'm pursuing B.Tech in Computer Science & Engineering from Shri Ram Institute of Science and Technology, Jabalpur (2022–2026, 8.66 CGPA). I hold certifications in Java, JavaScript, SQL, React.js (HackerRank), Front-End Development with React.js (IBM), and Postman API Fundamentals (Postman).",
      icon: "Rocket",
      color: "from-green-500 via-green-600 to-emerald-500",
      bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    },
    {
      title: "What I Do",
      description: "I develop JavaScript-based full-stack modules using MongoDB, Express.js, React.js, Node.js and RESTful APIs. I support testing, bug fixing, and feature validation, and follow SDLC processes, technical documentation standards, and Git-based version control.",
      icon: "Lightbulb",
      color: "from-purple-500 via-purple-600 to-pink-500",
      bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    },
    {
      title: "What I'm Looking For",
      description: "I'm open to full-time Software Engineer roles and collaborative projects. I'm eager to contribute to enterprise-level projects with structured development and delivery standards, and I work well in teams with strong communication and problem-solving.",
      icon: "Users2",
      color: "from-orange-500 via-orange-600 to-red-500",
      bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    },
  ],
  quickInfo: {
    title: "Quick Info",
    items: [
      { label: "Education", value: "B.Tech CSE", icon: "GraduationCap" },
      { label: "Location", value: "Jabalpur, Madhya Pradesh, India", icon: "MapPin" },
      { label: "Status", value: "Available", valueHighlight: true, icon: "Heart" },
      { label: "Focus", value: "Software Engineer", icon: "Code" },
    ],
  },
}

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code",
    skills: ["JavaScript (ES6+)", "Java (Basic)"],
    color: "from-blue-500 via-blue-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    title: "Frontend Technologies",
    icon: "Palette",
    skills: ["HTML5", "CSS3", "React.js", "Redux", "Bootstrap 5", "Tailwind CSS", "Framer Motion", "React Native", "Flutter"],
    color: "from-green-500 via-green-600 to-emerald-500",
    bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
  {
    title: "Backend Technologies",
    icon: "Server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MVC Architecture"],
    color: "from-purple-500 via-purple-600 to-pink-500",
    bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB"],
    color: "from-orange-500 via-orange-600 to-red-500",
    bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
  },
  {
    title: "Tools & Utilities",
    icon: "Wrench",
    skills: ["Git", "GitHub", "Visual Studio Code"],
    color: "from-indigo-500 via-indigo-600 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
  },
  {
    title: "Testing & Quality",
    icon: "TestTube2",
    skills: ["Unit Testing (JUnit)", "API Testing (Postman)", "Test Case Design"],
    color: "from-teal-500 via-teal-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20",
  },
  {
    title: "Cloud & Deployment",
    icon: "Cloud",
    skills: ["Vercel", "Netlify", "Render", "MongoDB Atlas", "AWS (Basic)", "CI/CD workflows"],
    color: "from-cyan-500 via-cyan-600 to-blue-500",
    bgPattern: "bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20",
  },
  {
    title: "Delivery & Process",
    icon: "FileText",
    skills: ["Requirement Analysis", "Functional & Technical Documentation", "SDLC (Agile/Waterfall)"],
    color: "from-amber-500 via-amber-600 to-orange-500",
    bgPattern: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20",
  },
  {
    title: "Soft Skills",
    icon: "Users",
    skills: ["Communication", "Leadership", "Team Management", "Adaptability", "Problem-Solving"],
    color: "from-pink-500 via-pink-600 to-rose-500",
    bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
  },
]

export const projects = [
  {
    title: "GrowEdge – Agriculture Platform",
    description: "A platform connecting Farmers, Equipment Owners, Shopkeepers, and Admins to manage equipment renting, product shopping, and revenue tracking, with role-based dashboards and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication", "RBAC"],
    icon: "Leaf",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Agriculture-Platform-.git",
    color: "from-green-500 via-green-600 to-emerald-500",
    bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
    featured: true,
  },
  {
    title: "Cloudinary AI Platform",
    description: "Built an AI-powered cloud management platform that automates image and video optimisation, background removal, and content tagging using advanced ML models integrated with Cloudinary and OpenAI APIs.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma + NeonDB", "Cloudinary API"],
    icon: "Cloud",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Cloudinary-SaaS.git",
    color: "from-blue-500 via-blue-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
    featured: true,
  },
  {
    title: "Blog Platform",
    description: "Developed a full-stack blogging application with markdown support, user authentication, an admin dashboard, and a clean, responsive UI for an enhanced writing experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication"],
    icon: "PenTool",
    liveUrl: "https://bloggify-five.vercel.app/",
    githubUrl: "https://github.com/sapeksh123/Blogging-Web-App.git",
    color: "from-purple-500 via-purple-600 to-pink-500",
    bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
    featured: false,
  },
  {
    title: "Discord Bot",
    description: "Created a custom Discord bot for community management featuring automated moderation, custom commands, and API integrations for real-time data fetching.",
    tech: ["React.js", "Node.js", "Express.js", "Discord.js", "REST APIs", "MongoDB", "Socket.io"],
    icon: "MessageSquare",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Discord_Bot.git",
    color: "from-indigo-500 via-indigo-600 to-purple-500",
    bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
    featured: false,
  },
  {
    title: "Data Structure Visualisation Dashboard",
    description: "Developed an interactive platform to visualise core data structures such as stacks, queues, linked lists, and trees with real-time animations and step-by-step operation tracking. Data flow simulation and algorithm analysis, enhancing learning and conceptual understanding.",
    tech: ["React.js", "Chart.js", "Recharts", "Node.js", "Express.js", "REST APIs"],
    icon: "Database",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/data-visualization-web.git",
    color: "from-orange-500 via-orange-600 to-red-500",
    bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform with dynamic product listings, RESTful APIs, cart and wishlist management, order tracking, and an admin dashboard for inventory and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
    icon: "ShoppingCart",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Aarambh-Jeweller-Web-.git",
    color: "from-pink-500 via-pink-600 to-rose-500",
    bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
    featured: false,
  },
]

export const projectsContent = {
  sectionTitle: "Featured",
  sectionTitleHighlight: "Projects",
  sectionSubtitle: "Explore my recent work and hands-on projects across diverse technologies.",
  ctaTitle: "Want to see more?",
  ctaDescription: "These are just a few highlights from my portfolio. Check out my GitHub for more projects, contributions, and open-source work.",
  ctaButtonLabel: "Explore All Projects",
  githubUrl: "https://github.com/sapeksh123/",
}

export const experiences = [
  {
    title: "Software Engineer",
    company: "ADRS Techno Private Limited, Jabalpur",
    location: "Jabalpur, MP",
    duration: "Feb 2025 – Present",
    type: "Full-time",
    icon: "Layers",
    responsibilities: [
      "Contributed to the development and integration of JavaScript-based full-stack application modules using MongoDB, Express.js, React.js, Node.js (MERN) and RESTful APIs, collaborating with cross-functional teams and international stakeholders.",
      "Supported application testing, bug fixing, and feature validation by analysing business requirements, ensuring adherence to SDLC processes, technical documentation standards, and Git-based version control practices.",
    ],
    technologies: [
      "JavaScript (ES6+)",
      "Responsive Web Design",
    
    "MERN Stack",
      "RESTful API Development",
      "JWT Authentication",
      "WebSockets",
      "Socket.IO",
    
      "Flutter",
      "Mobile App Development",
    
      "MySQL",
      "PostgreSQL",
      "Mongoose ORM, Prisma ORM",
    
      "Firebase",
      "Cloudinary",
      "AWS (Basics)",
    
      "Git",
      "GitHub",
      "CI/CD",
    
      "Postman",
    
      "Docker (Basics)",
      "Linux Basics",
    
      "Netlify",
      "Vercel",
      "Render",
      "Deployment & Hosting",
    
      "Software Development Life Cycle (SDLC)",
      "Agile Methodology",
      "System Design Basics"
    ]  },
]

export const experienceContent = {
  sectionTitle: "Professional",
  sectionTitleHighlight: "Experience",
  sectionSubtitle: "My journey of hands-on learning and professional growth in web development",
}

export const education = [
  {
    degree: "Bachelor of Technology (Computer Science and Engineering)",
    institution: "Shri Ram Institute of Science and Technology, Jabalpur",
    duration: "2022 – 2026",
    grade: "8.66 CGPA",
    description: [
      "Strong foundation in Data Structures and Algorithms",
      "Comprehensive understanding of Software Engineering",
      "Hands-on experience with modern Web Development",
      "Jabalpur, MP",
    ],
  },
  {
    degree: "Senior Secondary (XII)",
    institution: "Madhya Pradesh Board of Secondary Education",
    duration: "2021 – 2022",
    grade: "92%",
    description: [
      "Science stream with Mathematics",
      "Jabalpur, MP",
    ],
  },
  {
    degree: "Higher Secondary (X)",
    institution: "Madhya Pradesh Board of Secondary Education",
    duration: "2019 – 2020  ",
    grade: "90%",
    description: [
      "Jabalpur, MP",
    ],
  },
]

export const certificates = [
  { title: "Java | JavaScript | SQL | React.js", issuer: "HackerRank", date: "Jan 2026" },
  { title: "Front-End Development with React.js", issuer: "IBM", date: "July 2025" },
  { title: "Postman API Fundamentals Expert", issuer: "Postman", date: "April 2024" },
]

export const educationContent = {
  sectionTitle: "Education",
  sectionTitleHighlight: "Journey",
  sectionSubtitle: "My academic path and achievements",
}

export const contactMethods = [
  {
    title: "Email",
    description: "Send me an email and I'll get back to you within 24 hours.",
    icon: "Mail",
    value: "sapekshvishwakarma@gmail.com",
    href: "mailto:sapekshvishwakarma@gmail.com",
    color: "from-blue-500 via-blue-600 to-cyan-500",
    bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
  },
  {
    title: "Phone",
    description: "Call or message me anytime.",
    icon: "Phone",
    value: "+91 9285543488",
    href: "tel:+919285543488",
    color: "from-green-500 via-green-600 to-emerald-500",
    bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
  },
  {
    title: "GitHub",
    description: "Check out my code repositories and contributions.",
    icon: "Github",
    value: "sapeksh123",
    href: "https://github.com/sapeksh123/",
    color: "from-gray-600 via-gray-700 to-gray-800",
    bgPattern: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/20 dark:to-gray-900/20",
  },
  {
    title: "LinkedIn",
    description: "Let's connect and build our professional network.",
    icon: "Linkedin",
    value: "sa-12v",
    href: "https://www.linkedin.com/in/sa-12v",
    color: "from-blue-600 via-blue-700 to-blue-800",
    bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20",
  },
]

export const contactContent = {
  sectionTitle: "Get In",
  sectionTitleHighlight: "Touch",
  sectionSubtitle: "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
  ctaTitle: "Let's Work Together",
  ctaDescription: "I'm currently available for freelance projects and full-time opportunities. Whether you have a project in mind or just want to chat about technology, I'd love to hear from you.",
  locationLabel: "Location",
  locationValue: "Jabalpur, Madhya Pradesh, India",
  responseLabel: "Response Time",
  responseValue: "Within 24 hours",
}

export const skillsContent = {
  sectionTitle: "Technical",
  sectionTitleHighlight: "Skills",
  sectionSubtitle: "Technologies and tools I work with",
}
