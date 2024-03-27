
function Card({name, image = 'burger.png', price, description = '', id = '', loading = ''}) {
    return(
        <article className='w-[300px] border-2 rounded-lg shadow-lg p-4'>
            <img src={image} loading="lazy"/>
            <div className='flex justify-between items-center mt-20'>
                <div className='basis-4/5'>
                    <h3 className='text-lg font-semibold'>{id}. {name}</h3>
                    <p className='italic text-gray-600'>{description}</p>
                </div>
                <p>{price}€</p>
            </div>
        </article>  
    )   
}

export default Card