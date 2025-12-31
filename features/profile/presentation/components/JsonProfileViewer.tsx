"use client";

import React, { useMemo, useState } from "react";

function isUrl(str: string): boolean {
    try {
        const url = new URL(str);
        return url.protocol === "http:" || url.protocol === "https:";
    } catch {
        return false;
    }
}

function FoldIcon({ open }: { open: boolean }) {
    return (
        <span
            aria-hidden="true"
            style={{
                display: "inline-block",
                width: "1.2ch",
                marginRight: "0.4ch",
                opacity: 0.75,
                color: "var(--profile-bracket)",
            }}
        >
            {open ? "▾" : "▸"}
        </span>
    );
}

function JsonValue({
    value,
    indent = 0,
    hasTrailingComma = false,
}: {
    value: unknown;
    indent?: number;
    hasTrailingComma?: boolean;
}) {
    const [open, setOpen] = useState(true);
    const pad = "  ".repeat(indent);

    const Comma = hasTrailingComma ? (
        <span style={{ color: "var(--profile-bracket)" }}>,</span>
    ) : null;

    if (value === null) {
        return (
            <>
                <span style={{ color: "var(--profile-null)" }}>null</span>
                {Comma}
            </>
        );
    }

    if (value === undefined) {
        return (
            <>
                <span style={{ color: "var(--profile-null)" }}>undefined</span>
                {Comma}
            </>
        );
    }

    if (typeof value === "string") {
        const content = isUrl(value) ? (
            <a
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "var(--profile-link)",
                    textDecoration: "none",
                    wordBreak: "break-all",
                    overflowWrap: "anywhere",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--profile-link-hover)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--profile-link)")}
            >
                &quot;{value}&quot;
            </a>
        ) : (
            <span style={{ color: "var(--profile-string)" }}>&quot;{value}&quot;</span>
        );

        return (
            <>
                {content}
                {Comma}
            </>
        );
    }

    if (typeof value === "number") {
        return (
            <>
                <span style={{ color: "var(--profile-number)" }}>{value}</span>
                {Comma}
            </>
        );
    }

    if (typeof value === "boolean") {
        return (
            <>
                <span style={{ color: "var(--profile-boolean)" }}>{String(value)}</span>
                {Comma}
            </>
        );
    }

    if (Array.isArray(value)) {
        if (value.length === 0) {
            return (
                <>
                    <span style={{ color: "var(--profile-bracket)" }}>[]</span>
                    {Comma}
                </>
            );
        }

        if (!open) {
            return (
                <>
                    <button type="button" onClick={() => setOpen(true)} className="em-fold">
                        <FoldIcon open={false} />
                    </button>
                    <span style={{ color: "var(--profile-bracket)" }}>[</span>
                    <span style={{ color: "var(--profile-null)" }}>…</span>
                    <span style={{ color: "var(--profile-bracket)" }}>]</span>
                    {Comma}
                </>
            );
        }

        return (
            <>
                <button type="button" onClick={() => setOpen(false)} className="em-fold">
                    <FoldIcon open />
                </button>
                <span style={{ color: "var(--profile-bracket)" }}>[</span>
                {"\n"}
                {value.map((item, idx) => (
                    <React.Fragment key={idx}>
                        {pad}  <JsonValue value={item} indent={indent + 1} hasTrailingComma={idx < value.length - 1} />
                        {"\n"}
                    </React.Fragment>
                ))}
                {pad}
                <span style={{ color: "var(--profile-bracket)" }}>]</span>
                {Comma}
            </>
        );
    }

    if (typeof value === "object") {
        const entries = Object.entries(value as Record<string, unknown>);

        if (entries.length === 0) {
            return (
                <>
                    <span style={{ color: "var(--profile-bracket)" }}>{"{}"}</span>
                    {Comma}
                </>
            );
        }

        if (!open) {
            return (
                <>
                    <button type="button" onClick={() => setOpen(true)} className="em-fold">
                        <FoldIcon open={false} />
                    </button>
                    <span style={{ color: "var(--profile-bracket)" }}>{"{"}</span>
                    <span style={{ color: "var(--profile-null)" }}>…</span>
                    <span style={{ color: "var(--profile-bracket)" }}>{"}"}</span>
                    {Comma}
                </>
            );
        }

        return (
            <>
                <button type="button" onClick={() => setOpen(false)} className="em-fold">
                    <FoldIcon open />
                </button>
                <span style={{ color: "var(--profile-bracket)" }}>{"{"}</span>
                {"\n"}
                {entries.map(([key, val], idx) => (
                    <React.Fragment key={key}>
                        {pad}  <span style={{ color: "var(--profile-key)" }}>&quot;{key}&quot;</span>
                        <span style={{ color: "var(--profile-bracket)" }}>: </span>
                        <JsonValue value={val} indent={indent + 1} hasTrailingComma={idx < entries.length - 1} />
                        {"\n"}
                    </React.Fragment>
                ))}
                {pad}
                <span style={{ color: "var(--profile-bracket)" }}>{"}"}</span>
                {Comma}
            </>
        );
    }

    return (
        <>
            <span style={{ color: "var(--profile-text)" }}>{String(value)}</span>
            {Comma}
        </>
    );
}

