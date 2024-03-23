    import Tapas from "./submenu/Tapas"
    import Infantil from "./submenu/Infantil"
    import Sandwiches from "./submenu/Sandwiches"
    import Ensaladas from "./submenu/Ensaladas"
    import Bocadillos from "./submenu/Bocadillos"
    import ComidaVegetariana from "./submenu/ComidaVegetariana"
    import Hamburguesas from "./submenu/Hamburguesas"
    import PlatosCombinados from "./submenu/PlatosCombinados"
    import Torraetas from "./submenu/Torraetas"
    import SubmenuItemActive from '../components/SubmenuItemActive'
    import SubmenuItem from "../components/SubMenuItem"
    import { useState } from "react"

    const menuItems = [
        'Tapas',
        'Ensaladas',
        'Torraetas',
        'Sandwiches',
        'Hamburguesas',
        'Bocadillos',
        'Platos Combinados',
        'Infantil',
        'Comida Vegetariana',
    ]

    export default function Carta() {
        const [menu, setMenu] = useState('Tapas');
        return(
            <>
                <section id='submenu' 
                        className="mt-20 mx-4 whitespace-nowrap overflow-auto flex lg:justify-center py-1">
                    {menuItems.map(item => (
                    menu === item
                    ? <SubmenuItemActive key={item} name={item} click={() => setMenu(item)} /> 
                    : <SubmenuItem key={item} name={item} click={() => setMenu(item)} />
            ))}
                </section>

                <section className="flex flex-wrap justify-center gap-4 mt-8 ">
                    { menu === 'Tapas' && <Tapas /> }
                    { menu === 'Torraetas' && <Torraetas /> }
                    { menu === 'Ensaladas' && <Ensaladas /> }
                    { menu === 'Sandwiches' && <Sandwiches /> }
                    { menu === 'Hamburguesas' && <Hamburguesas /> }
                    { menu === 'Bocadillos' && <Bocadillos /> }
                    { menu === 'Platos Combinados' && <PlatosCombinados /> }
                    { menu === 'Infantil' && <Infantil /> }
                    { menu === 'Comida Vegetariana' && <ComidaVegetariana /> }
                </section>
            </>
        );
    }
