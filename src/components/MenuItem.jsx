export default function Menu({name, price}) {
    return(
        <article className="flex justify-between max-w-screen-md mx-auto">
            <h1 className="text-lg">{name}</h1>
            <p>{price}€</p>
        </article>
    )
}