import '../css/hamburger.css';
import { Link } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [menu, setMenu] = useState();
    const toggleMenu = () => { setMenu(!menu); };

    return (
        <header>
            <nav className="fixed top-0 flex items-center justify-between w-full h-12 px-4">
                <Link to="/">
                    <h1 className='flex flex-col italic font-semibold'>El Rincón <span className='text-orange-500'>del Bocata</span></h1>
                </Link>
                <ul className={`absolute left-0 top-0 flex flex-col items-center justify-center w-screen gap-4 text-3xl text-orange-500 transition bg-zinc-900 menu ${menu ? '' : 'translate-x-full'} h-svh`}>
                    <li className='px-4 py-2'><Link to="/" onClick={toggleMenu}>Inicio</Link> </li>
                    <li className='px-4 py-2'><Link to="/carta" onClick={toggleMenu}>Carta</Link> </li>
                    <li className='px-4 py-2'><Link to="/contacto" onClick={toggleMenu}>Contacto</Link> </li>
                </ul>
                <div onClick={toggleMenu} className="cursor-pointer hb">
                    <div className={`transition-all duration-300 hb1 ${menu ? 'active' : ''}`}></div>
                    <div className={`transition-all duration-300 hb2 ${menu ? 'active' : ''}`}></div>
                    <div className={`transition-all duration-300 hb3 ${menu ? 'active' : ''}`}></div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
