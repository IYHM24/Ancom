import React, {useState} from 'react'
import { Button } from '@chakra-ui/react'
import { LuGithub } from 'react-icons/lu'
import { mapRoutes } from '@/utils/configRoutes'
import { Simbolo } from '../logo/simbolo'
import { Link } from 'react-router-dom';
import { useColorMode } from '@/components/ui/color-mode'
import { ColorModeButton } from '@/components/ui/color-mode'
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {

  const { colorMode } = useColorMode();
  const [abierto, setAbierto] = useState(false);


  /*   const style = {
      backgroundColor: colorMode == "light"? "#ffffff66" : "#27272a87"
    }
   */
  return (
    <header className={` ${colorMode == "light" ? abierto? "bg-white" :  "bg-navbar-light" : abierto? "bg-black" : "bg-navbar-dark" } shadow-sm !sticky !top-0 !z-50 !w-full !border-gray-200 dark:!border-gray-800 backdrop-blur`}>
      <div className='!container !mx-auto flex justify-between max-md:!p-5'>
        <div className='flex gap-5'>

          {/* logo */}
          <Link to="/" className='flex items-center'>
            <Simbolo stroke={"white"} fill={colorMode == "light" ? "black" : "white"} width={45} />
            <h1 className='!font-bold !text-xl text-black dark:!text-white'> Ancom </h1>
          </Link>

          {/* rutas - PC*/}
          <div className='flex justify-center items-center gap-5 max-md:hidden'>
            {mapRoutes.map((item, indice) => (
              <Link className='!text-gray-700 dark:!text-gray-300 align-bottom w-max h-max !font-light' key={"item-nav-" + indice} to={item.path.path}> {item.nombre} </Link>
            ))}
          </div>

        </div>
        <div className='!py-2 flex gap-2 items-center'>
          <Link target="_blank" to={"https://github.com/IYHM24"}> <Button className='max-md:!hidden !bg-transparent dark:hover:!bg-gray-900 dark:!bg-opacity-50'> <LuGithub stroke={colorMode == 'light' ? 'black' : 'white'} /> </Button> </Link>
          <Link target="_blank" to={"https://api.whatsapp.com/send?phone=3506930989"}><Button className='max-md:!hidden !font-bold !bg-black dark:!bg-white dark:!text-black'> Contactarnos </Button></Link>
          <ColorModeButton />
          <Button className='md:!hidden !bg-transparent' onClick={()=>{setAbierto(!abierto)}} >
            <GiHamburgerMenu className='text-black dark:!text-white' />
          </Button>
        </div>
      </div>
      {/* rutas - mobile */}
      <div className={` ${!abierto && "hidden"} md:hidden top-20 fixed z-10 w-full !backdrop-blur h-[200vh] ${colorMode == "light" ? "bg-navbar-light" : "bg-navbar-dark"}`}>
        <div className={` ${colorMode == "light" ? "bg-white" : "bg-black"} flex flex-col !p-2 gap-2`}>
          {mapRoutes.map((item, indice) => (
            <Link className={`!text-gray-700 dark:!text-gray-300 align-bottom w-max h-max !font-light !border ${colorMode == "light" ? "!border-black" : "!border-white "} rounded-lg !p-2 text-center min-w-full `} key={"item-nav-" + indice} to={item.path.path}> {item.nombre} </Link>
          ))}
        </div>
      </div>

    </header>
  )
}



