export function Button({text, size, style, onClick}: {text: string, size: string, style:string, onClick: any}) {
    return (
        <div>
            <button className={`${style} ${size}`} onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}