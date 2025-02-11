import { motion } from "framer-motion"
import { FaHandSparkles, FaGraduationCap, FaBookOpen } from "react-icons/fa"

export const BannerProfe = () => {
  return (
    <section className="relative overflow-hidden  !py-16 !px-4 !bg-gray-50/50 dark:!bg-gray-800/50">
      {/* Animated background elements */}
      <div className="!absolute !inset-0 !overflow-hidden">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-gray-900 to-purple-900 opacity-20" />

        {/* Large animated shapes */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute !-top-1/4 !-right-1/4 !w-[800px] !h-[800px] bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-full !blur-3xl"
        />

        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="absolute -bottom-1/4 -left-1/4 !w-[600px] !h-[600px] bg-gradient-to-tr from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl"
        />

        {/* Geometric shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 30,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
          className="!absolute top-1/4 left-1/4 !w-96 !h-96 !border-[60px] !border-indigo-500/20 !rounded-full"
        />

        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/3 right-1/4 !w-80 !h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-2xl"
        />

        {/* Floating elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute !w-16 !h-16 bg-white/10 !rounded-full !blur-xl"
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
          />
        ))}

        {/* Additional decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute !top-1/4 right-1/3 !w-64 !h-64 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl" />
          <div className="absolute !bottom-1/4 !left-1/3 !w-64 !h-64 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-2xl" />
        </div>
      </div>

      <div className="relative !max-w-4xl !mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="!text-center !space-y-8"
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              type: "spring",
              stiffness: 200,
            }}
            className="!inline-flex !items-center !gap-1.5 !px-4 !py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 !mb-6"
          >
            <FaHandSparkles className="!w-4 !h-4 text-indigo-400" />
            <span className="!text-sm !font-medium text-indigo-400">Disponible Próximamente</span>
          </motion.div>

          {/* Title */}
          <h2 className="!text-4xl md:!text-5xl !font-bold">¿Buscas Dominar tus Materias con Excelencia?</h2>

          {/* Description */}
          <p className="!text-xl !text-gray-700 dark:!text-gray-300 !max-w-3xl !mx-auto !leading-relaxed">
            En Profe Andrés transformamos el aprendizaje en una experiencia enriquecedora. Obtén apoyo personalizado,
            recursos educativos de calidad y videotutoriales especializados que te ayudarán a alcanzar el éxito
            académico que mereces.
          </p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 !gap-6 !mt-8"
          >
            {[
              {
                icon: FaGraduationCap,
                text: "Asistencia Académica Personalizada",
              },
              {
                icon: FaBookOpen,
                text: "Recursos Educativos Especializados",
              },
              {
                icon: FaHandSparkles,
                text: "Videotutoriales Detallados",
              },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center !gap-2 !p-4 rounded-xl !bg-gray-100/50 dark:!bg-gray-800/50 backdrop-blur-sm">
                <feature.icon className="!w-6 !h-6 text-indigo-400" />
                <span className="text-sm !text-gray-700 dark:!text-gray-300 text-center">{feature.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8"
          >
            <button
              disabled
              className="!px-8 !py-3 !bg-gradient-to-r !from-indigo-500 !to-blue-500 text-white !rounded-full 
                         opacity-75 cursor-not-allowed hover:shadow-lg hover:shadow-indigo-500/25 transition-shadow"
            >
              Muy Pronto
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

