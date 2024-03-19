import '../css/cartaMenu.css'
import { useState } from 'react'
import Tapas from '../pages/submenu/Tapas'
import Ensaladas from '../pages/submenu/Ensaladas'
import Torraetas from '../pages/submenu/Torraetas'
import Sandwiches from '../pages/submenu/Sandwiches'
import Bocadillos from '../pages/submenu/Bocadillos'
import Hamburguesas from '../pages/submenu/Hamburguesas'
import PlatosCombinados from '../pages/submenu/PlatosCombinados'
import ComidaVegetariana from '../pages/submenu/ComidaVegetariana'
function CartaMenu() {
    const [submenu, setSubmenu] = useState('tapas')
    return(
        <>
            <nav>
                <ul className="flex gap-2 px-4 overflow-auto whitespace-nowrap lg:justify-center">
                    <li onClick={() => setSubmenu('tapas')}
                        className={
                            submenu === 'tapas' 
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all' 
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Tapas</li>
                    <li onClick={() => setSubmenu('ensaladas')}
                        className={
                            submenu === 'ensaladas' 
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all' 
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'}>Ensaladas</li>
                    <li onClick={() => setSubmenu('torraetas')}
                        className={ 
                            submenu === 'torraetas' 
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all' 
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'}>Torraetas</li>
                    <li onClick={() => setSubmenu('sandwiches')}
                        className={
                            submenu === 'sandwiches'
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all'
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Sandwiches</li>
                    <li onClick={() => setSubmenu('bocadillos')}
                        className={
                            submenu === 'bocadillos'
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all'
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Bocadillos</li>
                    <li onClick={() => setSubmenu('hamburguesas')}
                        className={
                            submenu === 'hamburguesas'
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all'
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Hamburguesas</li>
                    <li onClick={() => setSubmenu('platos combinados')}
                        className={
                            submenu === 'platos combinados'
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all'
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Platos Combinados</li>
                    <li onClick={() => setSubmenu('comida vegetariana')}
                        className={
                            submenu === 'comida vegetariana'
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-orange-500 text-white transition-all'
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Comida Vegetariana</li>
                </ul>
            </nav>
                <section className='flex gap-4 p-4 mt-8 justify-center flex-wrap'>
                    { submenu === 'tapas' && <Tapas />}
                    { submenu === 'ensaladas' && <Ensaladas />}
                    { submenu === 'torraetas' && <Torraetas />}
                    { submenu === 'sandwiches' && <Sandwiches />}
                    { submenu === 'bocadillos' && <Bocadillos />}
                    { submenu === 'hamburguesas' && <Hamburguesas />}
                    { submenu === 'platos combinados' && <PlatosCombinados />}
                    { submenu === 'comida vegetariana' && <ComidaVegetariana />}
                </section>
        </>
    )
}

export default CartaMenu