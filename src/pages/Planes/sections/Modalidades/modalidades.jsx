import { Section } from "@/components/shared/seccion/section"
import { motion } from "framer-motion"
import { FaClock, FaUser, FaBriefcase, FaCheck, FaCalendar, FaRocket, FaCoffee, FaBrain } from "react-icons/fa"
import { GiTargeted } from "react-icons/gi"
import { LuZap } from "react-icons/lu"

export function ModalitiesSection() {
    const modalities = [
        {
            title: "Freelancers Especializados",
            icon: FaBrain,
            color: "from-emerald-500 to-teal-400",
            description: "Expertos para necesidades específicas y proyectos puntuales",
            benefits: [
                "Especialistas en tecnologías específicas",
                "Contratación por proyecto o tarea",
                "Experiencia comprobada en el sector",
                "Soluciones rápidas y profesionales",
            ],
            features: [
                {
                    icon: GiTargeted,
                    text: "Especialización",
                },
                {
                    icon: FaRocket,
                    text: "Agilidad",
                },
                {
                    icon: FaUser,
                    text: "Adaptabilidad",
                },
            ],
        },
        {
            title: "Tiempo Medio",
            icon: FaCalendar,
            color: "from-purple-500 to-pink-500",
            description: "Flexibilidad y eficiencia para proyectos específicos",
            benefits: [
                "20 horas semanales de desarrollo enfocado",
                "Flexibilidad horaria adaptada",
                "Coordinación efectiva de sprints",
                "Ideal para proyectos moderados",
            ],
            features: [
                {
                    icon: FaCoffee,
                    text: "Horario flexible",
                },
                {
                    icon: GiTargeted,
                    text: "Objetivos claros",
                },
                {
                    icon: LuZap,
                    text: "Alta eficiencia",
                },
            ],
        },

        {
            title: "Tiempo Completo",
            icon: FaBriefcase,
            color: "from-blue-500 to-cyan-400",
            description: "Dedicación completa para proyectos de gran escala",
            benefits: [
                "40 horas semanales de desarrollo dedicado",
                "Integración total con tu equipo",
                "Soporte prioritario y reuniones diarias",
                "Desarrollo ágil y entregas continuas",
            ],
            features: [
                {
                    icon: FaClock,
                    text: "Horario completo",
                },
                {
                    icon: FaUser,
                    text: "Equipo dedicado",
                },
                {
                    icon: FaRocket,
                    text: "Máxima velocidad",
                },
            ],
        },
    ]

    return (
        <Section>
            <div className="!max-w-7xl !mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="!text-center !mb-16"
                >
                    <h2 className="!text-4xl !font-bold !mb-4">Modalidades de Trabajo</h2>
                    <p className="!text-gray-700 dark:!text-gray-300 !max-w-2xl !mx-auto">
                        Adaptamos nuestros servicios a tus necesidades con diferentes modalidades de colaboración
                    </p>
                </motion.div>

                {/* Modalities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modalities.map((modality, index) => (
                        <motion.div
                            key={modality.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className="relative group"
                        >
                            <div className="!bg-gray-100/50 dark:!bg-gray-800/50 rounded-2xl !p-8 !h-full !border !border-gray-700/50 hover:!border-gray-600 !transition-all">
                                {/* Header with Icon */}
                                <div className="flex items-center gap-4 !mb-6">
                                    <div className={`!p-3 !rounded-xl bg-gradient-to-r ${modality.color}`}>
                                        <modality.icon className="!w-6 !h-6 text-white" />
                                    </div>
                                    <h3 className="!text-xl !font-bold">{modality.title}</h3>
                                </div>

                                {/* Description */}
                                <p className="!text-gray-700 dark:!text-gray-300 !mb-6">{modality.description}</p>

                                {/* Benefits */}
                                <div className="!space-y-3 !mb-8">
                                    {modality.benefits.map((benefit, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <FaCheck className="!w-5 !h-5 text-emerald-500 !flex-shrink-0 !mt-0.5" />
                                            <span className="!text-gray-700 dark:!text-gray-300 !text-sm">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-3 gap-4 !pt-6 !border-t !border-gray-700">
                                    {modality.features.map((feature, idx) => (
                                        <div key={idx} className="!text-center">
                                            <feature.icon className="!w-5 !h-5 !mx-auto !mb-2 !text-gray-700 dark:!text-gray-300" />
                                            <span className="!text-xs !text-gray-700 dark:!text-gray-300">{feature.text}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Hover Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

