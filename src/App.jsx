import Inicio from "./pages/inicio/Inicio"
import Sobre from "./pages/sobre/Sobre"
import Projetos from "./pages/projetos/Projetos"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from "./components/Header/Header"
import { GlobalStyled } from "./components/Header/styled"

export default function App() {
  return (
    <>
    <GlobalStyled/>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>}/>
      <Route path="/projetos" element={<Projetos/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}
