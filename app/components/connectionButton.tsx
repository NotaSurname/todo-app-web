export function ConnectionButton({size, onClick}: {size: string, onClick: any}) {
    return (
        <div>
            <button className={`
                border border-blue-500
                rounded-md p-4 ${size}
                hover:bg-blue-500 text-black dark:text-[#F8F8FF]
                select-none cursor-pointer`}
                    onClick={onClick}
            >
                Se connecter
            </button>
        </div>
    )
}