import React from 'react'
import mantenimientoIMG from '@/assets/portadas/mantenimiento2.png'

export const Mantenimiento = ({pagina}) => {
    return (
        <div className='!mx-auto !container h-min-screen !p-40 flex flex-col gap-5'>
            <div className="!mx-auto !text-center !flex !justify-center !flex-col">
                <h2 className="!font-bold !text-5xl !leading-[1.1] sm:!text-3xl md:!text-5xl">¡Ups! Mantenimiento</h2>
                <p className="mt-4 !text-gray-600 dark:!text-gray-400 sm:text-lg !text-lg">
                    Nuestro equipo porfesional esta construyendo este sitio 
                </p>
            </div>
            <div className='flex justify-center'>
                <img width={500} src={mantenimientoIMG} alt="" />
            </div>
            <div className='flex justify-center'>
                <h3>{pagina}</h3>
            </div>
        </div>
    )
}
