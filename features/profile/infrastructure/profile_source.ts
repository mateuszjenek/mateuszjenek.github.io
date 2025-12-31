import raw from "@/assets/mjenek.json";
import { Profile } from "../domain/profile";

type AnyRecord = Record<string, unknown>;

export function fetchProfile(): Profile {
    const input = getRawProfileJson();
    const record = asRecord(input);

    return {
        firstName: String(record.firstName),
        lastName: String(record.lastName),
        title: String(record.title),
        about: String(record.about),
        socials: Array.isArray(record.socials)
            ? record.socials.map((s: AnyRecord) => ({
                platform: String(s.platform),
                url: String(s.url)
            })) : [],
        personal_projects: Array.isArray(record.personal_projects)
            ? record.personal_projects.map((p: AnyRecord) => ({
                name: String(p.name),
                url: String(p.url),
                description: String(p.description)
            })) : [],
        experience: Array.isArray(record.experience)
            ? record.experience.map((e: AnyRecord) => ({
                company: String(e.company),
                role: String(e.role),
                duration: String(e.duration),
                description: String(e.description),
                tech_stack: Array.isArray(e.tech_stack) ? e.tech_stack.map(String) : undefined
            })) : [],
        skills: Array.isArray(record.skills)
            ? record.skills.map((s: AnyRecord) => ({
                name: String(s.name),
                category: String(s.category)
            })) : [],
    };
}

function getRawProfileJson() {
    return raw as unknown;
}

function asRecord(x: unknown): AnyRecord {
    if (!x || typeof x !== "object") throw new Error("Invalid resume.json root");
    return x as AnyRecord;
}
