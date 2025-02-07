import React from 'react'

export const Parrafo = ({children, className}) => {
  return (
    <p className={`!text-gray-700 dark:!text-gray-300 ${className}`}>
      {children}
    </p>
  )
}