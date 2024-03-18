const sandwich = {
    'Sandiwch mixto': { id: 27 , description: 'Jamón york y queso', price: 4.75 , image: '' },
    'Sandwich de atún': { id: 28 , description: '', price: 5.95 , image: '' },
    'Sandwich especial': { id: 29 , description: 'Lechuga, tomate, jamón york y mayonesa', price: 7.50 , image: '' },
    'Sandwich César': { id: 30 , description: 'Lechuga, pollo, queso y salsa César', price: 6.25 , image: '' },
}

function Sandwiches() {
    return(
        <>
            {Object.entries(sandwich).map(([name, details]) => (
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

export default Sandwiches