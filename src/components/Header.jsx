import '../css/index.css'
import { Link } from "react-router-dom"
import { useState } from 'react'

function Header() {
    const [menu, setMenu] = useState()
    const toggleMenu = () => setMenu(!menu)

    return (
        <header className='fixed top-0 flex justify-center bg-white/90 h-12 w-screen'>
            <nav className="fixed top-0 flex items-center justify-between w-full h-12 px-4 lg:max-w-screen-lg">
                <Link to="/">
                    <h1 className='flex flex-col italic font-semibold'>El Rincón <span className='text-orange-500'>del Bocata</span></h1>
                </Link>
                <ul className={`menu absolute inset-0 flex flex-col items-center justify-center w-screen gap-4 text-3xl text-orange-500 transition bg-zinc-900 
                                ${menu ? '' : 'translate-x-full'} h-svh
                                lg:translate-x-0 lg:size-auto lg:static lg:flex-row lg:bg-transparent lg:text-black lg:text-2xl`}>
                    <li className='px-4 py-2'>
                        <Link className='after:w-0 after:bg-black after:h-px after:block hover:after:w-full after:transition-all' 
                                to="" onClick={toggleMenu}>Home
                        </Link> 
                    </li>
                    <li className='px-4 py-2'>
                        <Link className='after:w-0 after:bg-black after:h-px after:block hover:after:w-full after:transition-all' 
                                to="carta" onClick={toggleMenu}>Carta
                        </Link> 
                    </li>
                    <li className='px-4 py-2'>
                        <Link className='after:w-0 after:bg-black after:h-px after:block hover:after:w-full after:transition-all' 
                                to="menu" onClick={toggleMenu}>Menu
                        </Link> 
                    </li>
                    <li className='px-4 py-2'>
                        <Link className='after:w-0 after:bg-black after:h-px after:block hover:after:w-full after:transition-all' 
                                to="contacto" onClick={toggleMenu}>Contacto
                        </Link> 
                    </li>
                </ul>
                <div onClick={toggleMenu} className="cursor-pointer hb lg:hidden">
                    <div className={`transition-all duration-300 hb1 ${menu ? 'active' : ''}`}></div>
                    <div className={`transition-all duration-300 hb2 ${menu ? 'active' : ''}`}></div>
                    <div className={`transition-all duration-300 hb3 ${menu ? 'active' : ''}`}></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