export function JsonProfileViewer({ data, wrap = true }: { data: unknown; wrap?: boolean }) {
    const wrapStyles = useMemo<React.CSSProperties>(
        () =>
            wrap
                ? { whiteSpace: "pre-wrap", wordBreak: "break-word", overflowWrap: "anywhere" }
                : { whiteSpace: "pre" },
        [wrap]
    );

    return (
        <div className="em-shell">
            <div className="em-menubar">
                <span className="em-title">*profile.json*</span>
                <span className="em-minibuf" aria-hidden="true">
                    M-x json-viewer
                </span>
            </div>

            <div className="em-editor" style={wrapStyles}>
                <JsonValue value={data} />
            </div>

            <div className="em-modeline" aria-hidden="true">
                <span>JSON  (Fundamental)</span>
                <span>UTF-8</span>
            </div>

            <style jsx>{`
                .em-shell {
                    width: 100%;
                    max-width: 950px;
                    border-radius: 10px;
                    overflow: hidden;
                    background: var(--profile-bg);
                    border: 1px solid color-mix(in srgb, var(--profile-text) 16%, transparent);
                    font-family: var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                        "Liberation Mono", "Courier New", monospace;
                }

                .em-menubar {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 8px 10px;
                    background: color-mix(in srgb, var(--profile-text) 6%, transparent);
                    border-bottom: 1px solid color-mix(in srgb, var(--profile-text) 14%, transparent);
                }

                .em-title,
                .em-minibuf {
                    font-size: 12px;
                    color: color-mix(in srgb, var(--profile-text) 80%, transparent);
                    user-select: none;
                }

                .em-editor {
                    padding: 12px;
                    color: var(--profile-text);
                    font-size: 0.875rem;
                    line-height: 1.7;
                    overflow: auto;
                }

                .em-modeline {
                    display: flex;
                    justify-content: space-between;
                    padding: 7px 10px;
                    background: color-mix(in srgb, var(--profile-text) 8%, transparent);
                    border-top: 1px solid color-mix(in srgb, var(--profile-text) 14%, transparent);
                    font-size: 12px;
                    color: color-mix(in srgb, var(--profile-text) 78%, transparent);
                    user-select: none;
                }

                .em-fold {
                    background: transparent;
                    border: none;
                    padding: 0;
                    margin: 0 0.2rem 0 0;
                    cursor: pointer;
                }

                .em-editor :global(*)::selection {
                    background: color-mix(in srgb, var(--profile-text) 22%, transparent);
                }

                @media (max-width: 480px) {
                    .em-editor {
                        padding: 10px;
                        font-size: 0.84rem;
                    }
                    .em-minibuf {
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}
