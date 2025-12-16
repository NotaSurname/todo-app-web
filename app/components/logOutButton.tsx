export function LogOutButton({size, onClick}: {size: string, onClick: any}) {

    return (
        <div>
            <button className={`flex border border-gray-500 rounded-md
                ${size}
                dark:text-[#F8F8FF]
                select-none cursor-pointer `}
                onClick={onClick}
            >
                Se déconnecter
            </button>
        </div>
    )
}