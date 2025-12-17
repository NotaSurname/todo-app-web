'use client'
import React, {useState} from 'react'
import { useTheme } from '../theme/themeContext';
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import { useRouter } from 'next/navigation'
import {ConnectionButton} from "@/app/components/connectionButton";
import {LogOutButton} from "@/app/components/logOutButton";
export function NavBar() {

    const isLogged = false

    const { isDarkMode, toggleDarkMode } = useTheme();
    const router = useRouter()

    const navBarBg = isDarkMode ? "bg-[#0A0A0A]" : "bg-[#f1f1f1]";
    const navBarText = isDarkMode ? "text-[#F8F8FF]" : "text-gray-900";
    const navBarBorder = isDarkMode ? "border-gray-700" : "border-gray-200";

    const handleUserClick = () => {
        router.push('/logIn')
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
                <li className="flex items-center space-x-5">
                    <DarkLightModeIcon/>
                    {isLogged ? <LogOutButton size={"w-full p-2"} onClick={handleUserClick}/> : <ConnectionButton size={"w-full p-2"} onClick={handleUserClick}/>}
                </li>
            </ul>
        </div>
    );
}