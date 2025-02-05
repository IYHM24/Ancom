import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components/shared/navbar/navbar'
import { Whatsapp } from '@/components/shared/whatsapp/whatsapp'
import { Footer } from '@/components/shared/footer/footer'

import MouseMoveEffect from '@/components/shared/mouse effect/mouseMoveeffect'

export const Layout = () => {
  return (
    <div className='!relative !z-10 w-full'>
      <MouseMoveEffect />
      <Navbar />
      <Outlet />
      <Footer />
      <Whatsapp />
    </div>
  )
}
