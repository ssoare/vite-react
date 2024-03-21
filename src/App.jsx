import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Carta from './pages/Carta'
import Contacto from './pages/Contacto'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main id='main' className='max-h-svh top-0 overflow-auto'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carta" element={<Carta />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
    </>
  )
}

export default App
