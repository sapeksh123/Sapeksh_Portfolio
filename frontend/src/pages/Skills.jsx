import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Code, Database, Globe, Wrench, Users, Cog, Palette, Server, Cloud, Terminal } from "lucide-react"

const skillCategories = [
    {
        title: "Programming Languages",
        icon: Code,
        skills: ["JavaScript (ES6+)", "Basic Java", "SQL"],
        color: "from-blue-500 via-blue-600 to-cyan-500",
        bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
        title: "Frontend Technologies",
        icon: Palette,
        skills: ["HTML5", "CSS3", "React.js", "Next.js", "Bootstrap", "Tailwind CSS", "Framer Motion", "GSAP"],
        color: "from-green-500 via-green-600 to-emerald-500",
        bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
        title: "Backend Technologies",
        icon: Server,
        skills: ["Node.js", "Express.js", "RESTful APIs"],
        color: "from-purple-500 via-purple-600 to-pink-500",
        bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
    },
    {
        title: "Databases",
        icon: Database,
        skills: ["MongoDB", "MySQL"],
        color: "from-orange-500 via-orange-600 to-red-500",
        bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
    },
    {
        title: "Tools & Platforms",
        icon: Wrench,
        skills: ["Git", "GitHub", "Netlify", "Vercel", "Postman", "Figma"],
        color: "from-indigo-500 via-indigo-600 to-purple-500",
        bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20"
    },
    {
        title: "Core Skills",
        icon: Terminal,
        skills: ["Data Structures", "Algorithms", "Responsive Design"],
        color: "from-teal-500 via-teal-600 to-cyan-500",
        bgPattern: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20"
    },
    {
        title: "Soft Skills",
        icon: Users,
        skills: ["Communication", "Team Collaboration", "Problem Solving", "Time Management", "Adaptability", "Attention to Detail"],
        color: "from-pink-500 via-pink-600 to-rose-500",
        bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-950/20 dark:to-rose-950/20"
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

const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.3
        }
    }
}

export default function Skills() {
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
                        Technical <span className="text-primary">Skills</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Technologies and tools I work with
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8"
                >
                    {skillCategories.map((category) => {
                        const IconComponent = category.icon
                        return (
                            <motion.div key={category.title} variants={itemVariants}>
                                <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 ${category.bgPattern} group hover:-translate-y-1`}>
                                    <CardHeader className="pb-4">
                                        <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                                            <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0 shadow-lg`}>
                                                <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </div>
                                            <span className="leading-tight font-bold">{category.title}</span>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <motion.div
                                            variants={containerVariants}
                                            className="flex flex-wrap gap-2"
                                        >
                                            {category.skills.map((skill) => (
                                                <motion.span
                                                    key={skill}
                                                    variants={skillVariants}
                                                    whileHover={{ scale: 1.05 }}
                                                    className="px-3 py-2 bg-white/80 dark:bg-gray-800/80 text-foreground rounded-full text-xs sm:text-sm font-medium hover:bg-white dark:hover:bg-gray-700 transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md border border-gray-200/50 dark:border-gray-700/50"
                                                >
                                                    {skill}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </div>
    )
}