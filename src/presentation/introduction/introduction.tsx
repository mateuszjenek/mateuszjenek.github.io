import "./introduction.css"

export const Introduction = (props: IntroductionProps) => {
    return (
        <span>
            <h3 className="introduction-text mt-4" style={{fontWeight: "200"}}>My name is</h3>
            <h1 className="introduction-text"      style={{fontWeight: "600"}}>{props.name}</h1>
            <h3 className="introduction-text mt-2" style={{fontWeight: "200"}}>I’m {props.role}</h3>
        </span>
    )
}

interface IntroductionProps {
    name: string,
    role: string
}