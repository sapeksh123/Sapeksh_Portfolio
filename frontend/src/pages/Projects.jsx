import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { ExternalLink, Github, Leaf, Cloud, PenTool, MessageSquare, Database, ShoppingCart, Star, Eye } from "lucide-react"

const projects = [
    {
        title: "GrowEdge – Agriculture Platform",
        description: "A platform connecting Farmers, Equipment Owners, Shopkeepers, and Admins to manage equipment renting, product shopping, and revenue tracking, with role-based dashboards and analytics.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication", "RBAC"],
        icon: Leaf,
        liveUrl: null,
        githubUrl: "https://github.com/sapeksh123/Agriculture-Platform-.git",
        color: "from-green-500 via-green-600 to-emerald-500",
        bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20",
        featured: true
    },
    {
        title: "Cloudinary AI Platform",
        description: "Built an AI-powered cloud management platform that automates image and video optimisation, background removal, and content tagging using advanced ML models integrated with Cloudinary and OpenAI APIs.",
        tech: ["TypeScript", "Next.js", "PostgreSQL", "Prisma + NeonDB", "Cloudinary API"],
        icon: Cloud,
        liveUrl: null,
        githubUrl: "https://github.com/sapeksh123/Cloudinary-SaaS.git",
        color: "from-blue-500 via-blue-600 to-cyan-500",
        bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20",
        featured: true
    },
    {
        title: "Blog Platform",
        description: "Developed a full-stack blogging application with markdown support, user authentication, an admin dashboard, and a clean, responsive UI for an enhanced writing experience.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Authentication"],
        icon: PenTool,
        liveUrl: "https://bloggify-five.vercel.app/",
        githubUrl: "https://github.com/sapeksh123/Blogging-Web-App.git",
        color: "from-purple-500 via-purple-600 to-pink-500",
        bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20",
        featured: false
    },
    {
        title: "Discord Bot",
        description: "Created a custom Discord bot for community management featuring automated moderation, custom commands, and API integrations for real-time data fetching.",
        tech: ["React.js", "Node.js", "Express.js", "Discord.js", "REST APIs", "MongoDB", "Socket.io"],
        icon: MessageSquare,
        liveUrl: null,
        githubUrl: "https://github.com/sapeksh123/Discord_Bot.git",
        color: "from-indigo-500 via-indigo-600 to-purple-500",
        bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20",
        featured: false
    },
    {
        title: "Data Structure Visualisation Dashboard",
        description: "Developed an interactive platform to visualise core data structures such as stacks, queues, linked lists, and trees with real-time animations and step-by-step operation tracking. Data flow simulation and algorithm analysis, enhancing learning and conceptual understanding.",
        tech: ["React.js", "Chart.js", "Recharts", "Node.js", "Express.js", "REST APIs"],
        icon: Database,
        liveUrl: null,
        githubUrl: "https://github.com/sapeksh123/data-visualization-web.git",
        color: "from-orange-500 via-orange-600 to-red-500",
        bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20",
        featured: false
    },
    {
        title: "E-Commerce Platform",
        description: "A full-featured online shopping platform with dynamic product listings, RESTful APIs, cart and wishlist management, order tracking, and an admin dashboard for inventory and analytics.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"],
        icon: ShoppingCart,
        liveUrl: null,
        githubUrl: "https://github.com/sapeksh123/Aarambh-Jeweller-Web-.git",
        color: "from-pink-500 via-pink-600 to-rose-500",
        bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20",
        featured: false
    }
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
}

export default function Projects() {
    return (
        <div className="min-h-screen py-16 sm:py-20">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-primary">Projects</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Explore my recent work and hands-on projects across diverse technologies.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
                >
                    {projects.map((project) => {
                        const IconComponent = project.icon
                        return (
                            <motion.div key={project.title} variants={itemVariants}>
                                <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 ${project.bgPattern} group hover:-translate-y-2 relative overflow-hidden`}>
                                    {/* Featured Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-10">
                                            <div className="flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-full text-xs font-bold shadow-lg">
                                                <Star className="h-3 w-3 fill-current" />
                                                <span>Featured</span>
                                            </div>
                                        </div>
                                    )}

                                    <CardHeader className="pb-4">
                                        <div className="flex items-start gap-3 mb-3">
                                            <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${project.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}>
                                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </div>
                                            <CardTitle className="text-lg sm:text-xl leading-tight font-bold">{project.title}</CardTitle>
                                        </div>
                                        <CardDescription className="text-sm sm:text-base leading-relaxed">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="pt-0">
                                        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                                            {project.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-2 sm:px-3 py-1 bg-white/80 dark:bg-gray-800/80 text-foreground rounded-full text-xs sm:text-sm font-medium shadow-sm border border-gray-200/50 dark:border-gray-700/50"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                            {project.liveUrl && (
                                                <Button asChild variant="default" size="sm" className="flex-1 min-h-[44px] bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                        <Eye className="mr-2 h-4 w-4" />
                                                        Live Demo
                                                    </a>
                                                </Button>
                                            )}
                                            <Button asChild variant="outline" size="sm" className={`${project.liveUrl ? "flex-1" : "w-full"} min-h-[44px] border-2 border-gray-200 dark:border-gray-700 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300`}>
                                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                    <Github className="mr-2 h-4 w-4" />
                                                    View Code
                                                </a>
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Enhanced Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12 sm:mt-16"
                >
                    <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-accent/10 border-primary/20 shadow-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5" />
                        <CardContent className="py-8 sm:py-12 relative">
                            <div className="flex items-center justify-center mb-4">
                                <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg">
                                    <Github className="h-6 w-6" />
                                </div>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-4">Want to see more?</h3>
                            <p className="text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                                These are just a few highlights from my portfolio. Check out my GitHub for more projects, contributions, and open-source work.
                            </p>
                            <Button asChild size="lg" className="min-h-[44px] bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-xl transition-all duration-300 group">
                                <a
                                    href="https://github.com/sapeksh123/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                                    Explore All Projects
                                    <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </a>
                            </Button>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}