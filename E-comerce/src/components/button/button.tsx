type props = {

    title: string;
}

export function Button ({title}: props) {
    return (
        <button className="bg-evergreen-light px-6 py-3 rounded-lg shadow text-white font-medium">
            {title}
        </button>
    )
}