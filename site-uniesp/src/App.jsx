import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Inicial from './pages/Inicial'
import Navbar from './components/CustomNavbar'
import Faculdade from './pages/Faculdade'
import DpoLgpd from './pages/DpoLgpd'
import Noticias from './pages/Noticias'
import VisualizaNoticia from './pages/VisualizaNoticia'


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Container className="my-4">
      <Routes>
        <Route path="/" element={<Inicial/>}/>
        <Route path="/a-faculdade" element={<Faculdade/>} />
        <Route path="/dpo-lgpd" element={<DpoLgpd/>}/>
        <Route path="/noticias" element={<Noticias/>}/>
        <Route path="/visualiza-noticia/:id" element={<VisualizaNoticia/>}/>

      </Routes>
    </Container>
    </BrowserRouter>
  )
}

export default App
