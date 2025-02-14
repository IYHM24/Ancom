import { useState } from 'react'
import { FaReact } from 'react-icons/fa';
import { FaAngular } from 'react-icons/fa';
import { FaNodeJs } from 'react-icons/fa';
import { SiSpringboot } from "react-icons/si";
import { SiDotnet } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { DiDjango } from "react-icons/di";
import { IoIosMore } from "react-icons/io";
import { Tooltip } from "@/components/ui/tooltip"
import {Link} from "react-router-dom"


export const Especialidades = () => {

    const handleClick = () => {
        window.scrollTo({ top: 0 });
      };

    const cubes = [
        {
            name: "react",
            icon: FaReact,
            lenguaje: ["Javascript", "TypeScript"]
        },
        {
            name: "Angular",
            icon: FaAngular,
            lenguaje: ["Javascript", "TypeScript"]
        },
        {
            name: "Node JS",
            icon: FaNodeJs,
            lenguaje: ["Javascript", "TypeScript"]
        },
        {
            name: "Spring Boot",
            icon: SiSpringboot,
            lenguaje: ["Java"]
        },
        {
            name: ".Net core",
            icon: SiDotnet,
            lenguaje: ["CSharp"]
        },
        {
            name: "Azure",
            icon: VscAzure,
            lenguaje: ["Cloud"]
        },
        {
            name: "Django",
            icon: DiDjango,
            lenguaje: ["Python"]
        },

    ];
    const [hovered, setHovered] = useState(null);

    return (
        <div className='!mb-25 max-md:!p-5'>
            <div className="!container !space-y-16 py-24 md:!py-32 !mx-auto">
                <div className="!mx-auto !max-w-[58rem] !text-center !flex !justify-center !flex-col">
                    <h2 className="!font-bold !text-3xl !leading-[1.1] sm:!text-sm md:!text-5xl">Trabajamos con una gran variedad de tecnologias</h2>
                    <p className="mt-4 !text-gray-600 dark:!text-gray-400 sm:text-lg !text-lg">
                        Proveemos desarollo de calidad con la mayoria de tecnologias del mercado al igual nos especializamos en las siguientes tecnologias
                    </p>
                </div>
                <div className="flex justify-center items-center flex-wrap">
                    {cubes.map((cube, index) => (
                        <Tooltip key={"tooltip-" + index} content={cube.name}>
                            <div
                                className={`!bg-gray-100/50 dark:!bg-gray-800/50 !text-5xl flex justify-center items-center !border !border-gray-400 dark:!border-gray-800 w-40 h-40 transition-all duration-1000 transform ${hovered === index ? "md:translate-y-[-40px]" : ""
                                    }`}
                                onMouseEnter={() => setHovered(index)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                < cube.icon />
                            </div>
                        </Tooltip>
                    ))}
                    <Tooltip key={"tooltip-mas"} content={"ver mas"}>
                            <Link
                                to={"/nosotros#especialidades"}
                                className={`!bg-gray-100/50 dark:!bg-gray-800/50 !text-5xl flex justify-center items-center !border !border-gray-400 dark:!border-gray-800 w-40 h-40 bg-trasnparent transition-all duration-1000 transform ${hovered === "m" ? "md:translate-y-[-40px]" : ""
                                    }`}
                                onMouseEnter={() => setHovered("m")}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <IoIosMore />
                            </Link>
                    </Tooltip>
                </div>
            </div>
        </div>
    )
}

