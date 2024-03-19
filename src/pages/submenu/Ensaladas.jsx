

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
                <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between text-pretty 
                hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all">
                    <img className="w-full"
                    src="src/images/burger.png" alt="imagen" />
                    <div className="flex justify-between items-center flex-grow">
                        <div className='basis-4/5'>
                            <h3 className="text-lg font-semibold">{details.id}. {name}</h3>
                            <p className="italic text-gray-500">{details.description}</p>
                        </div>
                        <p>{details.price.toFixed(2)}€</p>
                    </div>
                </article>   
            ))}
        </>
    )
}

export default Ensaladas