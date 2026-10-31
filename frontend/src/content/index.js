/**
 * Centralized site content. Edit copy and data here; pages handle layout only.
 * Icon fields are string keys; each page maps them to Lucide components (see ./icons.js).
 */

// Single source of truth for contact/social details, referenced by homeContent.socialLinks,
// contactMethods, and projectsContent below so an update here doesn't desync those.
export const contactInfo = {
  email: "sapekshvishwakarma@gmail.com",
  phone: "+91 9285543488",
  phoneHref: "tel:+919285543488",
  website: "sapeksh.me",
  githubUsername: "sapeksh123",
  githubUrl: "https://github.com/sapeksh123",
  linkedinUsername: "sa-12v",
  linkedinUrl: "https://www.linkedin.com/in/sa-12v",
  location: "Pune, Maharashtra, India",
}

export const homeContent = {
  greetingBadge: "Based in Pune, India",
  name: "Sapeksh Vishwakarma",
  role: "Software Engineer",
  currentRole: "Assistant System Engineer @ TCS",
  shortBio:
    "Full stack developer with a year of experience shipping MERN and React Native apps, REST APIs and CI/CD pipelines on Docker and AWS.",
  bio: "Assistant System Engineer at Tata Consultancy Services with one year of full stack development experience. Co-developed GoEventify, a hyperlocal event marketplace live on the web, Google Play Store and Apple App Store, using the MERN stack and React Native. Experienced in building RESTful APIs, automating CI/CD pipelines with GitHub Actions, and deploying containerized applications with Docker and AWS.",
  cvUrl: "/Sapeksh-Vishwakarma-Resume.pdf",
  socialLinks: [
    { name: "GitHub", url: contactInfo.githubUrl, icon: "Github", external: true },
    { name: "LinkedIn", url: contactInfo.linkedinUrl, icon: "Linkedin", external: true },
    { name: "Email", url: `mailto:${contactInfo.email}`, icon: "Mail", external: false },
  ],
}

export const aboutContent = {
  sectionTitle: "About",
  sectionTitleHighlight: "Me",
  sectionSubtitle: "Who I am, what I build and what I'm learning right now.",
  highlights: [
    {
      title: "Who I Am",
      description:
        "I'm Sapeksh Vishwakarma, a Software Engineer based in Pune. I work as an Assistant System Engineer at Tata Consultancy Services, after a year as a Full Stack Developer at ADRS Techno where I co-built and shipped GoEventify.",
      icon: "User",
    },
    {
      title: "Background",
      description:
        "I hold a B.Tech in Computer Science and Engineering from Shri Ram Institute of Science and Technology, Jabalpur (2022–2026, CGPA 8.71/10), and scored 92% in Class XII. I'm certified in Java, JavaScript, SQL and React.js (HackerRank), Front-End Development with React.js (IBM) and Postman API Fundamentals.",
      icon: "GraduationCap",
    },
    {
      title: "What I Do",
      description:
        "I build full stack products with the MERN stack and React Native: RESTful APIs with Node.js and Express, web and mobile UIs with React, CI/CD pipelines with GitHub Actions, and containerized deployments with Docker and AWS.",
      icon: "Code2",
    },
    {
      title: "Currently",
      description:
        "I'm in the TCS Initial Learning Program in the IT Infrastructure Services stream, building expertise in Linux administration, shell scripting, networking (TCP/IP, DNS, DHCP), cloud infrastructure and ITIL incident management.",
      icon: "Terminal",
    },
  ],
  quickInfo: {
    title: "$ whoami --info",
    items: [
      { label: "Role", value: "Assistant System Engineer", icon: "Briefcase" },
      { label: "Company", value: "Tata Consultancy Services", icon: "Building2" },
      { label: "Location", value: "Pune, India", icon: "MapPin" },
      { label: "Education", value: "B.Tech CSE · 8.71 CGPA", icon: "GraduationCap" },
      { label: "Status", value: "ILP training · ITIS", valueHighlight: true, icon: "Heart" },
      { label: "Focus", value: "Full stack · Cloud", icon: "Code" },
    ],
  },
}

