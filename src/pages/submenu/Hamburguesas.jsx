import Card from "../../components/Card";

function Hamburguesas() {
    return(
        <>
            <Card id = '31'
                name = 'Hamburguesa, queso y huevo'
                description = ''
                price = '6,90'
                image = 'src/images/burger.png'
            />
            <Card id = '32'
                name = 'Hamburguesa, queso, lechuga y tomate'
                description = ''
                price = '7,00'
                image = 'src/images/burger.png'
            />
            <Card id = '33'
                name = 'Hamburguesa especial'
                description = 'Lechuga, queso, bacón, tomate, cebolla y huevo'
                price = '7,50'
                image = 'src/images/burger.png'
            />
            <Card id = '34'
                name = 'Hamburguesa roquefort'
                description = 'Salsa roquefort, lechuga y bacón'
                price = '7,25'
                image = 'src/images/burger.png'
            />
        </>
    )
}

export default Hamburguesas;