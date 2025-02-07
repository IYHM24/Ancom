import React from 'react'
import { Titulo } from '../texto/titulos'
import { ParrafosPortada } from '../texto/parrafosPortada'

export const TituloSeccion = ({titulo, parrafo, className}) => {
    return (
        <div className={`!max-w-4xl !mx-auto !text-center !mb-16 ${className}`}>
            <Titulo>
                {titulo}
            </Titulo>
            <ParrafosPortada>
                {parrafo}
            </ParrafosPortada>
        </div>
    )
}

