"use client";

import { useThemeStore } from "../state/themeStore";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    // Initialize theme store (applies theme via useEffect)
    useThemeStore();

    return <>{children}</>;
}

