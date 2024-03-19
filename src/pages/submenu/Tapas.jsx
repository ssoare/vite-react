const tapa = {
    'Patatas fritas' : { id: 1 , description: 'hola', price: 6.25 , image: '' },
    'Patatas bravas' : { id: 2 , description: '', price: 7.50 , image: '' },
    'Patatas con queso, bacon y salsa césar' : { id: 3 , description: '', price: 8.95 , image: '' },
    'Ensaladilla rusa' : { id: 4 , description: '', price: 6.95 , image: '' },
    'Calamares' : { id: 5 , description: '', price: 10.50 , image: '' },
    'Gambas al ajillo' : { id: 6 , description: '', price: 11 , image: '' },
    'Sepia a la plancha con salsa verde' : { id: 7 , description: '', price: 11.25 , image: '' },
    'Sepia rebozada': { id: 8 , description: '', price: 11.25 , image: '' },
    'Puntillas': { id: 9 , description: '', price: 11.25 , image: '' },
    'Pulpito encebollado': { id: 10 , description: '', price: 10.95 , image: '' },
    'Boquerones en vinagre con salsa verde' : { id: 11 , description: '', price: 7.95 , image: '' },
    'Croquetas de pollo' : { id: 12 , description: '(8 ud.)', price: 7.55 , image: '' },
    'Croquetas de bacalao' : { id: 13 , description: '(6 ud.)', price: 7.55 , image: '' },
    'Champiñones con salsa verde': { id: 14 , description: '', price: 7.25 , image: '' },
    'Revuelto de gambas, ajetes y trigueros': { id: 15 , description: '', price: 7.95 , image: '' },
    'Alitas de pollo con salsa barbacoa': { id: 16 , description: '', price: 7.95 , image: '' },
    'Tabla de jamón serrano y queso': { id: 17 , description: '', price: 17 , image: '' },
    'Queso rebozado con mermelada de arándanos': { id:"" , description: '(6 ud.)', price: 9.80 , image: '' },
    'Ración de pan': { id: "" , description: '', price: 1.50 , image: '' },
    'Ración de pan con tomate y ajoacete': { id: "" , description: '', price: 5.95 , image: '' },
    'Pincho de tortilla de patata': { id: "" , description: '', price: 6.50 , image: '' },  
}

function Tapas() {
    return(
        <>
            {Object.entries(tapa).map(([name, details]) => (
                <article className="border-2 w-[300px] h-[300px] p-4 rounded-lg shadow-lg flex flex-col justify-between bg-gradient-to-br from-gray-100 to-transparent
                hover:scale-105 hover:bg-gray-100 cursor-pointer transition-all text-pretty">
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

export default Tapas;