import { motion } from "framer-motion"
import { FaCode, FaLayerGroup, FaDatabase, FaCloud, FaRobot, FaLock, FaBrush, FaCog } from "react-icons/fa"
import { Section } from "@/components/shared/seccion/section"
import { Button } from "@chakra-ui/react"
import { useColorMode } from "@/components/ui/color-mode"
import { ElementosFlotantes } from "@/components/shared/particles/elementos-flotantes"

export const Especialidades = () => {

    const colorMode = useColorMode();

    const technologies = [
        {
            category: "Bot Development",
            icon: FaRobot,
            color: "bg-indigo-500",
            description: "Desarrollo de bots inteligentes y sistemas conversacionales",
            techs: [
                { name: "OpenAI API", level: 90 },
                { name: "n8n", level: 85 },
                { name: "Playwright", level: 80 },
                { name: "Selenium", level: 85 },
                { name: "Voximplant", level: 75 },
                { name: "Vonage", level: 75 },
            ],
        },
        {
            category: "Frontend Development",
            icon: FaLayerGroup,
            color: "bg-blue-500",
            description: "Creación de interfaces modernas y responsivas",
            techs: [
                { name: "React", level: 95 },
                { name: "Next.js", level: 90 },
                { name: "TypeScript", level: 85 },
                { name: "Tailwind CSS", level: 90 },
                { name: "Angular", level: 80 },
            ],
        },
        {
            category: "Backend Development",
            icon: FaDatabase,
            color: "bg-emerald-500",
            description: "Desarrollo de APIs robustas y escalables",
            techs: [
                { name: "Node.js", level: 85 },
                { name: ".Net Core", level: 80 },
                { name: "SQL Server", level: 75 },
                { name: "MongoDB", level: 80 },
                { name: "GraphQL", level: 70 },
            ],
        },
        {
            category: "Cloud & DevOps",
            icon: FaCloud,
            color: "bg-purple-500",
            description: "Implementación y gestión en la nube",
            techs: [
                { name: "Azure", level: 90 },
                { name: "AWS", level: 80 },
                { name: "Google cloud", level: 70 },
                { name: "Docker", level: 80 },
                { name: "CI/CD", level: 70 },
            ],
        }
    ]

    return (
        <Section className={"!mb-10"}>
            <ElementosFlotantes />
            <div className="!max-w-6xl !mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center !mb-16"
                >
                    <h2 className="!text-4xl !font-bold !mb-4">Nuestras Tecnologías</h2>
                    <p className="!text-gray-700 dark:!text-gray-300 !max-w-2xl !mx-auto">
                        Dominamos las últimas tecnologías para ofrecer soluciones modernas y escalables que impulsan el éxito de
                        nuestros clientes.
                    </p>
                </motion.div>

                {/* Technologies Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {technologies.map((tech, index) => (
                        <motion.div
                            key={tech.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-black !rounded-2xl !shadow-xl !p-6 hover:!shadow-2xl !transition-shadow"
                        >
                            <div className="flex items-center gap-4 !mb-6">
                                <div className={`!p-3 rounded-xl ${tech.color}`}>
                                    <tech.icon className="!w-6 !h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="!font-bold !text-xl">{tech.category}</h3>
                                    <p className="!text-gray-700 dark:!text-gray-300 !text-sm">{tech.description}</p>
                                </div>
                            </div>

                            <div className="!space-y-4">
                                {tech.techs.map((item, i) => (
                                    <div key={item.name} className="!space-y-2">
                                        <div className="flex justify-between !text-sm">
                                            <span className="!font-medium">{item.name}</span>
                                            <span className="!text-gray-700 dark:!text-gray-300">{item.level}%</span>
                                        </div>
                                        <div className="!h-2 bg-gray-300 dark:bg-gray-800 !rounded-full !overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.level}%` }}
                                                transition={{ duration: 1, delay: i * 0.1 }}
                                                className={`h-full ${tech.color}`}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Additional Services */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="!mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                >
                    {[
                        { icon: FaCode, title: "Clean Code", desc: "Código limpio y mantenible" },
                        { icon: FaLock, title: "Seguridad", desc: "Prácticas seguras" },
                        { icon: FaBrush, title: "UI/UX", desc: "Diseño intuitivo" },
                        { icon: FaCog, title: "Optimización", desc: "Alto rendimiento" },
                    ].map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            className="bg-white dark:bg-black !p-4 !rounded-xl !shadow-lg text-center group hover:!bg-gradient-to-br hover:!bg-blue-500 dark:hover:!bg-blue-800 !transition-all !duration-300"
                        >
                            <div className="flex justify-center !mb-2">
                                <service.icon className="!w-6 !h-6 !text-blue-500 group-hover:!text-white !transition-colors" />
                            </div>
                            <h4 className="!font-medium group-hover:!text-white !transition-colors">{service.title}</h4>
                            <p className="!text-sm !text-gray-700 dark:!text-gray-300 group-hover:!text-white/90 !transition-colors">{service.desc}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="text-center !mt-16"
                >
                    <Button colorPalette={colorMode == "dark" ? "white" : "gray"} size="lg" className="!shadow-[0_0_15px_#2600ff] hover:!shadow-[#2600ff] transition !font-bold border-white text-white hover:bg-white/10">
                        Consulta Nuestros Servicios
                    </Button>
                </motion.div>
            </div>
        </Section>
    )
}
