import { Section } from "@/components/shared/seccion/section"
import { motion } from "framer-motion"
import { FaCalendar, FaUser, FaRocket, FaAward } from "react-icons/fa"
import { GiTargeted } from "react-icons/gi"

export const TimelineSection = () => {
    const timelineEvents = [
        {
            year: "2021",
            title: "Los Inicios",
            description:
                "Ancom surge con mi incursión en el mundo del desarrollo, marcando el comienzo de mi marca personal.",
            icon: FaCalendar,
            color: "bg-blue-500",
        },
        {
            year: "2022",
            title: "Primeros Proyectos",
            description:
                "Ingresé a una empresa de desarrollo que gestiona campañas para reconocidas marcas en Colombia. Fue allí donde comencé a trabajar con mis primeros clientes, estableciendo bases sólidas de confianza y profesionalismo.",
            icon: FaUser,
            color: "bg-purple-500",
        },
        {
            year: "2023",
            title: "Expansión Tecnológica",
            description:
                "El 2023 fue un año de grandes desafíos y aprendizaje, marcado por la adopción de nuevas tecnologías. Exploré el mundo de los bots y descubrí su enorme potencial.",
            icon: FaRocket,
            color: "bg-indigo-500",
        },
        {
            year: "2024",
            title: "Incursión en la IA y Contact Center",
            description:
                "En 2024, amplié mis habilidades en inteligencia artificial y las fusioné con el mundo de los bots, creando agentes inteligentes capaces de gestionar tareas con precisión y afrontar cualquier desafío. Además, incursioné en el desarrollo de voice bots, integrándolos con soluciones web para potenciar la experiencia del usuario.",
            icon: GiTargeted,
            color: "bg-violet-500",
        },
        {
            year: "2025",
            title: "Conformación de Ancom",
            description:
                "En 2025, mi objetivo es crecer profesionalmente y dar el salto al mundo independiente, enfocándome en la búsqueda de nuevos clientes. A medida que Ancom se expanda, planeo formar un equipo de trabajo, transformándola de una marca personal a una firma de desarrollo consolidada.",
            icon: GiTargeted,
            color: "bg-pink-500",
        },
    ];

    return (
        <Section className={"flex justify-center"}>
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="!text-center !mb-16"
                >
                    <h2 className="!text-5xl !font-bold !mb-4">Nuestra Historia</h2>
                    <p className="!text-gray-700 dark:!text-gray-300 !max-w-2xl !mx-auto">
                        Un viaje de innovación y crecimiento constante, construyendo el futuro digital paso a paso.
                    </p>
                </motion.div>

                <div className="!relative">
                    {/* Línea central del timeline */}
                    <div className="!absolute !left-1/2 !transform -translate-x-1/2 !h-full !w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full" />

                    <div className="!space-y-16">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                className={`!relative !flex !items-center ${index % 2 === 0 ? "!justify-start" : "!justify-end"
                                    } md:flex-row`}
                            >
                                {/* Contenedor del evento */}
                                <div className={`md:!w-5/12 ${index % 2 === 0 ? "!md:pr-8" : "!md:pl-8"}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="!bg-gray-100/50 dark:!bg-gray-800/50 !p-6 !rounded-lg !shadow-lg hover:!shadow-xl !transition-shadow"
                                    >

                                        <div className="!flex !items-center !gap-4 !mb-4">
                                            <div className={`!p-3 !rounded-full ${event.color}`}>
                                                <event.icon className="!w-6 !h-6 !text-white" />
                                            </div>
                                            <div className="!font-bold !text-xl">{event.year}</div>
                                        </div>
                                        <h3 className="!text-xl !font-semibold !mb-2">{event.title}</h3>
                                        <p className="!text-gray-700 dark:!text-gray-300">{event.description}</p>
                                    </motion.div>
                                </div>

                                {/* Punto central del timeline */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                                    viewport={{ once: true }}
                                    className={`max-md:!hidden !absolute !left-1/2 !transform !-translate-x-1/2 !w-4 !h-4 ${event.color} !rounded-full !border-4 !border-white !shadow-lg`}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Indicador de continuación */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="!text-center !mt-16"
                >
                    <div className="!inline-flex !items-center !justify-center !p-4 !bg-gray-100/50 dark:!bg-gray-800/50 !rounded-full !shadow-lg">
                        <FaAward className="!w-6 !h-6 !text-purple-500" />
                    </div>
                    <p className="!mt-4 !text-gray-700 dark:!text-gray-300">Continuamos escribiendo nuestra historia...</p>
                </motion.div>
            </div>
        </Section>
    )
}

