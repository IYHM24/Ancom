import { motion } from "framer-motion"


export function ElementosFlotantes() {

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Elementos geométricos flotantes */}
        <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-indigo-400 dark:bg-indigo-300 rounded-full opacity-50"
            animate={{
            y: [0, 20, 0],
            rotate: [0, 45, 0],
            }}
            transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            }}
        />
        <motion.div
            className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400 dark:bg-blue-200 rounded-lg opacity-40"
            animate={{
            x: [0, -20, 0],
            rotate: [0, -45, 0],
            }}
            transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            }}
        />
        {/* Patrón de puntos */}
        <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(120,_120,_120,_0.1)_1px,_transparent_1px)] [background-size:20px_20px]" />
        </div>
    )
}

