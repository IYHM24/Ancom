import { motion } from "framer-motion"
import { FaCloud, FaCog, FaBrain, FaPalette, FaGlobe, FaShoppingBag } from "react-icons/fa"
import { TbHelp } from "react-icons/tb"
import { CiMail } from "react-icons/ci"
import { useEffect, useRef, useState } from "react"
import { Section } from "@/components/shared/seccion/section"

export const ServicesSection = () => {
    const canvasRef = useRef(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const services = [
        {
            icon: FaGlobe,
            title: "Páginas web",
            description:
                "Desarrollamos plataformas web de alto rendimiento que combinan diseño atractivo con funcionalidad avanzada. Nuestras soluciones escalan con tu negocio y brillan en la nube.",
            color: "from-blue-500 to-cyan-400",
        },
        {
            icon: FaCog,
            title: "Automatizaciones",
            description:
                "Optimizamos los procesos de tu empresa mediante sistemas inteligentes que reducen tareas repetitivas, minimizan errores y multiplican la productividad de tu equipo.",
            color: "from-purple-500 to-pink-500",
        },
        {
            icon: FaBrain,
            title: "Automatizaciones IA",
            description:
                "Implementamos algoritmos de inteligencia artificial que transforman tus datos en insights accionables, permitiéndote tomar decisiones estratégicas basadas en análisis predictivo.",
            color: "from-indigo-500 to-blue-500",
        },
        {
            icon: TbHelp,
            title: "Consultoría",
            description:
                "Proporcionamos asesoramiento técnico especializado para potenciar tu visión empresarial. Convertimos desafíos tecnológicos en oportunidades de crecimiento e innovación.",
            color: "from-green-500 to-emerald-500",
        },
        {
            icon: FaPalette,
            title: "Diseño web",
            description:
                "Creamos interfaces cautivadoras que fusionan estética y funcionalidad. Cada pixel está pensado para maximizar la conversión y deleitar a tus usuarios en cualquier dispositivo.",
            color: "from-orange-500 to-yellow-500",
        },
        {
            icon: FaCloud,
            title: "Wordpress",
            description:
                "Construimos sitios WordPress que destacan por su velocidad y seguridad. Implementamos soluciones personalizadas que te permiten gestionar tu contenido sin complicaciones.",
            color: "from-blue-600 to-blue-400",
        },
        {
            icon: FaShoppingBag,
            title: "E-commerce",
            description:
                "Diseñamos tiendas virtuales que convierten visitantes en clientes. Integramos pasarelas de pago seguras, gestión de inventario y análisis avanzado de ventas.",
            color: "from-red-500 to-pink-500",
        },
        {
            icon: CiMail,
            title: "Chat/Voz Bots",
            description:
                "Desarrollamos asistentes virtuales que elevan tu servicio al cliente 24/7. Utilizamos procesamiento de lenguaje natural para mantener conversaciones fluidas y resolver consultas al instante.",
            color: "from-violet-500 to-purple-500",
        },
    ]

    // Network background effect
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const points = []
        const numberOfPoints = 50
        const connectionDistance = 100
        let animationFrameId

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const createPoints = () => {
            for (let i = 0; i < numberOfPoints; i++) {
                points.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                })
            }
        }

        const drawPoints = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Update points
            points.forEach((point) => {
                point.x += point.vx
                point.y += point.vy

                // Bounce off edges
                if (point.x < 0 || point.x > canvas.width) point.vx *= -1
                if (point.y < 0 || point.y > canvas.height) point.vy *= -1

                // Draw point
                ctx.beginPath()
                ctx.arc(point.x, point.y, 1, 0, Math.PI * 2)
                ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
                ctx.fill()
            })

            // Draw connections
            points.forEach((point, i) => {
                points.slice(i + 1).forEach((otherPoint) => {
                    const dx = point.x - otherPoint.x
                    const dy = point.y - otherPoint.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < connectionDistance) {
                        ctx.beginPath()
                        ctx.moveTo(point.x, point.y)
                        ctx.lineTo(otherPoint.x, otherPoint.y)
                        ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / connectionDistance)})`
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(drawPoints)
        }

        resize()
        createPoints()
        drawPoints()

        window.addEventListener("resize", resize)

        return () => {
            cancelAnimationFrame(animationFrameId)
            window.removeEventListener("resize", resize)
        }
    }, [])

    return (
        <Section>
            <div className="!max-w-7xl !mx-auto !relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="!text-center !mb-16"
                >
                    {/* Decoración del título */}
                    <div className="flex items-center justify-center mb-6 gap-2">
                        <motion.div
                            className="h-1 w-10 bg-black dark:bg-white rounded-full mr-4"
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                        <motion.h1
                            className="!text-5xl !font-bold"
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            Servicios
                        </motion.h1>
                        <motion.div
                            className="h-1 w-10  bg-black dark:bg-white rounded-full ml-4"
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                    </div>
                    <p className="!text-gray-700 dark:!text-gray-300 max-w-2xl !mx-auto">
                        Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio al siguiente nivel.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="!bg-gray-100/50 dark:!bg-gray-800/50 rounded-2xl !p-6 !h-full !border border-gray-700/50 hover:border-gray-600 !transition-colors">
                                {/* Service Icon */}
                                <div className={`!w-12 !h-12 !rounded-xl bg-gradient-to-r ${service.color} !p-3 !mb-4`}>
                                    <service.icon className="!w-full !h-full text-white" />
                                </div>

                                {/* Service Content */}
                                <h3 className="!text-xl !font-semibold !mb-3 !transition-colors">
                                    {service.title}
                                </h3>
                                <p className="!text-gray-700 dark:!text-gray-300 !text-sm !leading-relaxed">{service.description}</p>

                                {/* Hover Effect */}
                                <div className="!absolute !inset-0 !rounded-2xl !bg-gradient-to-r from-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    )
}

