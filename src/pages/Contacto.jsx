import '../css/index.css'
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { IoMailOutline } from "react-icons/io5";
import { HiOutlineMapPin } from "react-icons/hi2";

export default function Contacto() {
    return(
        <>
            <section id='contacto'
                    className="grid items-center justify-center text-center 
                            lg:gap-4 lg:mx-20 lg:grid lg:grid-cols-2">
                <article className="border-b-2 py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Teléfono</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold flex items-center gap-4 justify-center"
                        href="tel:+34964964964"><HiOutlinePhone className='size-6 text-black' /> 964 964 964</a>
                </article>
                <article className="py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Whatsapp</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold flex items-center gap-4 justify-center"
                        href="https://wa.me/964964964"><IoLogoWhatsapp className=' fill-green-500 size-6' /> 964 964 964</a>
                </article>
                <article className="border-b-2 py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Correo</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold flex items-center gap-4 justify-center "
                        href="mailto:correo@correo.com"> <IoMailOutline className='size-6 text-black' /> correo@correo.com</a>
                </article>
                <article className="py-12 mx-4 
                                    lg:border-y-2">
                    <h2 className='text-3xl mb-4'>Maps</h2>
                    <a className="text-blue-500 p-4 text-lg font-semibold flex items-center gap-4 justify-center"
                        href="https://maps.app.goo.gl/dLZjSYj1CSbLducL7"><HiOutlineMapPin className='size-6 text-black' />Pl. de Tetuan, 37, Castellón</a>
                </article>
            </section>
        </>
    )
}