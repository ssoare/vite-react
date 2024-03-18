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
                <article className="flex mb-8 justify-between items-center">
                    <div className="basis-4/5">
                        <h3 className="text-xl font-semibold">{details.id}. {name}</h3>
                        <p className="italic text-gray-700">{details.description}</p>
                    </div>
                    <p>{details.price.toFixed(2)}€</p>
                    {/* Add image rendering here if available */}
                </article>   
            ))}
        </>
    )
}

export default Hamburguesas;