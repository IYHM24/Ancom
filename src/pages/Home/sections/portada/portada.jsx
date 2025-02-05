import React from 'react'
import { Button } from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { useColorMode } from '@/components/ui/color-mode'
import { motion } from "framer-motion";
import ParticlesBg from "particles-bg";

export const Portada = () => {

    const { colorMode } = useColorMode();

    return (
        <div className='relative rounded-4xl !mb-25'>
            <ParticlesBg 
                type={colorMode == 'dark'? "square" : "cobweb"}
                bg={true} 
            /> 
            <div className=''>
                <motion.div
                    initial={{ opacity: 0, y: 100 }} // Empieza invisible y desplazado hacia abajo
                    animate={{ opacity: 1, y: 0 }}  // Se hace visible y sube
                    transition={{ duration: 1, ease: "easeOut" }} // Duración y tipo de animación
                    className='max-md:!p-5 !animate-fade-in !gap-10 !mx-auto container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-8 py-24 text-center md:py-32'
                >
                    <div className='flex flex-col gap-5'>
                        <h2 className='!bg-clip-text !text-3xl !font-bold !tracking-tight sm:!text-4xl md:!text-5xl lg:!text-6xl text-shadow'>Transformamos Tu Idea</h2>
                        <p className='!text-xl text-center !text-gray-700 dark:!text-gray-300 text-shadow'> En Ancom diseñamos software a la medida que potencia tus operaciones. Nuestra experiencia y compromiso con la excelencia nos permiten ofrecer resultados confiables, ágiles y escalables para tu crecimiento.</p>
                    </div>
                    <div className='flex gap-2'>
                        <Button> Explorar soluciones <FaArrowRight/> </Button>
                        <Button variant="outline" colorPalette={colorMode == "dark" ? "white": "gray"} className='!font-bold'> Contactar </Button>
                    </div>
                </motion.div>
            </div>
            
        </div>
    )
}
