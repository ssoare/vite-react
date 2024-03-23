import '../css/index.css'
export default function SubmenuItem({ name = 'Tapas', click }) {
    return(
        <button id = {name} 
                className="border-2 py-2 px-4 rounded-full capitalize mr-2 transition hover:bg-orange-500 hover:text-white"
                onClick={() => click(name)}>
                {name}
        </button>
    )
}
