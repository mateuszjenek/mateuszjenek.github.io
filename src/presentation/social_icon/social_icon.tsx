import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./social_icon.css"

export const SocialIcon = (props: SocialIconProps) => {
    return (
        <a href={props.href} target="_blank"><FontAwesomeIcon className="social-icon" size="2x" icon={props.icon} /></a>
    )
}

interface SocialIconProps {
    icon: IconProp
    href: string
}