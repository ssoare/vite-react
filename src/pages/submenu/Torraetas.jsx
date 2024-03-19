const torraeta = {
    'Jamón serrano a la plancha y tomate': { id: 23 , description: '', price: 6.95 , image: '' },
    'Sobrasada y queso': { id: 24 , description: '', price: 6.95 , image: '' },
    'Anchoas, ajo y pimentón': { id: 25 , description: '', price: 6.95 , image: '' },
    'Queso fresco y salmón': { id: 26 , description: '', price: 6.95 , image: '' },
}

function Torraetas() {
    return(
        <>
            {Object.entries(torraeta).map(([name, details]) => (
                <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between 
                hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                    <img className="w-full h-120"
                    src="src/images/burger.png" alt="imagen" />
                    <div className="flex justify-between items-center flex-grow">
                        <div className='basis-5/6'>
                            <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                            <p className="italic text-gray-600">{details.description}</p>
                        </div>
                        <p>{details.price.toFixed(2)}€</p>
                    </div>
                    {/* Add image rendering here if available */}
                </article>   
            ))}
        </>
    )
}

export default Torraetas