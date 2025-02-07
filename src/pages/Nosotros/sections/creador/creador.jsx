import { motion } from "framer-motion"
import { FaRobot,FaCode, FaLightbulb, FaBrain, FaRocket, FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa"
import { Section } from "@/components/shared/seccion/section"
import profileIMG from "@/assets/creator/profile.jpg"

export const CreatorProfile = () => {
    const skills = [
        {
            category: "Desarrollo Frontend",
            items: ["React", "Angular", "TypeScript", "Tailwind CSS"],
            icon: FaCode,
            color: "bg-blue-500",
        },
        {
            category: "Desarrollo Backend",
            items: [".Net core", "Microservicios", "Cloud", "Spring boot"],
            icon: FaCode,
            color: "bg-fuchsia-500",
        },
        {
            category: "Desarrollo RPA",
            items: ["Voximplant", "Vonage", "n8n", "Playwright"],
            icon: FaRobot,
            color: "bg-orange-500",
        },
        {
            category: "Innovación",
            items: ["UI/UX", "Design Thinking", "Prototipado", "Testing"],
            icon: FaLightbulb,
            color: "bg-amber-500",
        },
        {
            category: "Resolución",
            items: ["Análisis", "Optimización", "Debugging", "Performance"],
            icon: FaBrain,
            color: "bg-purple-500",
        },
        {
            category: "Gestión",
            items: ["Agile", "Scrum", "Git", "CI/CD"],
            icon: FaRocket,
            color: "bg-emerald-500",
        },
    ]

    return (
        <Section className={"!mt-30 !mb-30"}>
            <div className="!max-w-6xl !mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="!text-4xl !font-bold !mb-4">El Creador</h2>
                    <div className="!w-24 !h-1 !bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-700 dark:to-blue-700  !mx-auto !mb-8 !rounded-full" />
                </motion.div>

                {/* Main Content */}
                <div className="grid md:grid-cols-12 gap-8">
                    {/* Left Column - Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-4"
                    >
                        <div className="bg-white dark:bg-black !rounded-2xl !shadow-xl !overflow-hidden">
                            <div className="!h-32 !bg-gradient-to-r from-purple-500 to-blue-500 dark:from-purple-700 dark:to-blue-700" />
                            <div className="!relative !px-6 !pb-6">
                                <div className="!absolute !-top-16 !left-1/2 !transform !-translate-x-1/2">
                                    <div className="!w-32 !h-32 !rounded-full !border-4 !border-white !overflow-hidden">
                                        <img
                                            height={128}
                                            width={128}
                                            src={profileIMG}
                                            alt="Creator"
                                            className="!w-full !h-full !object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="!pt-20 !text-center">
                                    <h3 className="!text-2xl !font-bold !mb-2">Andrés C. Gutiérrez</h3>
                                    <p className="!mb-4">Desarrollador Full Stack & Fundador</p>
                                    <div className="flex justify-center gap-4">
                                        {[FaGithub, FaLinkedin, FaYoutube].map((Icon, index) => (
                                            <motion.a
                                                key={index}
                                                href="#"
                                                whileHover={{ scale: 1.1 }}
                                                className="!p-2 !rounded-full !bg-gray-100 dark:!bg-gray-700 hover:!bg-gray-200 dark:hover:!bg-gray-800 !transition-colors"
                                            >
                                                <Icon className="!w-5 !h-5" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Personal Quote */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="!mt-8 bg-white dark:bg-black !p-6 !rounded-2xl !shadow-xl"
                        >
                            <div className="!text-4xl !mb-4">"</div>
                            <p className="!italic !text-gray-700 dark:!text-gray-300">
                                Mi pasión es crear soluciones tecnológicas innovadoras que impulsen el éxito de nuestros clientes y
                                transformen sus ideas en realidad.
                            </p>
                            <div className="!text-4xl !text-right">"</div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Skills & Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-8"
                    >
                        {/* About Me */}
                        <div className="bg-white dark:bg-black !p-8 rounded-2xl !shadow-xl !mb-8">
                            <h3 className="!text-2xl !font-bold !mb-4">Sobre Mí</h3>
                            <p className=" !text-gray-700 dark:!text-gray-300 !mb-6">
                                Con una sólida formación en desarrollo web y una pasión por la innovación tecnológica, me especializo en
                                crear soluciones digitales que combinan funcionalidad y diseño. Mi enfoque se centra en desarrollar
                                productos que no solo cumplan con los requisitos técnicos, sino que también proporcionen una experiencia
                                excepcional al usuario.
                            </p>
                            <div className="grid grid-cols-2 gap-4 !text-sm">
                                <div className="bg-gray-50 dark:bg-gray-900  !p-4 !rounded-lg">
                                    <p className="!font-medium  !text-gray-700 dark:!text-gray-300">Experiencia</p>
                                    <p className=" !text-gray-700 dark:!text-gray-300">3+ años en desarrollo web</p>
                                </div>
                                <div className="bg-gray-50 dark:bg-gray-900 !p-4 !rounded-lg">
                                    <p className="!font-medium !text-gray-700 dark:!text-gray-300">Proyectos Completados</p>
                                    <p className="!text-gray-700 dark:!text-gray-300">15+ proyectos exitosos</p>
                                </div>
                            </div>
                        </div>

                        {/* Skills Grid */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.category}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white dark:bg-black !p-6 !rounded-2xl !shadow-xl"
                                >
                                    <div className="flex items-center gap-4 !mb-4">
                                        <div className={`!p-3 rounded-xl ${skill.color}`}>
                                            <skill.icon className="!w-6 !h-6 text-white" />
                                        </div>
                                        <h4 className="!font-bold">{skill.category}</h4>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        {skill.items.map((item, i) => (
                                            <div key={item} className="bg-gray-50 dark:bg-gray-900 !px-3 !py-2 !rounded-lg !text-sm  !text-gray-700 dark:!text-gray-300">
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </Section>
    )
}

