import React from 'react'

export const Parrafo = ({children, className}) => {
  return (
    <p className={`!text-gray-600 dark:!text-gray-400 ${className}`}>
      {children}
    </p>
  )
}