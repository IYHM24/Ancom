import React from 'react'

export const Subtitulo = ( {children, className} ) => {
  return (
    <h3 className={`text-xl !font-semibold mb-3 ${className} `}>
        {children}
    </h3>
  )
}