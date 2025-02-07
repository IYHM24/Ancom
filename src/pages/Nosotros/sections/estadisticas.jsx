import { motion } from "framer-motion"
import { FaUser, FaCode, FaRocket, FaAward } from "react-icons/fa"
import { useColorMode } from "@/components/ui/color-mode";

export function Estadisticas() {

    const { colorMode } = useColorMode();

    const stats = [
        { icon: FaUser, value: "50+", label: "Clientes Satisfechos" },
        { icon: FaCode, value: "100+", label: "Proyectos Completados" },
        { icon: FaRocket, value: "95%", label: "Tasa de Éxito" },
        { icon: FaAward, value: "24/7", label: "Soporte Técnico" },
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
                className="!text-3xl !font-bold !text-gray-700 dark:!text-gray-400"
            >
                {stat.value}
            </motion.div>
            <div className="!text-sm !text-gray-600 !mt-2">{stat.label}</div>
            </motion.div>
        ))}
        </div>
    )
}