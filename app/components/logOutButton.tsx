import {Button} from "@/app/components/button";

export function LogOutButton({size, onClick}: {size: string, onClick: any}) {

    return (
        <div>
            <Button
                size={`${size}`}
                text={"Se déconnecter"}
                style={"border border-gray-500 rounded-md dark:text-[#F8F8FF] select-none cursor-pointer"}
                onClick={onClick}
            />
        </div>
    )
}