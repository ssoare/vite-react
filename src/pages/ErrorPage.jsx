import { Link } from "react-router-dom"

export default function ErrorPage() {
    return(
        <>
            <section className="flex flex-col justify-center items-center gap-4 h-svh">
                <h1 className="text-3xl text-red-500">Esta página no existe!</h1>
                <Link className="border-2 py-2 px-4 rounded-xl hover:bg-orange-500 hover:text-white transition" to = '/'>Volver a inicio</Link>
            </section>
        </>
    )
}