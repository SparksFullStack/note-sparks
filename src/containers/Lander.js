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
                    <h2 className="lander--header">notes</h2>
                    <hr className="lander--hr" />
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