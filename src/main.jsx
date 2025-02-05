import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from './components/ui/provider'
import App from '@/routes/App.jsx'
import './style/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider defaultTheme={"dark"}>
     <App />
     </Provider>
  </StrictMode>,
)
