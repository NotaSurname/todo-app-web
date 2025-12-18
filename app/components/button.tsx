export function Button({type, text, size, style, onClick}: {type?: "button" | "submit" | "reset" | undefined, text: string, size: string, style:string, onClick: any}) {
    return (
        <div>
            <button className={`${style} ${size}`} onClick={onClick}
            >
                {text}
            </button>
        </div>
    )
}