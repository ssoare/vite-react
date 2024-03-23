import '../css/contacto.css'
import { IoLogoWhatsapp } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";

export default function Contacto() {
    return(
        <>
            <section id='contacto' className="mt-20 h-[calc(100svh - 5rem)] grid justify-center">
                <a className="text-blue-500 p-4 text-lg font-semibold flex gap-4 items-center justify-center shadow-md"
                    rel='noreferrer noopenner'
                    href="tel:+34964964964">
                    <HiOutlinePhone className='size-6 text-black' /> 
                    964 964 964
                </a>

                <a className="text-blue-500 p-4 text-lg font-semibold flex gap-4 items-center justify-center shadow-md"
                    rel='noreferrer noopenner'
                    href="https://wa.me/964964964">
                    <IoLogoWhatsapp className=' fill-green-500 size-6' /> 
                    964 964 964
                </a>

                <a className="text-blue-500 p-4 text-lg font-semibold flex gap-4 items-center justify-center shadow-md"
                    rel='noreferrer noopenner'
                    href="https://maps.app.goo.gl/dLZjSYj1CSbLducL7">
                    <HiOutlineMapPin className='size-6 text-black' />
                    Pl. de Tetuan, 37, Castellón
                </a>

                <section className="flex justify-center items-center text-center gap-0">
                        <a className="text-blue-500 p-4 text-lg font-semibold flex gap-4 items-center justify-center shadow-md"
                            rel='noreferrer noopenner'
                            href="https://www.facebook.com/elrincondelbocata/">
                            <IoLogoFacebook className='size-6'/>
                        </a>

                        <a className="text-blue-500 p-4 text-lg font-semibold flex gap-4 items-center justify-center shadow-md"
                            rel='noreferrer noopenner'
                            href="https://www.instagram.com/explore/locations/413751147/el-rincon-del-bocata/?next=%2Fkey1s2403%2Ffeed%2F&hl=es">
                            <IoLogoInstagram className='size-6 text-black'/>
                        </a>
                </section>
            </section>
        </>
    )
}