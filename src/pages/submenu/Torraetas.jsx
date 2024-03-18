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

export default Torraetas