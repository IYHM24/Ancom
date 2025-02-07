import React from 'react'


export const ParrafosPortada = ({children , className}) => {
  return (
    <div className={ `mt-4 !text-gray-600 dark:!text-gray-400 sm:!text-lg !text-lg ${className}`}>
      {children}
    </div>
  )
}