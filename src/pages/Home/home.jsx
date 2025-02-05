import React from 'react'
import { Portada } from './sections/portada/portada'
import { NuestrosServicios } from './sections/nuestros servicios/nuestrosServicios'
import { Ready } from './sections/ready/ready'
import { Especialidades } from './sections/especialidades/especialidades'


export const Home = () => {
  return (
    <>
    <div className='!backdrop-blur'>
      <Portada />
      <NuestrosServicios />
      <Especialidades />
      <Ready />
    </div>
    </>
  )
}


