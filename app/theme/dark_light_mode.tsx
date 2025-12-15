'use client'
import React from 'react'
import {useTheme} from "@/app/theme/themeContext";

export function DarkLightModeIcon() {
    const { isDarkMode, toggleDarkMode } = useTheme()

    const darkModeIcon = "🌙";
    const lightModeIcon = "🌞";


    const currentIcon = isDarkMode ? lightModeIcon : darkModeIcon;
    const currentAlt = isDarkMode ? "Passer en mode clair" : "Passer en mode sombre";
    return (
        <div
            className="h-10 w-10 cursor-pointer select-none flex items-center justify-center text-xl transition duration-300"
            onClick={toggleDarkMode}
        >
            <span role="img" aria-label={currentAlt}>{currentIcon}</span>
        </div>
    )
}