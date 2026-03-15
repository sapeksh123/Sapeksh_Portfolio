import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { GraduationCap, Calendar, Award, School } from "lucide-react"

const education = [
    {
        degree: "Bachelor of Technology — Computer Science & Engineering",
        institution: "Shri Ram Institute of Science & Technology, Jabalpur",
        duration: "2022 – 2026",
        grade: "CGPA: 8.63",
        description: [
            "Strong foundation in Data Structures and Algorithms",
            "Comprehensive understanding of Software Engineering",
            "Hands-on experience with modern Web Development",
            "Active participation in coding competitions"
        ]
    },
    {
        degree: "Higher Secondary Education — Class 12th",
        institution: "Madhya Pradesh Board of Secondary Education",
        duration: "2021 – 2022",
        grade: "Percentage: 91.8%",
        description: [
            "Science stream with Mathematics",
            "Focused on Physics, Chemistry, and Mathematics"
        ]
    },
    {
        degree: "High School — Class 10th",
        institution: "Madhya Pradesh Board of Secondary Education",
        duration: "2019 – 2020",
        grade: "Percentage: 90%",
        description: [
            "Strong performance in Mathematics and Science",
            "Consistent academic excellence"
        ]
    }
]

export default function Education() {
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
                        Education <span className="text-primary">Journey</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
                        My academic path and achievements
                    </p>
                </motion.div>

                {/* Education Timeline */}
                <div className="space-y-6 sm:space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.degree}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                        >
                            <Card className="hover:shadow-lg transition-shadow duration-300">
                                <CardContent className="p-4 sm:p-6 lg:p-8">
                                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                                        <div className="flex-shrink-0 flex justify-center sm:justify-start">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center">
                                                {index === 0 ? (
                                                    <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                                ) : (
                                                    <School className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex-grow text-center sm:text-left">
                                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                                <div className="mb-4 lg:mb-0">
                                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 leading-tight">{edu.degree}</h3>
                                                    <p className="text-base sm:text-lg text-primary font-medium mb-2">{edu.institution}</p>
                                                </div>
                                                <div className="lg:text-right">
                                                    <div className="flex items-center justify-center lg:justify-end gap-2 text-muted-foreground mb-2">
                                                        <Calendar className="h-4 w-4" />
                                                        <span className="text-sm sm:text-base">{edu.duration}</span>
                                                    </div>
                                                    <div className="text-primary font-semibold text-base sm:text-lg">{edu.grade}</div>
                                                </div>
                                            </div>

                                            <div>
                                                <h4 className="font-semibold mb-2 flex items-center justify-center sm:justify-start gap-2">
                                                    <Award className="h-4 w-4 text-primary" />
                                                    Key Highlights
                                                </h4>
                                                <ul className="space-y-1">
                                                    {edu.description.map((item, i) => (
                                                        <li key={i} className="text-muted-foreground flex items-start gap-2 text-sm sm:text-base">
                                                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}