export const skillCategories = [
  {
    title: "Languages",
    icon: "Code",
    skills: ["Java", "JavaScript (ES6+)", "SQL", "Bash/Shell Scripting"],
  },
  {
    title: "Frontend & Mobile",
    icon: "Palette",
    skills: ["React.js", "Next.js", "React Native", "Redux"],
  },
  {
    title: "Backend & Databases",
    icon: "Server",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT/OTP Authentication", "MVC", "MongoDB", "MySQL"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "GitHub Actions", "CI/CD", "AWS (EC2, S3, ECS)", "MongoDB Atlas", "Vercel", "Netlify"],
  },
  {
    title: "Mobile Release",
    icon: "Smartphone",
    skills: ["Google Play Console", "Apple App Store Connect", "TestFlight"],
  },
  {
    title: "Infrastructure",
    icon: "Network",
    skills: ["Linux Administration", "Networking Fundamentals (TCP/IP, DNS)", "ITIL Incident Management"],
  },
  {
    title: "Testing & Tools",
    icon: "Wrench",
    skills: ["Postman (API Testing)", "Git", "GitHub", "VS Code", "Agile/Scrum", "SDLC", "Technical Documentation"],
  },
]

export const skillsContent = {
  sectionTitle: "Technical",
  sectionTitleHighlight: "Skills",
  sectionSubtitle: "Languages, frameworks and tools I use to build and ship software.",
}

export const projects = [
  {
    title: "GoEventify",
    tagline: "Hyperlocal Event Vendor Marketplace",
    platforms: "Web · Android · iOS",
    description:
      "A marketplace that connects people planning events with local vendors, live on the web, Google Play Store and Apple App Store.",
    highlights: [
      "Built pincode-based vendor search across 8 service categories with filters for event date, rating and availability.",
      "Implemented passwordless OTP login with code expiry, resend cooldown and rate limiting.",
      "Developed in-app chat with structured quotes, consent-based number sharing and vendor subscription plans.",
    ],
    tech: ["Next.js", "React Native", "Node.js", "Express.js", "MongoDB", "RESTful APIs", "GitHub Actions"],
    icon: "CalendarCheck",
    liveUrl: "https://goeventify.com",
    liveLabel: "goeventify.com",
    githubUrl: null,
    featured: true,
  },
  {
    title: "ShipStack",
    tagline: "Multi-Tenant Project Management SaaS with CI/CD on AWS",
    platforms: "SaaS · AWS",
    description:
      "A project management SaaS with isolated workspaces per team, shipped through an automated container pipeline to AWS.",
    highlights: [
      "Built a multi-tenant SaaS with isolated workspaces, role-based access control and JWT authentication.",
      "Containerized the app with multi-stage Docker builds and deployed it to Amazon ECS via GitHub Actions.",
      "Hosted staging on Amazon EC2, stored files in Amazon S3 and monitored containers with CloudWatch logs.",
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "Docker", "GitHub Actions", "AWS (ECS, ECR, EC2, S3)"],
    icon: "Boxes",
    liveUrl: null,
    githubUrl: null,
    featured: true,
  },
  {
    title: "GrowEdge – Agriculture Platform",
    description:
      "A platform connecting farmers, equipment owners, shopkeepers and admins to manage equipment renting, product shopping and revenue tracking, with role-based dashboards and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "RBAC"],
    icon: "Leaf",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Agriculture-Platform-",
    featured: false,
  },
  {
    title: "Cloudinary AI Platform",
    description:
      "An AI-powered media platform that automates image and video optimisation, background removal and content tagging using Cloudinary and OpenAI APIs.",
    tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma", "NeonDB", "Cloudinary API"],
    icon: "Cloud",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Cloudinary-SaaS",
    featured: false,
  },
  {
    title: "Blog Platform",
    description:
      "A full stack blogging app with markdown support, user authentication, an admin dashboard and a clean, responsive writing experience.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Auth"],
    icon: "PenTool",
    liveUrl: "https://bloggify-five.vercel.app/",
    githubUrl: "https://github.com/sapeksh123/Blogging-Web-App",
    featured: false,
  },
  {
    title: "Discord Bot",
    description:
      "A custom Discord bot for community management with automated moderation, custom commands and API integrations for real-time data.",
    tech: ["Node.js", "Discord.js", "Express.js", "MongoDB", "Socket.io"],
    icon: "MessageSquare",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Discord_Bot",
    featured: false,
  },
  {
    title: "Data Structure Visualiser",
    description:
      "An interactive platform that visualises stacks, queues, linked lists and trees with real-time animations and step-by-step operation tracking.",
    tech: ["React.js", "Chart.js", "Recharts", "Node.js", "Express.js"],
    icon: "Database",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/data-visualization-web",
    featured: false,
  },
  {
    title: "E-Commerce Platform",
    description:
      "An online store with dynamic product listings, cart and wishlist, order tracking, and an admin dashboard for inventory and analytics.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    icon: "ShoppingCart",
    liveUrl: null,
    githubUrl: "https://github.com/sapeksh123/Aarambh-Jeweller-Web-",
    featured: false,
  },
]

