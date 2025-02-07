import React from 'react'

export const Titulo = ({children, className}) => {
  return (
    <h2 className={`!font-bold !text-3xl !leading-[1.1] sm:!text-sm md:!text-5xl ${className}`}>
      {children}
    </h2>
  )
}