const bocadillo = {
    'Longanizas, tomate y pimiento frito': { id: 35 , description: '', price: 6.85 , image: '' },
    'Jamón serrano con tomate': { id: 36 , description: '', price: 6.35 , image: '' },
    'Jamón serrano, queso y tomate': { id: 37 , description: '', price: 6.85 , image: '' },
    'Calamares con ajoaceite': { id: 38 , description: '', price: 7.50 , image: '' },
    'Sepia a la plancha con salsa verde': { id: 39 , description: '', price: 7.80 , image: '' },
    'Atún con anchoas': { id: 40 , description: '', price: 7.25 , image: '' },
    'Bacalao desmigado con aceitunas': { id: 41 , description: '', price: 6.95 , image: '' },
    'Lomo, queso y huevos': { id: 42 , description: '', price: 6.85 , image: '' },
    'Lomo, queso, lechuga, tomate y cebolla frita': { id: 43 , description: '', price: 7.25 , image: '' },
    'Lomo, queso, bacon, lechuga y tomate': { id: 44 , description: '', price: 7.35 , image: '' },
    'Lomo, jamón a la plancha, pimiento frito y tomate': { id: 45 , description: '', price: 7.50 , image: '' },
    'Lomo, queso, paté, bacon, huevos, lechuga, tomate y cebolla frita': { id: 46 , description: '', price: 7.95 , image: '' },
    'Bacon, queso y tomate': { id: 47 , description: '', price: 6.80 , image: '' },
    'Bacon, queso, huevo y tomate': { id: 48 , description: '', price: 7.00 , image: '' },
    'Bacon, queso y sobrasada': { id: 49 , description: '', price: 6.95 , image: '' },
    'Paté, queso y tomate': { id: 50 , description: '', price: 6.90 , image: '' },
    'Paté, queso, huevo y tomate': { id: 51 , description: '', price: 6.95 , image: '' },
    'Paté, queso, bacón y tomate': { id: 52 , description: '', price: 7.25 , image: '' },
    'Pechuga, tomate y mayonesa': { id: 53 , description: '', price: 6.95 , image: '' },
    'Pechuga, queso y mayonesa': { id: 54 , description: '', price: 6.95 , image: '' },
    'Pechuga, jamón a la plancha, lechuga, mayonesa y cebolla frita': { id: 55 , description: '', price: 7.95 , image: '' },
    'Pechuga, bacón, huevo, queso y tomate': { id: 56 , description: '', price: 7.85 , image: '' },
    'Ternera, tomate y ajoaceite': { id: 57 , description: '', price: 7.85 , image: '' },
    'Ternera, queso y mayonesa': { id: 58 , description: '', price: 7.85 , image: '' },
    'Ternera, jamón a la plancha, queso, ajoaceite y pimiento frito': { id: 59 , description: '', price: 7.95 , image: '' },
    'Tortilla francesa con tomate' : { id: 60 , description: '', price: 6.50 , image: '' },
    'Tortilla al gusto (jamon, atun o queso)': { id: 61 , description: '', price: 6.95 , image: '' },
    'Tortilla de gambas con ajoaceite': { id: 62 , description: '', price: 7.95 , image: '' },
    'Tortilla de patatas con tomate o ajoaceite': { id: 63 , description: '', price: 6.35 , image: '' },
}


function Bocadillos() {
    return(
        <>
            {Object.entries(bocadillo).map(([name, details]) => (
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

export default Bocadillos;