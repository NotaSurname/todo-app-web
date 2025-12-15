'use client'
import { useRouter } from 'next/navigation'
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import {useTheme} from "@/app/theme/themeContext";
import {Input} from "@/app/components/input"
import {ConnectionButton} from "@/app/components/connectionButton";

export default function LogInPage() {

    const router = useRouter()

    const handleReturnClick = () => {
        router.push('/')
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A]">
            <form className="border border-gray-400/50 py-10 rounded-lg w-[500px]">
                <div className="relative flex items-center justify-between -top-3 px-5">
                    <p onClick={handleReturnClick} className="select-none inline cursor-pointer text-gray-900 dark:text-[#F8F8FF]">
                        &larr;
                        <span className={`inline-block relative select-none cursor-pointer
                                    after:content-[''] after:absolute after:left-0
                                    after:-bottom-0.5 after:h-[2px] after:w-full
                                    after:scale-x-0 after:origin-left
                                    after:transition-transform after:duration-300 after:ease-out

                                    after:bg-[#0A0A0A] dark:after:bg-[#F8F8FF]

                                    hover:after:scale-x-100`}
                        > Retour</span>
                    </p>
                    <DarkLightModeIcon/>
                </div>

                <h1 className="pl-10 text-3xl font-bold mb-4 text-[#0A0A0A] dark:text-white">Connexion</h1>

                <div className="px-5">
                    <Input type={"mail"} label={"Mail"} id={"mail"} size={"w-full"}/>
                    <Input type={"password"} label={"Mot de passe"} id={"password"} size={"w-full"}/>
                    <label className="inline-block relative select-none cursor-pointer
                                    -top-3
                                    after:content-[''] after:absolute after:left-0
                                    after:-bottom-0.5 after:h-[2px] after:w-full
                                    after:scale-x-0 after:origin-left
                                    after:transition-transform after:duration-300 after:ease-out
                                    after:bg-[#0A0A0A] dark:after:bg-[#F8F8FF]
                                    hover:after:scale-x-100
                           text-[#0A0A0A] dark:text-white
                           ">Afficher le mot de passe</label>
                </div>

                <div className="px-5">
                    <ConnectionButton size={"w-full"} onClick={handleReturnClick}/>
                </div>

            </form>
        </div>
    );
}