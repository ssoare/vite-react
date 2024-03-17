import '../css/cartaMenu.css'
import { useState } from 'react'
import Tapas from './Tapas'
import Ensaladas from './Ensaladas'
import Torraetas from './Torraetas'
import Sandwiches from './Sandwiches'
import Bocadillos from './Bocadillos'
import Hamburguesas from './Hamburguesas'
import PlatosCombinados from './PlatosCombinados'
import ComidaVegetariana from './ComidaVegetariana'
function CartaMenu() {
    const [submenu, setSubmenu] = useState('tapas')
    return(
        <>
            <nav>
                <ul className="flex gap-4 px-4 overflow-auto whitespace-nowrap">
                    <li onClick={() => setSubmenu('tapas')}
                        className={
                            submenu === 'tapas' 
                            ? 'px-4 py-2 border-2 rounded-full cursor-pointer bg-teal-300' 
                            : 'px-4 py-2 border-2 rounded-full cursor-pointer'
                        }>Tapas</li>
                    <li onClick={() => setSubmenu('ensaladas')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Ensaladas</li>
                    <li onClick={() => setSubmenu('torraetas')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Torraetas</li>
                    <li onClick={() => setSubmenu('sandwiches')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Sandwiches</li>
                    <li onClick={() => setSubmenu('bocadillos')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer ">Bocadillos</li>
                    <li onClick={() => setSubmenu('hamburguesas')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Hamburguesas</li>
                    <li onClick={() => setSubmenu('platos combinados')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Platos Combinados</li>
                    <li onClick={() => setSubmenu('comida vegetariana')}
                        className="px-4 py-2 border-2 rounded-full cursor-pointer">Comida Vegetariana</li>
                </ul>
            </nav>
            
            <section>
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