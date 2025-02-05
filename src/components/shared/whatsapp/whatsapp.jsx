import { Button } from '@chakra-ui/react'
import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { useColorMode } from '@/components/ui/color-mode'
import {Link} from 'react-router-dom'

export const Whatsapp = () => {

    const { colorMode } = useColorMode();

    return (
        <Link target="_blank" to={"https://api.whatsapp.com/send?phone=3506930989"}><Button className=' !bg-green-500 dark:!bg-green-900 !fixed !z-50 bottom-4 !right-4 !shadow-lg !border-b !border-border/40 !bg-background/95 !backdrop-blur !supports-[backdrop-filter]:!bg-background/60'>
            <FaWhatsapp fill='white' />
        </Button></Link>
    )
}

