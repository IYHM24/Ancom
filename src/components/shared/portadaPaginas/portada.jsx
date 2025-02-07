import React from 'react'


export const Portada = ({pagina, text, img}) => {

  const style = {
    backgroundImage: `url(${img})`, // Sin punto y coma
    backgroundSize: 'cover', // Asegura que la imagen cubra todo
    backgroundPosition: 'center', // Centra la imagen
  }
  
  return (
    <div className='w-full flex justify-center !p-20' style={style}>
      <div className='text-center'>
        <h2 className='!text-3xl !tracking-tight sm:!text-4xl md:!text-5xl lg:!text-6xl !font-bold'>{pagina}</h2>
        <p className=' !text-gray-600 dark:!text-gray-400'> {text} </p>
      </div>
    </div>
  )
}

