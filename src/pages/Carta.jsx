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
                <section id='submenu' className="mt-20 mx-4 whitespace-nowrap overflow-auto">
                    <MenuItem name='Tapas' click={() => setMenu('Tapas')} />
                    <MenuItem name='Ensaladas' click={() => setMenu('Ensaladas')} />
                    <MenuItem name='Torraetas' click={() => setMenu('Torraetas')} />
                    <MenuItem name='Sandwiches' click={() => setMenu('Sandwiches')} />
                    <MenuItem name='Bocadillos' click={() => setMenu('Bocadillos')} />
                    <MenuItem name='Hamburguesas' click={() => setMenu('Hamburguesas')} />
                    <MenuItem name='Platos Combinados' click={() => setMenu('Platos Combinados')} />
                    <MenuItem name='Infantil' click={() => setMenu('Infantil')} />
                    <MenuItem name='Comida Vegetariana' click={() => setMenu('Comida Vegetariana')} />
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
