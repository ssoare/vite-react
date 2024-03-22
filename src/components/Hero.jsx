import '../css/index.css'
import { Link } from 'react-router-dom'
function Hero() {
    return(
        <>
            <section className="hero text-4xl flex flex-col items-center justify-center gap-8 mt-12">
                <h1>El Rincón del Bocata</h1>
                
                <Link to='contacto'>
                    <button className='text-white text-xl bg-black/50 py-2 px-8 font-semibold rounded-xl border-2
                                hover:bg-orange-500 hover:text-black transition'>
                        RESERVA
                    </button>
                </Link>
                
            </section>
        </>
    )
}

export default Hero