import React from 'react';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle, 
    Button 
} from 'reactstrap';

import "./NoteCard.css";

const NoteCard = props => {
    return (
        <Card className="notecard">
            <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button>Button</Button>
            </CardBody>
        </Card>
    )
}

export default NoteCard;