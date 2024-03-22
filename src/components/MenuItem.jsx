export default function MenuItem({ name = 'Tapas', onClick }) {
    return (
        <button className="border-2 py-2 px-4 rounded-full border-orange-500 capitalize mr-2"
                onClick={() => onClick(name)}>
            {name}
        </button>
    );
}
