import Tapas from "./submenu/Tapas"
import Infantil from "./submenu/Infantil"
import Sandwiches from "./submenu/Sandwiches"
import Ensaladas from "./submenu/Ensaladas"
import Bocadillos from "./submenu/Bocadillos"
import ComidaVegetariana from "./submenu/ComidaVegetariana"
import Hamburguesas from "./submenu/Hamburguesas"
import PlatosCombinados from "./submenu/PlatosCombinados"
import Torraetas from "./submenu/Torraetas"
import MenuItem from "../components/MenuItem"
import { useState } from "react"

export default function Carta() {
    const [menu, setMenu] = useState('Tapas');

    return(
        <>
            <section className="mt-20 mx-4 whitespace-nowrap overflow-auto">
                <MenuItem name='Tapas' onClick={() => setMenu('Tapas')} />
                <MenuItem name='Ensaladas' onClick={() => setMenu('Ensaladas')} />
                <MenuItem name='Torraetas' onClick={() => setMenu('Torraetas')} />
                <MenuItem name='Sandwiches' onClick={() => setMenu('Sandwiches')} />
                <MenuItem name='Bocadillos' onClick={() => setMenu('Bocadillos')} />
                <MenuItem name='Hamburguesas' onClick={() => setMenu('Hamburguesas')} />
                <MenuItem name='Platos Combinados' onClick={() => setMenu('Platos Combinados')} />
                <MenuItem name='Infantil' onClick={() => setMenu('Infantil')} />
                <MenuItem name='Comida Vegetariana' onClick={() => setMenu('Comida Vegetariana')} />
            </section>

            <section className="flex flex-wrap justify-center gap-4 mt-8">
                { menu === 'Tapas' && <Tapas /> }
                { menu === 'Infantil' && <Infantil /> }
                { menu === 'Ensaladas' && <Ensaladas /> }
                { menu === 'Sandwiches' && <Sandwiches /> }
                { menu === 'Bocadillos' && <Bocadillos /> }
                { menu === 'Comida Vegetariana' && <ComidaVegetariana /> }
                { menu === 'Hamburguesas' && <Hamburguesas /> }
                { menu === 'Platos Combinados' && <PlatosCombinados /> }
                { menu === 'Torraetas' && <Torraetas /> }
            </section>
        </>
    );
}
