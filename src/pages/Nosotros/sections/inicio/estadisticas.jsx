import { motion } from "framer-motion"
import { FaClock, FaLightbulb, FaAward } from "react-icons/fa"
import { GiTargeted } from "react-icons/gi";
import { useColorMode } from "@/components/ui/color-mode";

export const Estadisticas = () => {

    const { colorMode } = useColorMode();

    const stats = [
        {
            icon: FaClock,
            value: "48h",
            label: "Tiempo de Respuesta",
            description: "Máximo tiempo de respuesta garantizado",
        },
        {
            icon: FaLightbulb,
            value: "15+",
            label: "Ideas Innovadoras",
            description: "Propuestas desarrolladas este año",
        },
        {
            icon: GiTargeted,
            value: "100%",
            label: "Enfoque al Cliente",
            description: "Satisfacción en proyectos entregados",
        },
        {   
            icon: FaAward, 
            value: "24/7", 
            label: "Soporte Técnico",
            description: "Soporte garantizado", 
        },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
            {stats.map((stat, index) => (
                <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="!text-center"
                >
                    <div className="!flex !justify-center !mb-4">
                        <stat.icon className="!w-8 !h-8" />
                    </div>
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="!text-3xl !font-bold"
                    >
                        {stat.value}
                    </motion.div>
                    <div className="!text-sm !mt-2">{stat.label}</div>
                </motion.div>
            ))}
        </div>
    )
}