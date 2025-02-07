import React from 'react'

export const Subtitulo = ( {children, className} ) => {
  return (
    <h3 className={`text-xl !font-semibold !text-gray-700 dark:!text-gray-300 mb-3 ${className} `}>
        {children}
    </h3>
  )
}