import { Experience } from "./experience";
import { Project } from "./project";
import { Skill } from "./skill";
import { SocialLink } from "./social_link";

export type Profile = {
    firstName: string;
    lastName: string;
    title: string;
    about: string;
    socials: SocialLink[];
    personal_projects: Project[];
    skills: Skill[];
    experience: Experience[];
}