"use client";

import { useState, useEffect } from "react";
import { useTheme } from "../theme/useTheme";

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const isDark = theme === "dark";

    // Prevent hydration mismatch by only rendering after mount
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        // Return a placeholder that matches the default server render
        return (
            <button
                role="switch"
                aria-checked={true}
                aria-label="Toggle dark mode"
                style={{
                    position: "fixed",
                    top: "16px",
                    right: "16px",
                    width: "56px",
                    height: "32px",
                    padding: "0",
                    borderRadius: "16px",
                    border: "none",
                    background: "var(--toggle-track)",
                    cursor: "pointer",
                    outline: "none",
                    transition: "background 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                    zIndex: 100,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        padding: "2px",
                    }}
                >
                    <div
                        style={{
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            background: "var(--toggle-thumb)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "16px",
                            transition: "transform 0.3s ease, background 0.3s ease",
                            transform: "translateX(24px)",
                            color: "var(--toggle-icon-color, var(--profile-text))",
                        }}
                    >
                        🌙
                    </div>
                </div>
            </button>
        );
    }

    return (
        <button
            onClick={toggleTheme}
            role="switch"
            aria-checked={isDark}
            aria-label="Toggle dark mode"
            style={{
                position: "fixed",
                top: "16px",
                right: "16px",
                width: "56px",
                height: "32px",
                padding: "0",
                borderRadius: "16px",
                border: "none",
                background: "var(--toggle-track)",
                cursor: "pointer",
                outline: "none",
                transition: "background 0.3s ease",
                display: "flex",
                alignItems: "center",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                zIndex: 100,
            }}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleTheme();
                }
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
            }}
        >
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    padding: "2px",
                }}
            >
                <div
                    style={{
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        background: "var(--toggle-thumb)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "16px",
                        transition: "transform 0.3s ease, background 0.3s ease",
                        transform: isDark ? "translateX(24px)" : "translateX(0)",
                        color: "var(--toggle-icon-color, var(--profile-text))",
                    }}
                >
                    {isDark ? "🌙" : "☀️"}
                </div>
            </div>
        </button>
    );
}

