import {useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { mapRoutes } from '@/utils/configRoutes.jsx';
import { Layout } from '@/container/layout';
import { Home } from '@/pages/Home/home';
import { useColorMode } from '@/components/ui/color-mode';

function App() {

  const { colorMode } = useColorMode();

  useEffect(() => {

    document.getElementsByTagName("body")[0].classList.add("custom-scrollbar");

    if (colorMode === "dark") {
      document.documentElement.classList.add("dark");
      document.getElementsByTagName("body")[0].classList.add("bg-background-dark");
      document.getElementsByTagName("body")[0].classList.remove("bg-background-light");
    } else {
      document.documentElement.classList.remove("dark");
      document.getElementsByTagName("body")[0].classList.add("bg-background-light");
      document.getElementsByTagName("body")[0].classList.remove("bg-background-dark");
    }

  }, [colorMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />}/>
          {mapRoutes.map((ruta, index) => (
            <Route key={"ruta"+index} path={ruta.path.path} element={ruta.path.component()}/>
          ))}
          <Route path='*' element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
