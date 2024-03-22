import '../css/index.css'
export default function MenuItem({ name = 'Tapas', click }) {
    return(
        <button id = {name} 
        className="border-2 py-2 px-4 rounded-full capitalize mr-2"
        onClick={() => click(name)}>
            {name}
        </button>
    )
}
