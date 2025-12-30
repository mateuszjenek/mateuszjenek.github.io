"use client";

import { getProfile } from "../../application/get_profile";
import { toProfileViewModel } from "../adapters/profilePresenter";
import { CenteredLayout } from "../components/CenteredLayout";
import { JsonProfileViewer } from "../components/JsonProfileViewer";
import { ThemeToggle } from "../components/ThemeToggle";
import { ThemeProvider } from "../theme/ThemeProvider";

export function ProfilePage() {
    // Get profile from application layer
    const profile = getProfile();
    const viewModel = toProfileViewModel(profile);

    return (
        <ThemeProvider>
            <CenteredLayout>
                <ThemeToggle />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        padding: "1.5rem",
                        width: "100%",
                    }}
                >
                    <JsonProfileViewer data={viewModel} />
                </div>
            </CenteredLayout>
        </ThemeProvider>
    );
}

