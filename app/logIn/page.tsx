'use client'
import { useRouter } from 'next/navigation'
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import {useTheme} from "@/app/theme/themeContext";
import {Input} from "@/app/components/input"

export default function LogInPage() {

    const router = useRouter()

    const handleReturnClick = () => {
        router.push('../../..')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A]">
            <form className="border border-gray-400/50 rounded-lg w-[500px]">
                <div className="flex items-start justify-between pt-3 px-3">
                    <p onClick={handleReturnClick} className="select-none inline cursor-pointer">&larr; <span className="inline hover:underline">Retour</span></p>
                    <DarkLightModeIcon/>
                </div>

                <h1 className="pl-10 text-3xl font-bold mb-4">Connexion</h1>

                <div className="px-5">
                    <Input type={"mail"} label={"Mail"} id={"mail"} size={"w-full"}/>
                    <Input type={"password"} label={"Mot de passe"} id={"password"} size={"w-full"}/>
                    <label className="relative -top-3 inline-block select-none cursor-pointer after:content-[''] after:absolute after:left-0
                           after:-bottom-0.5 after:h-[2px] after:w-full after:bg-white after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300 after:ease-out
                           hover:after:scale-x-100">Afficher le mot de passe</label>
                </div>

            </form>
        </div>
    )
}