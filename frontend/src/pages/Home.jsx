import { motion } from "framer-motion"
import { Button } from "../components/ui/button"
import { Download, Mail, Github, Linkedin, ArrowRight, Sparkles, Code2, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const socialLinks = [
    {
        name: "GitHub",
        url: "https://github.com/sapeksh123/",
        icon: Github
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sa-12v",
        icon: Linkedin
    },
    {
        name: "Email",
        url: "mailto:sapekshvishwakarma@gmail.com",
        icon: Mail
    }
]

export default function Home() {
    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Enhanced Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 bg-gradient-to-r from-primary/30 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-gradient-to-r from-accent/30 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-32 sm:h-32 lg:w-48 lg:h-48 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500" />

                {/* Floating Icons */}
                <div className="absolute top-20 left-10 opacity-10 animate-bounce delay-300">
                    <Code2 className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute top-32 right-20 opacity-10 animate-bounce delay-700">
                    <Zap className="h-6 w-6 text-accent" />
                </div>
                <div className="absolute bottom-32 left-20 opacity-10 animate-bounce delay-1000">
                    <Sparkles className="h-7 w-7 text-primary" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 sm:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                    {/* Enhanced Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex justify-center lg:order-2"
                    >
                        <div className="relative">
                            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl relative">
                                <img
                                    src="/files/profile.png"
                                    alt="Sapeksh Vishwakarma"
                                    className="w-full h-full object-cover"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                            </div>
                            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary via-blue-500 to-accent rounded-full blur opacity-30 animate-pulse" />

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.2 }}
                                className="absolute -bottom-4 -right-4 bg-gradient-to-r from-primary to-blue-500 text-white px-4 py-2 rounded-full shadow-lg border-2 border-background"
                            >
                                <div className="flex items-center gap-2">
                                    <Sparkles className="h-4 w-4" />
                                    <span className="text-sm font-semibold">Available</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Enhanced Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-center lg:text-left lg:order-1 space-y-4 sm:space-y-6"
                    >
                        {/* Greeting Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-blue-500/10 border border-primary/20 rounded-full text-primary font-medium text-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            <span>Welcome to my portfolio</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                        >
                            Hi, I'm{" "}
                            <span className="bg-gradient-to-r from-primary via-blue-500 to-accent bg-clip-text text-transparent">
                                Sapeksh Vishwakarma
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary flex items-center justify-center lg:justify-start gap-2"
                        >
                            <Code2 className="h-6 w-6 sm:h-8 sm:w-8" />
                            MERN Stack Developer
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                        >
                            Passionate software engineer specializing in building exceptional digital experiences
                            with modern web technologies. I create scalable, user-friendly applications that make a difference.
                        </motion.p>

                        {/* Enhanced Action Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
                        >
                            <Button asChild size="lg" className="group w-full sm:w-auto bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                <a
                                    href="https://drive.google.com/file/d/1KMN30IyYfMWkM5QLEwf-VgwsbhJ7LwfK/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="min-h-[44px]"
                                >
                                    <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                                    Download CV
                                    <Sparkles className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="group w-full sm:w-auto border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300">
                                <Link to="/contact" className="min-h-[44px]">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact Me
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Enhanced Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1.2 }}
                            className="flex gap-3 sm:gap-4 justify-center lg:justify-start pt-2"
                        >
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon
                                return (
                                    <motion.a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 hover:from-primary hover:to-blue-500 hover:text-white border border-primary/20 hover:border-transparent transition-all duration-300 min-w-[44px] min-h-[44px] flex items-center justify-center shadow-lg hover:shadow-xl"
                                    >
                                        <IconComponent className="h-5 w-5" />
                                        <span className="sr-only">{social.name}</span>
                                    </motion.a>
                                )
                            })}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Enhanced Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                    className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
                >
                    <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden">
                        <div className="w-1 h-3 bg-gradient-to-b from-primary to-blue-500 rounded-full mt-2 animate-bounce" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent animate-pulse" />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}