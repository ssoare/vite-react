const comidaVegetarianaPlatos = {
    'Longaniza vegetal, tortilla francesa y patatas': { id: 110 , description: '', price: 10.95 , image: '' },
    'Hamburguesa vegetal y huevo': { id: 111 , description: '', price: 10.50 , image: '' },
    'Seitán a la plancha y huevo': { id: 112 , description: '', price: 10.50 , image: '' },
    'Seitán a la plancha con salsa pimienta': { id: 113 , description: '', price: 10.50 , image: '' },
    'Seitán, queso, champiñones y cebolla frita': { id: 114 , description: '', price: 11.95 , image: '' },
    'Escalopines de seitán': { id: 115 , description: '', price: 10.95 , image: '' },
    'Escalope de soja': { id: 116 , description: '', price: 10.50 , image: '' },
    'Escalope de tofu': { id: 117 , description: '', price: 10.50 , image: '' },
    'Tofú a la plancha con salsa pimienta': { id: 118 , description: '', price: 10.50 , image: '' },
    'Parrillada de verdura': { id: 119 , description: 'Longaniza vegetal, seitán, tofú', price: 11.95 , image: '' }

}

const comidaVegetarianaBocadillos = {
    'Seitán, queso y huevo': { id: 100 , description: '', price: 7.50 , image: '' },
    'Seitán, queso, lechuga, tomate y cebolla frita': { id: 101 , description: '', price: 7.75 , image: '' },
    'Seitán, queso, huevo, lechuga, tomate y cebolla frita': { id: 102 , description: '', price: 7.85 , image: '' },
    'Seitán, tomate, queso y pimiento frito': { id: 103 , description: '', price: 7.85 , image: '' },
    'Longaniza vegetal, tomate y pimiento frito': { id: 104 , description: '', price: 8.50 , image: '' },
    'Tofú, huevo y tomate': { id: 105 , description: '', price: 7.25 , image: '' },
    'Tofú, huevo, lechuga, tomate y cebolla frita': { id: 106 , description: '', price: 7.25 , image: '' },
    'Tofú, queso, huevo, lechuga y pimiento frito': { id: 107 , description: '', price: 7.25 , image: '' },
    'Tortilla francesa, tomate y queso': { id: 108 , description: '', price: 6.50 , image: '' },
    'Tortilla de patatas con tomate o ajoaceite': { id: 109 , description: '', price: 6.35 , image: '' }
}

const comidaVegetarianaHamburguesas = {
    'Hamburguesa vegetal, queso y huevo': { id: 96 , description: '', price: 7.50 , image: '' },
    'Hamburguesa vegetal, salsa barbacoa, lechuga, queso y huevo': { id: 97 , description: '', price: 7.60 , image: '' },
    'Hamburguesa vegetal, queso, lechuga, tomate y cebolla frita': { id: 98 , description: '', price: 7.75 , image: '' },
    'Hamburguesa vegetal, salsa roquefort, lechuga y huevo': { id: 99 , description: '', price: 7.85 , image: '' }
}

const comidaVegetarianaEnsaladas = {
    'Ensalada de la casa' : { id: 93 , description: 'Lechuga variada, tomate, zanahoria, remolacha, maíz y huevo', price: 11.95 , image: '' },
    'Ensalada de queso de cabra' : { id: 94 , description: 'Lechuga variada, queso de cabra, pasas, mermelada de tomate y vinagre balsámico', price: 11.95 , image: '' },
    'Ensalada el rincón' : { id: 95 , description: 'Lechuga variada, tomate, pepino, queso feta y aceitunas', price: 10.50 , image: '' }
}

