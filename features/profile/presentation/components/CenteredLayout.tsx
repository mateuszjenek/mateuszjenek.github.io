"use client";

export function CenteredLayout({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--profile-bg)",
                color: "var(--profile-text)",
            }}
        >
            {children}
        </div>
    );
}

