import '../css/index.css'
import { Link } from 'react-router-dom'
function Hero() {
    return(
        <>
            <section className="hero text-4xl flex flex-col items-center justify-center gap-8">
                <h1>El Rincón del Bocata</h1>
                
                <Link to='contacto'>
                    <button className='bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded'>
                        RESERVA
                    </button>
                </Link>
                
            </section>
        </>
    )
}

export default Hero