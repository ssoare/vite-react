export default function SubmenuItemActive({ name = 'Tapas', click }) {
    return(
        <button id = {name} 
        className="border-2 py-2 px-4 rounded-full capitalize mr-2 bg-orange-500 text-white transition"
        onClick={() => click(name)}>
            {name}
        </button>
    )
}