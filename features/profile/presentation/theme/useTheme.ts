"use client";

import { useThemeStore } from "../state/themeStore";

export function useTheme() {
    return useThemeStore();
}

