//importacion componentes
import { ProfeAndres } from "@/pages/ProfeAndres/profeAndres";
import { Nosotros } from "@/pages/Nosotros/nosotros"; 
import { Planes } from "@/pages/Planes/planes";
import { Proyectos } from "@/pages/Proyectos/proyectos";

//importacion iconos


//instancias componentes
const NosotrosComponente = (props) => <Nosotros {...props}/>
const PlanesComponente = (props) => <Planes {...props}/>
const ProyectosComponente = (props) => <Proyectos {...props}/>
const ProfeAndresComponente = (props) => <ProfeAndres {...props} />

//Mapeo de rutas
export const mapRoutes = [
    {
        nombre: "Nosotros",
        accesibleSinRegistro: true,
        path:{
            path:"/nosotros",
            component: NosotrosComponente
        }
    },
    {
        nombre: "Servicios",
        accesibleSinRegistro: true,
        path:{
            path:"/servicios",
            component: PlanesComponente
        }
    }
    /* {
        nombre: "Proyectos",
        accesibleSinRegistro: true,
        path:{
            path:"/proyectos",
            component: ProyectosComponente
        }
    },
    {
        nombre: "Canal",
        accesibleSinRegistro: true,
        path:{
            path:"/canal",
            component: ProfeAndresComponente
        }
    } */
]

