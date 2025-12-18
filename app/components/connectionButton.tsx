import {Button} from "@/app/components/button";

export function ConnectionButton({type, size, onClick}: {type?: "button" | "submit" | "reset" | undefined, size: string, onClick: any}) {
    return (
        <div>
            <Button
                size={`${size}`}
                text={"Se connecter"}
                style={"border border-blue-500 rounded-md hover:bg-blue-500 text-black dark:text-[#F8F8FF] select-none cursor-pointer"}
                onClick={onClick}
                type={type}
            />
        </div>
    )
}