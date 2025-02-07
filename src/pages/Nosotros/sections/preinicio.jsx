import React from 'react'
import { Button } from '@chakra-ui/react'
import { useColorMode } from '@/components/ui/color-mode'
import { Subtitulo } from '@/components/shared/texto/subtitulos'
import { Parrafo } from '@/components/shared/texto/parrafos'
import { motion } from 'framer-motion'
import { Section } from '@/components/shared/seccion/section'
import { Estadisticas } from './estadisticas'
import { ElementosFlotantes } from '@/components/shared/particles/elementos-flotantes'

export const PreInicio = () => {

    let cartasDescripcion = [
        {
            titulo: "Experiencia Comprobada",
            descripcion: "Más de 3 años desarrollando soluciones tecnológicas para empresas de diversos sectores."
        },
        {
            titulo: "Tecnología de Punta",
            descripcion: "Utilizamos las últimas tecnologías y metodologías ágiles para garantizar resultados óptimos."
        },
        {
            titulo: "Compromiso Total",
            descripcion: "Nos dedicamos a entender tus necesidades y ofrecer soluciones que impulsen tu crecimiento."
        }
    ]

    const { colorMode } = useColorMode();

    return (
        <div className='w-full max-md:!p-5'>
            <Section className="!justify-center items-center">
                <ElementosFlotantes />
                <div className="!container !mx-auto">

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
                            Nosotros
                        </motion.h1>
                        <motion.div
                            className="h-1 w-10  bg-black dark:bg-white rounded-full ml-4"
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                        />
                    </div>


                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="!mb-16 !max-w-2xl !mx-auto text-center !text-gray-700 dark:!text-gray-300"
                    >
                        Desde 2022, hemos estado a la vanguardia del desarrollo de software personalizado, transformando ideas
                        innovadoras en soluciones tecnológicas robustas y escalables.
                    </motion.p>

                    <div className="!mb-16 !mx-auto !grid !max-w-5xl !grid-cols-1 !gap-8 md:!grid-cols-3">

                        {cartasDescripcion.map((carta, indice) => (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 + indice * 0.2, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                key={indice}
                                className="flex gap-5 flex-col md:w-full !relative !overflow-hidden !rounded-lg !border !bg-background !p-8 !border-gray-500 dark:!border-gray-800 "
                            >
                                <Subtitulo className={"!text-center"}>{carta.titulo}</Subtitulo>
                                <Parrafo className={"!text-center"}>
                                    {carta.descripcion}
                                </Parrafo>
                            </motion.div>
                        ))}

                    </div>

                    <div className="!text-center flex flex-col gap-20">
                        <div className='flex justify-center'>
                            {/* Sección de estadísticas */}
                            <Estadisticas />
                        </div>
                        <div className="justify-center !inline-flex !gap-4">
                            <motion.button
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.2, duration: 0.6 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button colorPalette={colorMode == "dark" ? "white" : "gray"} size="lg" className="!shadow-[0_0_15px_#2600ff] hover:!shadow-[#2600ff] transition !font-bold border-white text-white hover:bg-white/10">
                                    Ver Proyectos
                                </Button>
                            </motion.button>
                        </div>
                    </div>
                </div>

            </Section>
        </div>
    )
}
