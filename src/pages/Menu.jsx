import MenuItem from '../components/MenuItem'

export default function Menu() {
    return(
        <>
            <section className="mt-20 max-w-screen-md mx-auto border-2 p-4 rounded-lg shadow-lg">
                <h1 className='text-2xl text-center mb-8 font-semibold'>De lunes a viernes </h1>
                <MenuItem name = 'Desayuno' price = '3,00' />
                <MenuItem name = 'Desayuno con zumo o refresco' price = '3,50' />
                <br />
                <MenuItem name = 'Almuerzo' price = '7,50' />
                <MenuItem name = 'Almuerzo con carajillo' price = '7,90' />
                <br />
                <MenuItem name = 'Menú diario' price = '13,95' />
            </section>

            <section className="mt-4 max-w-screen-md mx-auto border-2 p-4 rounded-lg shadow-lg">
                <h1 className='text-2xl text-center mb-8 font-semibold'>Sábado </h1> 
                <MenuItem name = 'Menú brasa' price = '16,95' />              
            </section>

            <section className="mt-4 max-w-screen-md mx-auto border-2 p-4 rounded-lg shadow-lg">
                <h1 className='text-2xl text-center mb-8 font-semibold'>Domingo y festivos</h1> 
                <MenuItem name = 'Menú brasa' price = '18,95' />              
            </section>
        </>
    )
}