import React from 'react'
import { Mantenimiento } from '@/components/shared/mantenimiento/mantenimiento'
import { Portada } from '@/components/shared/portadaPaginas/portada'

export const Nosotros = () => {
  return (
    <div className=''>
      {/* <Portada Pagina={"Nosotros"} /> */}
      <Mantenimiento pagina={"nosotros"}/>
    </div>
  )
}

