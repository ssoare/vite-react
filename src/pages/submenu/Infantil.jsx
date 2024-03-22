import Card from "../../components/Card"

export default function Infantil() {
    return(
        <>
            <Card id = '80'
                name = 'Hamburguesa, queso y patatas'
                price = '6,70'
            />
            <Card id = '81'
                name = 'Longaniza con patatas'
                price = '6,70'
            />
            <Card id = '82'
                name = 'Frankfurt con patatas'
                price = '6,70'
            />
            <Card id = '83'
                name = 'Pechuga de pollo empanada con patatas'
                price = '6,70'
            />
            <Card id = '84'
                name = 'Nuggets de pollo con patatas'
                price = '6,70'
                loading = 'lazy'
            />
            <Card id = '85'
                name = 'Tortilla francesa con longaniza'
                price = '6,70'
                loading = 'lazy'
            />
            <Card id = '86'
                name = 'Huevos con patatas'
                price = '6,70'
                loading = 'lazy'
            />
        </>
    )
}
