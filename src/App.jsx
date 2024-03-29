import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Menu from './pages/Menu'
import Carta from './pages/Carta'
import Contacto from './pages/Contacto'
import Header from './components/Header'
import './css/index.css'

function App() {

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  )
}

export default App
