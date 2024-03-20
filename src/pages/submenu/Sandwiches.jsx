import Card from "../../components/Card"

const sandwich = {
    'Sandiwch mixto': { id: 27 , description: 'Jamón york y queso', price: 4.75 , image: '' },
    'Sandwich de atún': { id: 28 , description: '', price: 5.95 , image: '' },
    'Sandwich especial': { id: 29 , description: 'Lechuga, tomate, jamón york y mayonesa', price: 7.50 , image: '' },
    'Sandwich César': { id: 30 , description: 'Lechuga, pollo, queso y salsa César', price: 6.25 , image: '' },
}

function Sandwiches() {
    return(
        <>
            <Card id = '27'
                name = 'Sandiwch mixto'
                description = 'Jamón york y queso'
                price = '4.75'
                image = 'src/images/burger.png'
            />
            <Card id = '28'
                name = 'Sandwich de atún'
                description = ''
                price = '5.95'
                image = 'src/images/burger.png'
            />
            <Card id = '29'
                name = 'Sandwich especial'
                description = 'Lechuga, tomate, jamón york y mayonesa'
                price = '7.50'
                image = 'src/images/burger.png'
            />
            <Card id = '30'
                name = 'Sandwich César'
                description = 'Lechuga, pollo, queso y salsa César'
                price = '6.25'
                image = 'src/images/burger.png'
            />
            <div>

            </div>
        </>
    )
}

export default Sandwiches