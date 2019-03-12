import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Jumbotron,
    Container
} from 'reactstrap';
import "./Lander.css";


class Lander extends Component {
    renderNotes = () => {
        return this.props.notes.map((note) => (
            <div key={note.content} className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
        ));
    }

    render() {
        return (
        <div>
            {/* {this.renderNotes()} */}
            <Jumbotron className="jumbotron-main" fluid> 
                <Container fluid>
                    <h1>Notes go here</h1>
                </Container>               
            </Jumbotron>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
    }
}

export default connect(mapStateToProps)(Lander);