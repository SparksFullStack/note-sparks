import React from 'react';
import { 
    Card, 
    CardText, 
    CardBody,
    CardTitle, 
    Button 
} from 'reactstrap';

import "./NoteCard.css";

const NoteCard = props => {
    const { note } = props;
    return (
        <Card className="notecard">
            <CardBody>
                <CardTitle>{note.title}</CardTitle>
                <CardText>{note.content}</CardText>
                <Button className="note--button" color="primary"><a href="#" style={{ textDecoration: 'none', color: "#fff" }} href="#">View</a></Button>
                <Button className="note--button"><a href="#" style={{ textDecoration: 'none', color: "#fff" }} href="#">Edit</a></Button>
            </CardBody>
        </Card>
    )
}

export default NoteCard;