export function Button({text, size}: {text: string, size: string}) {
    return (
        <div className="flex justify-center items-center mt-115">
            <button className={`border border-blue-500 rounded-md p-2 hover:bg-blue-500 text-[##F8F8FF] select-none cursor-pointer`}>{text}</button>
        </div>
    )
}