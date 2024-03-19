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

export default Sandwiches