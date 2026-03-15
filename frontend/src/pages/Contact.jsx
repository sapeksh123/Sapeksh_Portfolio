import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Mail, Github, Linkedin, MapPin, Phone, Send, MessageCircle, Clock, Globe } from "lucide-react"

const contactMethods = [
    {
        title: "Email",
        description: "Send me an email and I'll get back to you within 24 hours.",
        icon: Mail,
        value: "sapekshvishwakarma@gmail.com",
        href: "mailto:sapekshvishwakarma@gmail.com",
        color: "from-blue-500 via-blue-600 to-cyan-500",
        bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20"
    },
    {
        title: "GitHub",
        description: "Check out my code repositories and contributions.",
        icon: Github,
        value: "sapeksh123",
        href: "https://github.com/sapeksh123/",
        color: "from-gray-600 via-gray-700 to-gray-800",
        bgPattern: "bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-950/20 dark:to-gray-900/20"
    },
    {
        title: "LinkedIn",
        description: "Let's connect and build our professional network.",
        icon: Linkedin,
        value: "sa-12v",
        href: "https://www.linkedin.com/in/sa-12v",
        color: "from-blue-600 via-blue-700 to-blue-800",
        bgPattern: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20"
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

export default function Contact() {
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
                        Get In <span className="text-primary">Touch</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16"
                >
                    {contactMethods.map((method) => {
                        const IconComponent = method.icon
                        return (
                            <motion.div key={method.title} variants={itemVariants}>
                                <Card className={`h-full hover:shadow-xl transition-all duration-300 border-0 ${method.bgPattern} group hover:-translate-y-2 text-center`}>
                                    <CardHeader className="pb-4">
                                        <div className="flex justify-center mb-4">
                                            <div className={`p-4 sm:p-5 rounded-xl bg-gradient-to-r ${method.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <IconComponent className="h-6 w-6 sm:h-8 sm:w-8" />
                                            </div>
                                        </div>
                                        <CardTitle className="text-lg sm:text-xl mb-2 font-bold">{method.title}</CardTitle>
                                        <p className="text-muted-foreground text-sm leading-relaxed">
                                            {method.description}
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="font-bold mb-4 text-primary text-sm sm:text-base break-all">{method.value}</p>
                                        <Button asChild className="w-full min-h-[44px] bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-lg hover:shadow-xl transition-all duration-300 group/btn">
                                            <a
                                                href={method.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Send className="mr-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                                Connect
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </motion.div>

                {/* Enhanced Additional Info */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="max-w-4xl mx-auto"
                >
                    <Card className="bg-gradient-to-br from-primary/10 via-blue-500/10 to-accent/10 border-primary/20 shadow-xl overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-500/5" />
                        <CardContent className="py-8 sm:py-12 relative">
                            <div className="text-center mb-8 sm:mb-10">
                                <div className="flex items-center justify-center mb-4">
                                    <div className="p-3 rounded-full bg-gradient-to-r from-primary to-blue-500 text-white shadow-lg">
                                        <MessageCircle className="h-6 w-6" />
                                    </div>
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold mb-4">Let's Work Together</h3>
                                <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
                                    I'm currently available for freelance projects and full-time opportunities.
                                    Whether you have a project in mind or just want to chat about technology,
                                    I'd love to hear from you.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                                <div className="text-center group">
                                    <div className="flex items-center justify-center mb-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 text-white mr-3 group-hover:scale-110 transition-transform">
                                            <Globe className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </div>
                                        <h4 className="font-bold text-sm sm:text-base">Location</h4>
                                    </div>
                                    <p className="text-muted-foreground text-sm sm:text-base">India</p>
                                </div>

                                <div className="text-center group">
                                    <div className="flex items-center justify-center mb-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white mr-3 group-hover:scale-110 transition-transform">
                                            <Clock className="h-4 w-4 sm:h-5 sm:w-5" />
                                        </div>
                                        <h4 className="font-bold text-sm sm:text-base">Response Time</h4>
                                    </div>
                                    <p className="text-muted-foreground text-sm sm:text-base">Within 24 hours</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>
            </div>
        </div>
    )
}