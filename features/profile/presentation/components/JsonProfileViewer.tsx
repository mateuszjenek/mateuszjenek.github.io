"use client";

function isUrl(str: string): boolean {
    try {
        const url = new URL(str);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

function JsonValue({ value, indent = 0 }: { value: unknown; indent?: number }) {
    if (value === null) {
        return <span style={{ color: "var(--profile-null)" }}>null</span>;
    }

    if (value === undefined) {
        return <span style={{ color: "var(--profile-null)" }}>undefined</span>;
    }

    if (typeof value === "string") {
        if (isUrl(value)) {
            return (
                <a
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        color: "var(--profile-link)",
                        textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.textDecoration = "underline";
                        e.currentTarget.style.color = "var(--profile-link-hover)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.textDecoration = "none";
                        e.currentTarget.style.color = "var(--profile-link)";
                    }}
                >
                    &quot;{value}&quot;
                </a>
            );
        }
        return <span style={{ color: "var(--profile-string)" }}>&quot;{value}&quot;</span>;
    }

    if (typeof value === "number") {
        return <span style={{ color: "var(--profile-number)" }}>{value}</span>;
    }

    if (typeof value === "boolean") {
        return <span style={{ color: "var(--profile-boolean)" }}>{String(value)}</span>;
    }

    if (Array.isArray(value)) {
        if (value.length === 0) {
            return <span style={{ color: "var(--profile-bracket)" }}>[]</span>;
        }
        const openingIndentStyle = { paddingLeft: `${indent * 1.5}rem` };
        const contentIndentStyle = { paddingLeft: `${(indent + 1) * 1.5}rem` };
        return (
            <div>
                <div style={openingIndentStyle}>
                    <span style={{ color: "var(--profile-bracket)" }}>[</span>
                </div>
                <div>
                    {value.map((item, index) => (
                        <div key={index} style={contentIndentStyle}>
                            <JsonValue value={item} indent={indent + 1} />
                            {index < value.length - 1 && (
                                <span style={{ color: "var(--profile-bracket)" }}>,</span>
                            )}
                        </div>
                    ))}
                </div>
                <div style={openingIndentStyle}>
                    <span style={{ color: "var(--profile-bracket)" }}>]</span>
                </div>
            </div>
        );
    }

    if (typeof value === "object") {
        const entries = Object.entries(value);
        if (entries.length === 0) {
            return <span style={{ color: "var(--profile-bracket)" }}>{"{}"}</span>;
        }
        const openingIndentStyle = { paddingLeft: `${indent * 1.5}rem` };
        const contentIndentStyle = { paddingLeft: `${(indent + 1) * 1.5}rem` };
        return (
            <div>
                <div style={openingIndentStyle}>
                    <span style={{ color: "var(--profile-bracket)" }}>{"{"}</span>
                </div>
                <div>
                    {entries.map(([key, val], index) => (
                        <div key={key} style={contentIndentStyle}>
                            <span style={{ color: "var(--profile-key)" }}>&quot;{key}&quot;</span>
                            <span style={{ color: "var(--profile-bracket)", margin: "0 0.5rem" }}>
                                :
                            </span>
                            <JsonValue value={val} indent={indent + 1} />
                            {index < entries.length - 1 && (
                                <span style={{ color: "var(--profile-bracket)" }}>,</span>
                            )}
                        </div>
                    ))}
                </div>
                <div style={openingIndentStyle}>
                    <span style={{ color: "var(--profile-bracket)" }}>{"}"}</span>
                </div>
            </div>
        );
    }

    return <span>{String(value)}</span>;
}

export function JsonProfileViewer({ data }: { data: unknown }) {
    return (
        <div
            style={{
                fontFamily: "var(--font-geist-mono), 'Courier New', monospace",
                fontSize: "0.875rem",
                lineHeight: "1.6",
                width: "100%",
                maxWidth: "950px",
                color: "var(--profile-text)",
            }}
        >
            <JsonValue value={data} indent={0} />
        </div>
    );
}