export const projectsContent = {
  sectionTitle: "Featured",
  sectionTitleHighlight: "Projects",
  sectionSubtitle: "Production apps I've helped build and ship, plus earlier projects across the stack.",
  otherTitle: "Other projects",
  ctaTitle: "Want to see more?",
  ctaDescription: "More experiments, coursework and open-source contributions live on my GitHub.",
  ctaButtonLabel: "View GitHub",
  githubUrl: contactInfo.githubUrl,
}

export const experiences = [
  {
    title: "Assistant System Engineer",
    company: "Tata Consultancy Services",
    slug: "tcs",
    location: "Pune, Maharashtra",
    duration: "Oct 2026 – Present",
    type: "Full-time",
    current: true,
    icon: "Building2",
    responsibilities: [
      "Undergoing the Initial Learning Program (ILP) in the IT Infrastructure Services (ITIS) stream, covering Linux administration, shell scripting, Windows Server and networking (TCP/IP, DNS, DHCP).",
      "Learning cloud infrastructure, server monitoring and ITIL incident, problem and change management.",
    ],
    technologies: ["Linux", "Shell Scripting", "Windows Server", "TCP/IP", "DNS", "DHCP", "ITIL"],
  },
  {
    title: "Full Stack Developer",
    company: "ADRS Techno Private Limited",
    slug: "adrs-techno",
    location: "Jabalpur, Madhya Pradesh",
    duration: "Sep 2025 – Sep 2026",
    type: "Full-time",
    current: false,
    icon: "Layers",
    responsibilities: [
      "Co-developed GoEventify, a hyperlocal event marketplace, and shipped it to the web, Play Store and App Store.",
      "Built RESTful APIs with Node.js, Express.js and MongoDB, and user interfaces with React.js and React Native.",
      "Automated deployments with GitHub Actions CI/CD and managed Play Store and App Store releases.",
      "Integrated UPI/card payments and Apple In-App Purchase subscriptions with server-side payment verification.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "React Native",
      "Node.js",
      "Express.js",
      "MongoDB",
      "RESTful APIs",
      "GitHub Actions",
      "Play Console",
      "App Store Connect",
    ],
  },
]

export const experienceContent = {
  sectionTitle: "Work",
  sectionTitleHighlight: "Experience",
  sectionSubtitle: "Where I've worked and what I've shipped along the way.",
}

export const education = [
  {
    degree: "B.Tech, Computer Science and Engineering",
    institution: "Shri Ram Institute of Science and Technology",
    location: "Jabalpur, MP",
    duration: "2022 – 2026",
    grade: "CGPA 8.71/10",
    description: [
      "Strong foundation in data structures and algorithms",
      "Comprehensive understanding of software engineering",
      "Hands-on experience with modern web development",
    ],
  },
  {
    degree: "Senior Secondary (Class XII)",
    institution: "MP Board",
    location: "Jabalpur, MP",
    duration: "2022",
    grade: "92%",
    description: ["Science stream with Mathematics"],
  },
  {
    degree: "Secondary (Class X)",
    institution: "MP Board",
    location: "Jabalpur, MP",
    duration: "2020",
    grade: "90%",
    description: [],
  },
]

export const certificates = [
  { title: "Java, JavaScript, SQL and React.js", issuer: "HackerRank", date: "Jan 2026" },
  { title: "Front-End Development with React.js", issuer: "IBM", date: "Jul 2025" },
  { title: "Postman API Fundamentals Student Expert", issuer: "Postman", date: "Apr 2024" },
]

export const educationContent = {
  sectionTitle: "Education",
  sectionTitleHighlight: "Journey",
  sectionSubtitle: "My academic path and certifications.",
}

export const contactMethods = [
  {
    title: "Email",
    icon: "Mail",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
    external: false,
  },
  {
    title: "Phone",
    icon: "Phone",
    value: contactInfo.phone,
    href: contactInfo.phoneHref,
    external: false,
  },
  {
    title: "GitHub",
    icon: "Github",
    value: `github.com/${contactInfo.githubUsername}`,
    href: contactInfo.githubUrl,
    external: true,
  },
  {
    title: "LinkedIn",
    icon: "Linkedin",
    value: `linkedin.com/in/${contactInfo.linkedinUsername}`,
    href: contactInfo.linkedinUrl,
    external: true,
  },
]

export const contactContent = {
  sectionTitle: "Get In",
  sectionTitleHighlight: "Touch",
  sectionSubtitle: "Have a role, a project or a question about something I've built? I'd love to hear from you.",
  ctaTitle: "Let's Work Together",
  ctaDescription:
    "I'm always happy to talk about software engineering roles, collaborations and interesting problems. Email is the fastest way to reach me.",
  locationLabel: "Location",
  locationValue: contactInfo.location,
  responseLabel: "Response Time",
  responseValue: "Within 24 hours",
}
