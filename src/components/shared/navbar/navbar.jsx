import React from 'react'
import { Button } from '@chakra-ui/react'
import { LuGithub } from 'react-icons/lu'
import { mapRoutes } from '@/utils/configRoutes'
import { Simbolo } from '../logo/simbolo'
import { Link } from 'react-router-dom';
import { useColorMode } from '@/components/ui/color-mode'
import { ColorModeButton } from '@/components/ui/color-mode'

export const Navbar = () => {

  const { colorMode } = useColorMode();

/*   const style = {
    backgroundColor: colorMode == "light"? "#ffffff66" : "#27272a87"
  }
 */
  return (
    <header className={` ${colorMode == "light"? "bg-navbar-light":"bg-navbar-dark" } shadow-sm !sticky !top-0 !z-50 !w-full !border-gray-200 dark:!border-gray-800 !bg-background/95 backdrop-blur !supports-[backdrop-filter]:bg-background/60`}>
      <div className='!container !mx-auto flex justify-between'>
        <div className='flex gap-5 '>
          <Link to="/" className='flex items-center'>
            <Simbolo stroke={"white"} fill={colorMode == "light" ? "black" : "white"} width={45}/>
            <h1 className='!font-bold !text-xl text-black dark:!text-white'> Ancom </h1>
          </Link>
          <div className='flex justify-center items-center gap-5'>
            {mapRoutes.map((item, indice) => (
              <Link className='!text-gray-700 dark:!text-gray-300 align-bottom w-max h-max !font-light' key={"item-nav-" + indice} to={item.path.path}> {item.nombre} </Link>
            ))}
          </div>
        </div>
        <div className='!py-2 flex gap-2 items-center'>
          <Link target="_blank" to={"https://github.com/IYHM24"}> <Button className='!bg-transparent dark:hover:!bg-gray-900 dark:!bg-opacity-50'> <LuGithub stroke={colorMode == 'light' ? 'black': 'white'}/> </Button> </Link>
          <Link target="_blank" to={"https://api.whatsapp.com/send?phone=3506930989"}><Button className='!font-bold !bg-black dark:!bg-white dark:!text-black'> Contactarnos </Button></Link>
          <ColorModeButton />
        </div>
      </div>
    </header>
  )
}



