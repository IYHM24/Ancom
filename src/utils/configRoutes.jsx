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
        path:{
            path:"/nosotros",
            component: NosotrosComponente
        }
    },
    {
        nombre: "Planes",
        path:{
            path:"/planes",
            component: PlanesComponente
        }
    },
    {
        nombre: "Proyectos",
        path:{
            path:"/proyectos",
            component: ProyectosComponente
        }
    },
    {
        nombre: "Canal",
        path:{
            path:"/canal",
            component: ProfeAndresComponente
        }
    }
]

