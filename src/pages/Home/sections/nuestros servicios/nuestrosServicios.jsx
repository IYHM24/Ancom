import React from 'react'
import { CiCloud } from "react-icons/ci";
import { VscTools } from "react-icons/vsc";
import { LuBrain } from "react-icons/lu";
import { TfiHelpAlt } from "react-icons/tfi";
import { motion } from 'framer-motion';
import { TbBrush } from "react-icons/tb";
import { FaWordpress } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import { TbMessageChatbot } from "react-icons/tb";

export const features = [
    {
      name: "Paginas web",
      description: "Soluciones para la web escalables, resilientes y eficientes creadas para enamorar con compatibilidad con la nube.",
      icon: CiCloud,
    },
    {
      name: "Automatizaciones",
      description: "Nuestras soluciones ofrecen un rendimiento incomparable. Realizamos las tareas del negocio con presicion y eficiencia",
      icon: VscTools,
    },
    {
      name: "Automatizaciones IA",
      description: "Aproveche el poder del aprendizaje automático para obtener información útil a partir de los datos del negocio.",
      icon: LuBrain,
    },
    {
      name: "Consultoria",
      description: "asesoría especializada en desarrollo. Nuestro equipo de expertos analiza las necesidades para ofrecer soluciones estratégicas y a la medida del negocio.",
      icon: TfiHelpAlt,
    },
    {
      name: "Diseño web",
      description: "Creamos experiencias visuales únicas que optimizan la interacción de tus usuarios, adaptadas a cada dispositivo y necesidad.",
      icon: TbBrush,
    },
    {
      name: "Wordpress",
      description: "Potenciamos tu presencia en línea con soluciones robustas y personalizadas en WordPress, fáciles de administrar y escalar.",
      icon: FaWordpress ,
    },
    {
      name: "E-comerce",
      description: "Construimos tiendas online intuitivas y seguras que maximizan tu alcance y aumentan las ventas, con integración total.",
      icon: RiShoppingBag4Line ,
    },
    {
      name: "Chat/Voz Bots",
      description: "Desarrollamos bots inteligentes que automatizan la comunicación con tus clientes, brindando respuestas rápidas y precisas.",
      icon: TbMessageChatbot ,
    }
  ]

export const NuestrosServicios = () => {
    return (
        <div className="!container !space-y-16 !py-24 md:!py-32 !mx-auto max-md:!p-5 !mb-25">
            <div className="!mx-auto !max-w-[58rem] !text-center !flex !justify-center !flex-col">
                <h2 className="!font-bold !text-3xl !leading-[1.1] sm:!text-3xl md:!text-5xl">Nuestras soluciones</h2>
                <p className="mt-4 !text-gray-600 dark:!text-gray-400 sm:text-lg !text-lg">
                    Descubre como Ancom puede transformar tu negocio con nuestro desarollo e innovacion
                </p>
            </div>
            <div className="!mx-auto !grid !max-w-5xl !grid-cols-1 !gap-8 md:!grid-cols-2">
                {features.map((feature) => (
                    <motion.div
                      initial={{ opacity: 0, y: 50 }} // Empieza invisible y desplazado hacia abajo
                      whileInView={{ opacity: 1, y: 0 }} // Se hace visible cuando entra en la pantalla
                      transition={{ duration: 0.8, ease: "easeOut" }} // Duración y suavidad de la animación
                      viewport={{ once: true }} // Solo se ejecuta una vez
                      key={feature.name} 
                      className="bg-white/80 dark:!bg-black/60 !relative !overflow-hidden !rounded-lg !border !bg-background !p-8 !border-gray-500 dark:!border-gray-800 "
                    >
                        <div className="!flex !items-center !gap-4 ">
                            <feature.icon className="h-8 w-8" />
                            <h3 className="!font-bold">{feature.name}</h3>
                        </div>
                        <p className="!text-gray-700 dark:!text-gray-400 !mt-2">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}