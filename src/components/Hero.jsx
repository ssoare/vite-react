import '../css/hero.css'
function Hero() {
    return(
        <>
            <div className="hero text-4xl flex flex-col items-center justify-center gap-8">
                <h1>El Rincón del Bocata</h1>
                <button className=' hover:bg-orange-500 hover:text-black transition-all
                                    border-2 py-2 px-4 bg-white text-black rounded-xl uppercase'>Reserva</button>
            </div>
        </>
    )
}

export default Hero