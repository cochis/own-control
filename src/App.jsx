import React from 'react'
//Components
import Navbar from './components/Navbar'
import Footer from './components/Footer'
//pages
import Undefined from './pages/Undefined'
import Contacto from './pages/Contacto'
import Home from './pages/Home'
import Plataforma from './pages/Plataforma'
import Productos from './pages/Productos'
import QuienesSomos from './pages/QuienesSomos'
import SaludDigital from './pages/SaludDigital'

//router
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes >
        <Route path='/' element={<Home />} />
        <Route path='/salud-digital' element={<SaludDigital />} />
        <Route path='/productos' element={<Productos />} />
        <Route path='/quienes-somos' element={<QuienesSomos />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/plataforma' element={<Plataforma />} />
        <Route path='*' element={<Undefined />} />
      </Routes>

      <Footer />
    </BrowserRouter>

  );
}

export default App;
