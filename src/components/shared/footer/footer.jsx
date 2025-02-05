import React from 'react'
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { features } from '@/pages/Home/sections/nuestros servicios/nuestrosServicios'
import { mapRoutes } from '@/utils/configRoutes'


export const Footer = () => {
    return (
        <footer className="!border-t max-md:!p-5 !border-gray-500 dark:!border-gray-800">
            <div className="!mx-auto !container !flex !flex-col !gap-8 !py-8 md:!flex-row md:!py-12">
                <div className="!flex-1">
                    <h2 className="!font-bold">Ancom</h2>
                    <p className="!text-gray-700 dark:!text-gray-300 !text-sm text-muted-foreground">Soluciones pioneras para la era digital</p>
                </div>
                <div className="!grid !flex-1 !grid-cols-2 !gap-12 sm:!grid-cols-3">
                    <div className="!space-y-4">
                        <h3 className="!text-sm !font-medium">Soluciones</h3>
                        <ul className="!space-y-3 !text-sm">
                            {features.map((feature, indice) => (
                                <li key={"feature-key-"+indice}>
                                    <Link  href="/" className="text-muted-foreground !transition-colors hover:!text-primary">
                                        {feature.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="!space-y-4">
                        <h3 className="!text-sm !font-medium">Company</h3>
                        <ul className="!space-y-3 !text-sm">
                            {mapRoutes.map((ruta, indice) => (
                                <li key={"page-key-"+indice} >
                                    <Link to={ruta.path.path} className="text-muted-foreground !transition-colors hover:!text-primary">
                                       {ruta.nombre}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="!space-y-4">
                        <h3 className="!text-sm !font-medium">Connect</h3>
                        <div className="!flex !space-x-4">
                            <Link
                                href=""
                                className="text-muted-foreground !transition-colors hover:!text-primary"
                            >
                                {/* GitHub */}
                                <FaGithub />
                                <span className="sr-only">GitHub</span>
                            </Link>
                            <Link
                                href=""
                                className="text-muted-foreground !transition-colors hover:!text-primary"
                            >
                                {/* Youtube */}
                                <FaYoutube />
                                <span className="sr-only">Youtube</span>
                            </Link>
                            <Link
                                href=""
                                className="text-muted-foreground !transition-colors hover:!text-primary"
                            >
                                <FaLinkedin />
                                {/* LinkedIn */}
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="!mx-auto !container !border-t !py-6  !border-gray-500 dark:!border-gray-800">
                <p className="!text-gray-700 dark:!text-gray-300 !text-center !text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Ancom, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    )
}
