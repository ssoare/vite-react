const ensalada = {
    'Ensalada del rincón': { id: 18 , description: 'Lechuga variada, tomate, pepino, queso feta y aceitunas', price: 10.50 , image: '' },
    'Ensalada de la casa': { id: 19 , description: 'Lechuga variada, tomate, zanahoria, remolacha, atün, huevo y maíz', price: 11.95 , image: '' },
    'Ensalada de queso de cabra': { id: 20 , description: 'Lechuga variada, queso de cabra, pasas, mermelada de tomate y vinagre balsámico', price: 11.95 , image: '' },
    'Ensalada de marisco': { id: 21 , description: 'Lechuga variada, gambas, marisco, caviar y salsa rosa', price: 12.00 , image: '' },
    'Ensalada César': { id: 22 , description: 'Lechuga variada, pollo, queso y salsa César', price: 11.50 , image: '' },
}

function Ensaladas() {
    return(
        <>
            {Object.entries(ensalada).map(([name, details]) => (
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

export default Ensaladas