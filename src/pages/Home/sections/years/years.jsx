import React, { useEffect, useState } from 'react'
import { Counter } from '@/components/shared/counter/counter'

export const Years = () => {

    const [anosExperiencia, setAnosExperiencia] = useState(0);

    useEffect(() => {
        const fechaActual = new Date();
        const fechaInicio = new Date(2022, 1, 0);
        // Diferencia en milisegundos
        const diferenciaMs = fechaActual - fechaInicio;
        // Convertir milisegundos a años (1 año = 1000 * 60 * 60 * 24 * 365.25 ms)
        const msPorAnio = 1000 * 60 * 60 * 24 * 365.25;
        const diferenciaAnios = diferenciaMs / msPorAnio;
        // Redondear hacia abajo al número entero más cercano
        const aniosRedondeados = Math.floor(diferenciaAnios);
        setAnosExperiencia(aniosRedondeados);
    }, [])
    

    return (
        <div className='!mb-25'>
            <Counter finalNumber={anosExperiencia} texto={"Años de experiencia"} simbolo={"+"}/>
        </div>
    )
}
