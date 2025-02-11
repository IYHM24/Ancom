import React from 'react'
import { ServicesSection } from './sections/services section/serviceSection'
import { ModalitiesSection } from './sections/Modalidades/modalidades'
import { BannerProfe } from './sections/BannerProfe/bannerProfe'

import { Mantenimiento } from '@/components/shared/mantenimiento/mantenimiento'

export const Planes = () => {
  return (
      <div>
        <ServicesSection />
        <ModalitiesSection />
        <BannerProfe />
      </div>
  )
}

