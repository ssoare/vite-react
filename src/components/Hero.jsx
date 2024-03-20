import '../css/hero.css'
import { Link } from 'react-router-dom'
function Hero() {
    return(
        <>
            <div className="hero text-4xl flex flex-col items-center justify-center gap-8">
                <h1>El Rincón del Bocata</h1>
                
                <Link to='contacto'>
                    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group              bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-2xl">
                            RESERVA
                        </span>
                    </button>
                </Link>
                
            </div>
        </>
    )
}

export default Hero