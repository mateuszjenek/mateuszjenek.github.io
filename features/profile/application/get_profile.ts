import { fetchProfile } from "../infrastructure/profile_source";

export function getProfile() {
    return fetchProfile();
}