import React from 'react'

export const Section = ({children , className}) => {
  return (
    <section className={`relative min-h-screen flex !mt-5 max-md:!p-5 ${className}`}>
        {children}
    </section>
  )
}