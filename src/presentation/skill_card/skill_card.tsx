import { Card, Col } from "react-bootstrap"

interface SkillCardProps {
    name: string
    emoji: string,
    description: string
}

export const SkillCard = (props: SkillCardProps) => {
    return (
        <Col xs={12} md={6} xl={4} className="p-3">
            <Card>
                <h1 className="text-center p-4">{props.emoji}</h1>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.description}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}