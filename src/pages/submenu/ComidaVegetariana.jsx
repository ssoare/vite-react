import Card from "../../components/Card"    
import '../../css/style.css'

export default function ComidaVegetariana() {
        return(
        <>
            <h1 className="text-center text-2xl font-semibold underline w-screen"> Tapas </h1> 
            <section className="grid grid-flow-col-dense overflow-auto gap-4 py-4">
                <Card id = '110'
                    name = 'Longaniza vegetal, tortilla francesa y patatas'
                    price = '10.95'
                />
                <Card id = '111'
                    name = 'Hamburguesa vegetal y huevo'
                    price = '10.50'
                />
                <Card id = '112'
                    name = 'Seitán a la plancha y huevo'
                    price = '10.50'
                />
                <Card id = '113'
                    name = 'Seitán a la plancha con salsa pimienta'
                    price = '10.50'
                />
                <Card id = '114'
                    name = 'Seitán, queso, champiñones y cebolla frita'
                    price = '11.95'
                />
                <Card id = '115'
                    name = 'Escalopines de seitán'
                    price = '10.95'
                />
                <Card id = '116'
                    name = 'Escalope de soja'
                    price = '10.50'
                />
                <Card id = '117'
                    name = 'Escalope de tofu'
                    price = '10.50'
                />
                <Card id = '118'
                    name = 'Tofú a la plancha con salsa pimienta'
                    price = '10.50'
                />
                <Card id = '119'
                    name = 'Parrillada de verdura'
                    price = '11.95'
                />
            </section>  

            <h1 className="text-center text-2xl mt-12 font-semibold underline w-screen"> Ensaladas </h1> 
            <section className="grid grid-flow-col-dense overflow-auto gap-4 py-4">
                <Card id = '93'
                    name = 'Ensalada de la casa'
                    price = '11.95'
                />
                <Card id = '94'
                    name = 'Ensalada de queso de cabra'
                    price = '11.95'
                />
                <Card id = '95'
                    name = 'Ensalada el rincón'
                    price = '10.50'
                />
            </section>

            <h1 className="text-center text-2xl mt-12 font-semibold underline w-screen flex-grow"> Hamburguesas </h1> 
            <section className="grid grid-flow-col-dense overflow-auto gap-4 py-4">
                <Card id = '96'
                    name = 'Hamburguesa vegetariana, queso y huevo'
                    price = '7.50'
                />
                <Card id = '97'
                    name = 'Hamburguesa vegetariana, salsa barbacoa, lechuga, queso y huevo'
                    price = '7.60'
                />
                <Card id = '98'
                    name = 'Hamburguesa vegetariana, queso, lechuga, tomate y cebolla frita'
                    price = '7.75'
                />
                <Card id = '99'
                    name = 'Hamburguesa vegetariana, salsa roquefort, lechuga y huevo'
                    price = '7.85'
                />
            </section>

            <h1 className="text-center text-2xl mt-12 font-semibold underline w-screen"> Bocadillos </h1> 
            <section className="grid grid-flow-col-dense overflow-auto w-screen gap-4 py-4">
                <Card id = '100'
                    name = 'Seitán, queso y huevo'
                    price = '7.50'
                />
                <Card id = '101'
                    name = 'Seitán, queso, lechuga, tomate y cebolla frita'
                    price = '7.75'
                />
                <Card id = '102'
                    name = 'Seitán, queso, huevo, lechuga, tomate y cebolla frita'
                    price = '7.85'
                />
                <Card id = '103'
                    name = 'Seitán, tomate, queso y pimiento frito'
                    price = '7.85'
                />
                <Card id = '104'
                    name = 'Longaniza vegetariana, tomate y pimiento frito'
                    price = '8.50'
                />
                <Card id = '105'
                    name = 'Tofú, huevo y tomate'
                    price = '7.25'
                />
                <Card id = '106'
                    name = 'Tofú, huevo, lechuga, tomate y cebolla frita'
                    price = '7.25'
                />
                <Card id = '107'
                    name = 'Tofú, queso, huevo, lechuga y pimiento frito'
                    price = '7.25'
                />
                <Card id = '108'
                    name = 'Tortilla francesa, tomate y queso'
                    price = '6.50'
                />
                <Card id = '109'
                    name = 'Tortilla de patatas con tomate o ajoaceite'
                    price = '6.35'
                />
            </section>
        </>
    )
}