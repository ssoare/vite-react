import Card from "../../components/Card";

export default function Hamburguesas() {
    return(
        <>
            <Card id = '31'
                name = 'Hamburguesa, queso y huevo'
                price = '6,90'
            />
            <Card id = '32'
                name = 'Hamburguesa, queso, lechuga y tomate'
                price = '7,00'
            />
            <Card id = '33'
                name = 'Hamburguesa especial'
                description = 'Lechuga, queso, bacón, tomate, cebolla y huevo'
                price = '7,50'
            />
            <Card id = '34'
                name = 'Hamburguesa roquefort'
                description = 'Salsa roquefort, lechuga y bacón'
                price = '7,25'
            />
        </>
    )
}