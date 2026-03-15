import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { User, GraduationCap, MapPin, Briefcase, Rocket, Heart, Target, Users2, Lightbulb } from "lucide-react"

const highlights = [
    {
        title: "Introduction",
        description: "I'm a pre-final year Computer Science & Engineering student with a passion for creating impactful digital solutions. With a strong foundation in data structures, algorithms, and modern web development, I strive to build applications that make a difference.",
        icon: User,
        color: "from-blue-500 via-blue-600 to-cyan-500",
        bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
        title: "Technical Foundation",
        description: "Strong expertise in Data Structures, Algorithms, and modern web development technologies including React.js, Node.js, and full-stack development. I approach every project with confidence and deliver high-quality results.",
        icon: Rocket,
        color: "from-green-500 via-green-600 to-emerald-500",
        bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20"
    },
    {
        title: "Continuous Learning",
        description: "Committed to staying current with emerging technologies and best practices. I embrace challenges as opportunities to grow and innovate in the ever-evolving world of software engineering.",
        icon: Lightbulb,
        color: "from-purple-500 via-purple-600 to-pink-500",
        bgPattern: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20"
    },
    {
        title: "Collaboration",
        description: "Open to internships, collaborative projects, and full-time opportunities. I believe in the power of teamwork and enjoy working with others to create amazing solutions.",
        icon: Users2,
        color: "from-orange-500 via-orange-600 to-red-500",
        bgPattern: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20"
    }
]

export default function About() {
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
                        About <span className="text-primary">Me</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get to know more about my background and expertise
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12 mb-12 sm:mb-16">
                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="xl:col-span-2 space-y-6"
                    >
                        {highlights.map((highlight, index) => {
                            const IconComponent = highlight.icon
                            return (
                                <motion.div
                                    key={highlight.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                >
                                    <Card className={`hover:shadow-xl transition-all duration-300 border-0 ${highlight.bgPattern} group hover:-translate-y-1`}>
                                        <CardHeader className="pb-3">
                                            <CardTitle className="flex items-center gap-3 text-lg sm:text-xl">
                                                <div className={`p-3 sm:p-4 rounded-xl bg-gradient-to-r ${highlight.color} text-white flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                                                </div>
                                                <span className="leading-tight font-bold">{highlight.title}</span>
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                                                {highlight.description}
                                            </p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>

                    {/* Quick Info Sidebar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="xl:col-span-1"
                    >
                        <Card className="h-fit xl:sticky xl:top-24 bg-gradient-to-br from-primary/5 via-blue-500/5 to-accent/5 border-primary/20 shadow-xl">
                            <CardHeader>
                                <CardTitle className="text-lg sm:text-xl flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    Quick Info
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 py-3 border-b border-primary/10 group hover:bg-primary/5 rounded-lg px-2 transition-colors">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
                                            <GraduationCap className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="block text-xs sm:text-sm text-muted-foreground font-medium">Education</span>
                                            <span className="font-bold text-sm sm:text-base">B.Tech CSE</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 border-b border-primary/10 group hover:bg-primary/5 rounded-lg px-2 transition-colors">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                                            <MapPin className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="block text-xs sm:text-sm text-muted-foreground font-medium">Location</span>
                                            <span className="font-bold text-sm sm:text-base">India</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 border-b border-primary/10 group hover:bg-primary/5 rounded-lg px-2 transition-colors">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                                            <Heart className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="block text-xs sm:text-sm text-muted-foreground font-medium">Status</span>
                                            <span className="font-bold text-sm sm:text-base text-green-600 dark:text-green-400">Available</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 py-3 group hover:bg-primary/5 rounded-lg px-2 transition-colors">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                            <Rocket className="h-4 w-4" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <span className="block text-xs sm:text-sm text-muted-foreground font-medium">Focus</span>
                                            <span className="font-bold text-sm sm:text-base">Full Stack Dev</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}