import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Contacto from './pages/Contacto'
import Header from './components/Header'
import Menu from './pages/Menu'
import './css/index.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path='/menu' element={<Menu />} />
        </Routes>
      </main>
    </>
  )
}

export default App
