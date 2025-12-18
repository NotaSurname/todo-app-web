'use client'
import React, {useState} from 'react'
import { useTheme } from '../theme/themeContext';
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import { useRouter } from 'next/navigation'
import {ConnectionButton} from "@/app/components/connectionButton";
import {LogOutButton} from "@/app/components/logOutButton";
import {useSession, signOut} from "next-auth/react"

export const isLogged = false

export function NavBar() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const router = useRouter()

    const { data: session, status } = useSession()

    const navBarBg = isDarkMode ? "bg-[#0A0A0A]" : "bg-[#f1f1f1]";
    const navBarText = isDarkMode ? "text-[#F8F8FF]" : "text-gray-900";
    const navBarBorder = isDarkMode ? "border-gray-700" : "border-gray-200";

    const handleUserClick = () => {
        router.push('/logIn')
    }

    const handleLogOutClick = () => {
        signOut({callbackUrl: '/'})
    }

    return (
        <div className={`
            flex flex-row
            items-center justify-between
            h-15 w-4/6 border-2
            ${navBarBg} ${navBarText} ${navBarBorder}
            mx-auto mt-12
            rounded-full px-10
        `}>
            <ul>
                <li className="font-bold text-lg">TODO LIST</li>
            </ul>

            <ul>
                {status == "authenticated" ? <li className="text-lg">Bonjour {session.user?.name} !</li> : null}
            </ul>

            <ul>
                <li className="flex items-center space-x-5">
                    <DarkLightModeIcon/>
                    {status === "authenticated" ? (
                        <div className="flex items-center space-x-3">
                            <LogOutButton size={"w-full p-2"} onClick={handleLogOutClick}/>
                        </div>
                    ) : (
                        <ConnectionButton size={"w-full p-2"} onClick={handleUserClick}/>
                    )}
                </li>
            </ul>
        </div>
    );
}