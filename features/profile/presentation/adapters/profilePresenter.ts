import { Profile } from "../../domain/profile";
import { ProfileViewModel } from "../view-models/ProfileViewModel";

/**
 * Adapter that maps domain Profile to presentation view model.
 * Currently a simple pass-through, but maintains clean architecture boundary.
 */
export function toProfileViewModel(profile: Profile): ProfileViewModel {
    return profile;
}

