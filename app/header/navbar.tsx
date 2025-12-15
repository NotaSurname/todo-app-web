'use client'
import React from 'react'
import { useTheme } from '../theme/themeContext';
import {DarkLightModeIcon} from "@/app/theme/dark_light_mode";
import { useRouter } from 'next/navigation'
export function NavBar() {
    const { isDarkMode, toggleDarkMode } = useTheme();
    const router = useRouter()

    const userProfilePicture = "/user.svg";

    const navBarBg = isDarkMode ? "bg-[#0A0A0A]" : "bg-[#F8F8FF]";
    const navBarText = isDarkMode ? "text-[#F8F8FF]" : "text-gray-900";
    const navBarBorder = isDarkMode ? "border-gray-700" : "border-gray-200";

    const profileBgAndBorder = isDarkMode
        ? "bg-stone-600/50 border-black"
        : "bg-gray-200 border-gray-400";

    const handleUserClick = () => {
        router.push('/logIn')
    }

    return (
        <div className={`flex flex-row items-center justify-around h-15 w-full border-b-2 ${navBarBg} ${navBarText} ${navBarBorder} px-4`}>
            <ul>
                <li className="font-bold text-lg">TODO LIST</li>
            </ul>
            <ul className="flex flex-row items-center space-x-5">

                <DarkLightModeIcon/>

                <div
                    className={`h-10 w-10 rounded-full overflow-hidden border cursor-pointer hover:opacity-80 transition select-none ${profileBgAndBorder}`}
                    onClick={handleUserClick}
                >
                    <img
                        src={userProfilePicture}
                        alt="Profile picture"
                        className="w-full h-full object-cover"
                        draggable="false"
                    />
                </div>
            </ul>
        </div>
    );
}