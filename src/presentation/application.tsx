import { Container, Row, Col } from "react-bootstrap";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

import { SkillCard } from "./skill_card/skill_card";
import { Hello } from "./hello/hello";
import { Introduction } from "./introduction/introduction";
import { SocialIcon } from "./social_icon/social_icon";
import { CoffeeMachine } from "./coffee_machine/coffee_machine";

export const Application = () => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={3} className="p-4">
                    <Hello />
                    <Introduction name="Mateusz Jenek" role="software engineer" />
                    <Row className="mt-5">
                        <Col className="text-center" xs={4}>
                            <SocialIcon icon={faGithub} href="https://github.com/mateuszjenek"/>
                        </Col>
                        <Col className="text-center"  xs={4}>
                            <SocialIcon icon={faLinkedin} href="https://www.linkedin.com/in/mateusz-jenek/"/>
                        </Col>
                        <Col className="text-center" xs={4}>
                            <SocialIcon icon={faEnvelope} href="mailto: mateusz.jenek@gmail.com"/>
                        </Col>
                    </Row>
                    <CoffeeMachine />
                </Col>
                <Col xs={12} md={8} className="p-4 offset-md-1">
                    <Row className="mt-4">
                        <SkillCard emoji="🌍" name="Language polyglot" description="I'm not stick to one programming language. I like to experiment and learning new things."  />
                        <SkillCard emoji="🌈" name="Inclusvie environment" description="I belive that in the group of engineers every idea should be considered and the best choosen by democracy." />
                        <SkillCard emoji="🛁" name="Clean code" description="Keeping code clean and simple make easier to implement new features and there are lower chanses for bugs. That's why KISS and DDD are my favourite aproches in programming" />
                        <SkillCard emoji="📖" name="Open for open source" description="Being part of opensource community drives a growth of new technologies and make it accessible to everyone, who want to create amazing solutions" />
                        <SkillCard emoji="⚙️" name="Agile" description="React fast on changing requirements is important approach in software development. SCRUM framework make that easy." />
                        <SkillCard emoji="📦" name="Product mided" description="" />
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
