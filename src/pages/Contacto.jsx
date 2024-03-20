import '../css/contacto.css'

function Contacto() {
    return(
        <>
            <section id='contacto'
                    className="grid items-center justify-center text-center 
                            lg:gap-20 lg:mx-20">
                <article className="border-b-2 py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Llámanos: </h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold"
                        href="tel:+34964964964">964 964 964</a>
                </article>
                <article className="border-b-2 py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Envíanos un correo:</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold"
                        href="mailto:correo@correo.com">correo@correo.com</a>
                </article>
                <article className="py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Estmos en:</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold"
                        href="https://maps.app.goo.gl/dLZjSYj1CSbLducL7">Pl. de Tetuan, 37, 12001 Castelló de la Plana, Castelló</a>
                </article>
            </section>
        </>
    )
}

export default Contacto