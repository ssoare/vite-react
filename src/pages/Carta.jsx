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
    import MenuItemActive from "../components/MenuItemActive"
    import { useState } from "react"

    const menuItems = [
        'Tapas',
        'Ensaladas',
        'Torraetas',
        'Sandwiches',
        'Bocadillos',
        'Comida Vegetariana',
        'Hamburguesas',
        'Platos Combinados'
    ]

    export default function Carta() {
        const [menu, setMenu] = useState('Tapas');
        return(
            <>
                <section id='submenu' 
                        className="mt-20 mx-4 whitespace-nowrap overflow-auto flex lg:justify-center">
                    {menuItems.map(item => (
                    menu === item
                    ? <MenuItemActive key={item} name={item} click={() => setMenu(item)} /> 
                    : <MenuItem key={item} name={item} click={() => setMenu(item)} />
            ))}
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
