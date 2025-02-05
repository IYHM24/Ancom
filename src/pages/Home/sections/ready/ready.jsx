import React from 'react'
import { Button } from '@chakra-ui/react'
import portada from '@/assets/portadas/PortadaNeon.png'
import { motion } from "framer-motion";

export const Ready = () => {

  const style={
    backgroundImage:`url(${portada})`
  }

  return (
    <section className="!border-t !border-gray-400 dark:!border-gray-800">
      <div className='!w-full'  style={style}>
        <motion.div
           initial={{ opacity: 0, y: 50 }} // Empieza invisible y desplazado hacia abajo
           whileInView={{ opacity: 1, y: 0 }} // Se hace visible cuando entra en la pantalla
           transition={{ duration: 0.8, ease: "easeOut" }} // Duración y suavidad de la animación
           viewport={{ once: true }}
          className="max-md:!p-5 !mx-auto !container !flex !flex-col !items-center !gap-4 !py-24 !text-center md:!py-32 "
        >
          <h2 className="!font-bold !text-3xl !leading-[1.1] sm:!text-3xl md:!text-5xl">
            ¿Listo para revolucionar tu negocio?
          </h2>
          <p className="!max-w-[42rem] !leading-normal !text-gray-600 dark:!text-gray-400 sm:!text-xl sm:!leading-8 !text-lg">
            Dele la ooportunidad de crecer a su negocio ahora mismo, nuestros expertos estan acá para ayudarlo y guiarlo en todo este recorrido de crecimiento
          </p>
          <Button size="lg" className="mt-4 !shadow-[0_0_15px_#2600ff] hover:!shadow-[#2600ff] transition">
            Empecemos
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