const comidaVegetarianaTapas = {
    'Patatas con queso y salsa césar' : { id: 86 , description: '', price: 8.50 , image: '' },
    'Croquetas boletus y setas' : { id: 87 , description: '(6 ud.)', price: 7.55 , image: '' },
    'Croquetas de espinacas con queso azul' : { id: 88 , description: '(8 ud.)', price: 7.55 , image: '' },
    'Champinones con salsa verde' : { id: 89 , description: '', price: 6.95 , image: '' },
    'Ensaladilla rusa' : { id: 90 , description: '', price: 6.95 , image: '' },
    'Parrillada de verdura' : { id: 91 , description: '', price: 6.80 , image: '' },
    'Tempura de verdura con salsa de soja' : { id: 92 , description: '', price: 6.85 , image: '' }
}

function ComidaVegetariana() {
    return(
        <>
            <div className='flex-col w-screen'>
                <h1 className='text-center text-2xl font-semibold'>Tapas</h1>
                <hr className='my-4 w-6/12 mx-auto' />
            </div>
            {Object.entries(comidaVegetarianaTapas).map(([name, details]) => (
                    <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                    hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                        <img className="w-full"
                        src="src/images/burger.png" alt="imagen" />
                        <div className="flex justify-between items-center flex-grow">
                            <div className='basis-5/6'>
                                <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                                <p className="italic text-gray-600">{details.description}</p>
                            </div>
                            <p>{details.price.toFixed(2)}€</p>
                        </div>
                    </article>   
                ))}
            <div className='flex-col w-screen'>
                <h1 className='text-center text-2xl font-semibold'>Ensaladas</h1>
                <hr className='my-4 w-6/12 mx-auto' />
            </div>
            {Object.entries(comidaVegetarianaEnsaladas).map(([name, details]) => (
                    <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                    hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                        <img className="w-full"
                        src="src/images/burger.png" alt="imagen" />
                        <div className="flex justify-between items-center flex-grow">
                            <div className='basis-5/6'>
                                <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                                <p className="italic text-gray-600">{details.description}</p>
                            </div>
                            <p>{details.price.toFixed(2)}€</p>
                        </div>
                    </article>   
                ))}
            <div className='flex-col w-screen'>
                <h1 className='text-center text-2xl font-semibold'>Hamburguesas</h1>
                <hr className='my-4 w-6/12 mx-auto' />
            </div>
            {Object.entries(comidaVegetarianaHamburguesas).map(([name, details]) => (
                    <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                    hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                        <img className="w-full"
                        src="src/images/burger.png" alt="imagen" />
                        <div className="flex justify-between items-center flex-grow">
                            <div className='basis-5/6'>
                                <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                                <p className="italic text-gray-600">{details.description}</p>
                            </div>
                            <p>{details.price.toFixed(2)}€</p>
                        </div>
                    </article>   
                ))}
            <div className='flex-col w-screen'>
                <h1 className='text-center text-2xl font-semibold'>Bocadillos</h1>
                <hr className='my-4 w-6/12 mx-auto' />
            </div>
            {Object.entries(comidaVegetarianaBocadillos).map(([name, details]) => (
                    <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                    hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                        <img className="w-full"
                        src="src/images/burger.png" alt="imagen" />
                        <div className="flex justify-between items-center flex-grow">
                            <div className='basis-5/6'>
                                <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                                <p className="italic text-gray-600">{details.description}</p>
                            </div>
                            <p>{details.price.toFixed(2)}€</p>
                        </div>
                    </article>   
                ))}
            <div className='flex-col w-screen'>
                <h1 className='text-center text-2xl font-semibold'>Platos</h1>
                <hr className='my-4 w-6/12 mx-auto' />
            </div>
            {Object.entries(comidaVegetarianaPlatos).map(([name, details]) => (
                    <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                    hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                        <img className="w-full"
                        src="src/images/burger.png" alt="imagen" />
                        <div className="flex justify-between items-center flex-grow">
                            <div className='basis-5/6'>
                                <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                                <p className="italic text-gray-600">{details.description}</p>
                            </div>
                            <p>{details.price.toFixed(2)}€</p>
                        </div>
                    </article>   
                ))}
        </>
    )
}

export default ComidaVegetariana