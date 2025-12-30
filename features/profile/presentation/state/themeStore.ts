"use client";

import { useState, useEffect } from "react";

export type Theme = "dark" | "light";

const THEME_STORAGE_KEY = "profile-theme";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    return stored === "light" || stored === "dark" ? stored : "dark";
}

export function useThemeStore() {
    const initialTheme = getInitialTheme();
    const [theme, setThemeState] = useState<Theme>(initialTheme);

    useEffect(() => {
        // Apply theme whenever it changes
        applyTheme(theme);
    }, [theme]);

    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem(THEME_STORAGE_KEY, newTheme);
    };

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return {
        theme,
        setTheme,
        toggleTheme,
    };
}

function applyTheme(theme: Theme) {
    if (typeof document !== "undefined") {
        document.documentElement.setAttribute("data-theme", theme);
    }
}

