'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import {Input} from "@/app/components/input";
import {SignInButton} from "@/app/components/signInButton";

export default function SignIn() {
    const router = useRouter()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')



    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const handleReturnClick = () => {
        router.push('/')
    }
    const handleLogInClick = () => {
        router.push('/logIn')
    }

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Les mots de passe ne correspondent pas");
            return;
        }

        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ firstName, lastName, email, password, confirmPassword })
            });

            if (res.ok) {
                alert("Utilisateur créé !");
                router.push("/logIn");
            } else {
                const data = await res.json();
                alert(data.error || "Erreur lors de la création");
            }
        } catch (error) {
            console.error(error);
            alert("Erreur réseau");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#0A0A0A]">
            <form className="border border-gray-400/50 py-10 rounded-lg w-[500px] h-auto" onSubmit={handleSignUp}>
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

                <h1 className="pl-10 text-3xl font-bold mb-11 mt-3 text-[#0A0A0A] dark:text-white">Page d'Inscription</h1>

                <div className="flex flex-row space-x-3 px-5">
                    <Input
                        type={"text"}
                        placeholder={"Prénom"}
                        id={"firstName"}
                        className={"w-full mb-5"}
                        onChange={(val) => setFirstName(val.target.value)}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Nom"}
                        id={"lastName"}
                        className={"w-full mb-5"}
                        onChange={(val) => setLastName(val.target.value)}
                    />
                </div>
                <div className="px-5">
                    <Input
                        type={"mail"}
                        placeholder={"Mail"}
                        id={"mail"}
                        className={"w-full mb-5"}
                        onChange={(val) => setEmail(val.target.value)}
                        value={undefined}
                    />
                    <Input
                        type={showPassword ? "text" : "password"}
                        placeholder={"Mot de passe"}
                        id={"password"}
                        className={"w-full mb-5"}
                        onChange={(e) => setPassword(e.target.value)}
                        value={undefined}/>
                    <label className="inline-block relative select-none cursor-pointer
                           -top-2 mb-5
                           after:content-[''] after:absolute after:left-0
                           after:-bottom-0.5 after:h-[2px] after:w-full
                           after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300 after:ease-out
                           after:bg-[#0A0A0A] dark:after:bg-[#F8F8FF]
                           hover:after:scale-x-100
                           text-[#0A0A0A] dark:text-white"
                           onClick={() => setShowPassword(prev => !prev)}
                    >
                        {showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    </label>
                    <Input
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder={"Confirmer votre mot de passe"}
                        id={"confirmPassword"}
                        className={"w-full mb-5"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={undefined}
                    />
                    <label className="inline-block relative select-none cursor-pointer
                           mb-5
                           after:content-[''] after:absolute after:left-0
                           after:-bottom-0.5 after:h-[2px] after:w-full
                           after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300 after:ease-out
                           after:bg-[#0A0A0A] dark:after:bg-[#F8F8FF]
                           hover:after:scale-x-100
                           text-[#0A0A0A] dark:text-white"
                           onClick={() => setShowConfirmPassword(prev => !prev)}
                    >
                        {showConfirmPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
                    </label>
                </div>

                <div className="flex flex-row justify-between text-md px-5">

                    <label className="inline-block relative select-none cursor-pointer
                           after:content-[''] after:absolute after:left-0
                           after:-bottom-0.5 after:h-[2px] after:w-full
                           after:scale-x-0 after:origin-left
                           after:transition-transform after:duration-300 after:ease-out
                           after:bg-[#0A0A0A] dark:after:bg-[#F8F8FF]
                           hover:after:scale-x-100
                           text-[#0A0A0A] dark:text-white mb-7"
                           onClick={handleLogInClick}
                    >
                        Vous avez un compte ? Connectez-vous !
                    </label>
                </div>

                <div className="px-5">
                    <SignInButton size={"w-full p-4"} onClick={handleReturnClick}/>
                </div>

            </form>
        </div>
    );
}