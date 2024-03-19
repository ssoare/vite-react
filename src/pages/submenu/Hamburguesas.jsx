const hamburguesa = {
    'Hamburguesa, queso y huevo': { id: 31 , description: '', price: 6.90 , image: '' },
    'Hamburguesa, queso, lechuga y tomate': { id: 32 , description: '', price: 7.00 , image: '' },
    'Hamburguesa especial': { id: 33 , description: 'Lechuga, queso, bacón, tomate, cebolla y huevo', price: 7.50 , image: '' },
    'Hamburguesa roquefort': { id: 34 , description: 'Salsa roquefort, lechuga y bacón', price: 7.25 , image: '' },
}

function Hamburguesas() {
    return(
        <>
            {Object.entries(hamburguesa).map(([name, details]) => (
                <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between text-pretty
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

export default Hamburguesas;