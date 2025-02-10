import React from 'react'
import { Mantenimiento } from '@/components/shared/mantenimiento/mantenimiento'
import { PreInicio } from './sections/inicio/preinicio'
import { TimelineSection } from './sections/timeline/timeLine'
import { CreatorProfile } from './sections/creador/creador'
import { Especialidades } from './sections/especialidades/Especialidades'

export const Nosotros = () => {
  return (
    <>
     <PreInicio />
     <TimelineSection />
     <CreatorProfile />
     <Especialidades />
     {/*  <Mantenimiento /> */}
    </>
  )
}

