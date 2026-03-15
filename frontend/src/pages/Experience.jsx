import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Briefcase, Calendar, MapPin, Layers, Palette } from "lucide-react"

const experiences = [
    {
        title: "Full Stack Developer (MERN)",
        company: "ADRS Techno Pvt. Ltd., Jabalpur",
        location: "On-Site",
        duration: "August 2025 – Present",
        type: "Full-time",
        icon: Layers,
        responsibilities: [
            "Delivered 10+ full-stack web projects with scalable architecture.",
            "Handled U.S.-based client projects end-to-end from requirements to delivery.",
            "Built and deployed apps with React.js, Next.js, Node.js, and Express.js.",
            "Integrated secure RESTful APIs with JWT/OAuth authentication.",
            "Collaborated with UI/UX to ship responsive, accessible interfaces.",
            "Contributed to internal workshops and code quality initiatives."
        ],
        technologies: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB", "JWT", "OAuth", "RESTful APIs"]
    },
    {
        title: "Frontend Developer Intern",
        company: "ADRS Techno Pvt. Ltd., Jabalpur",
        location: "Hybrid",
        duration: "February 2025 – July 2025",
        type: "Internship",
        icon: Palette,
        responsibilities: [
            "Developed interactive, responsive UIs using React.js and modern CSS.",
            "Converted complex Figma designs into high-performance pages.",
            "Built reusable React components to improve maintainability.",
            "Integrated APIs for dynamic data and content rendering.",
            "Optimised performance, accessibility, and cross-browser support.",
            "Collaborated across teams to ensure seamless delivery."
        ],
        technologies: ["React.js", "CSS3", "JavaScript", "Figma", "HTML5", "API Integration"]
    }
]

export default function Experience() {
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
                        Professional <span className="text-primary">Experience</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        My journey of hands-on learning and professional growth in web development
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="space-y-8 sm:space-y-12">
                    {experiences.map((exp, index) => {
                        const IconComponent = exp.icon
                        return (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <Card className="hover:shadow-lg transition-shadow duration-300">
                                    <CardContent className="p-4 sm:p-6 lg:p-8">
                                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                            <div className="flex-shrink-0 flex justify-center sm:justify-start">
                                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                    <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                                </div>
                                            </div>

                                            <div className="flex-grow text-center sm:text-left">
                                                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                                    <div className="mb-4 lg:mb-0">
                                                        <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">{exp.title}</h3>
                                                        <p className="text-base sm:text-lg text-primary font-medium mb-2">{exp.company}</p>
                                                        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-muted-foreground mb-2">
                                                            <div className="flex items-center gap-1">
                                                                <MapPin className="h-4 w-4" />
                                                                <span className="text-sm sm:text-base">{exp.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-1">
                                                                <Calendar className="h-4 w-4" />
                                                                <span className="text-sm sm:text-base">{exp.duration}</span>
                                                            </div>
                                                        </div>
                                                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium">
                                                            {exp.type}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="mb-4 sm:mb-6">
                                                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Key Responsibilities</h4>
                                                    <ul className="space-y-2">
                                                        {exp.responsibilities.map((resp, i) => (
                                                            <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base">
                                                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                                                <span>{resp}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold mb-3 text-sm sm:text-base">Technologies Used</h4>
                                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                        {exp.technologies.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}