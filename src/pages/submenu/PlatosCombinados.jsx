// import './PlatosCombinadosInfantil'
import platosCombinadosInfantil from './PlatosCombinadosInfantil'

const platosCombinados = {
    'Lomo, bacon y huevo': { id: 64, description: '', price: 10.50 , image: '' } ,
    'Lomo con salsa pimiento o roquefort': { id: 65, description: '', price: 10.00 , image: '' } ,
    'Pechuga y huevo': { id: 66, description: '', price: 10.00 , image: '' } ,
    'Pechuga, queso, champinãones y cebolla frita': { id: 67, description: '', price: 10.95 , image: '' } ,
    'Pechuga a la pimiento': { id: 68, description: '', price: 10.50 , image: '' } ,
    'Alitas de pollo con salsa barbacoa': { id: 69, description: '', price: 10.00 , image: '' } ,
    'Bistec de ternera y huevo': { id: 70, description: '', price: 12.85 , image: '' } ,
    'Bistec de ternera con salsa pimiento o roquefort': { id: 71, description: '', price: 12.85 , image: '' } ,
    'Secreto ibérico': { id: 72, description: '', price: 10.85 , image: '' } ,
    'Chuletas de cordero': { id: 73, description: '', price: 14.95 , image: '' } ,
    'Solomillo de ternera': { id: 74, description: '', price: 16.50 , image: '' } ,
    'Entrecot de ternera': { id: 75, description: '', price: 16.50 , image: '' } ,
    'Parrillada de carne (pechuga, lomo, ternera, longaniza y chorizo)': { id: 76, description: '', price: 16.85 , image: '' } ,
    'Chipirones con salsa verde': { id: 77, description: '', price: 14.85 , image: '' } ,
    'Sepia a la plancha con salsa verde': { id: 78, description: '', price: 14.85 , image: '' } ,
    'Empereador a la plancha con salsa verde': { id: 79, description: '', price: 14.85 , image: '' } ,
}

function PlatosCombinados() {
    return(
        <>
            <h1 className='text-center text-2xl font-semibold'>Nuestro Platos</h1>
            <hr className='my-4 w-6/12 mx-auto' />
            {Object.entries(platosCombinados).map(([name, details]) => (
                <article className="flex mb-8 justify-between items-center">
                    <div className="basis-4/5">
                        <h3 className="text-xl font-semibold">{details.id}. {name}</h3>
                        <p className="italic text-gray-700">{details.description}</p>
                    </div>
                    <p>{details.price.toFixed(2)}€</p>
                    {/* Add image rendering here if available */}
                </article>
            ))}
            <h1 className='text-center text-2xl font-semibold'>Platos infantiles</h1>
            <hr className='my-4 w-6/12 mx-auto' />
            {Object.entries(platosCombinadosInfantil).map(([name, details]) => (
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

export default PlatosCombinados