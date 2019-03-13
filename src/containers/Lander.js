import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
    Jumbotron,
    Container
} from 'reactstrap';
import "./Lander.css";

import NoteCard from '../components/NoteCard';


class Lander extends Component {
    renderNotes = () => {
        return this.props.notes.map((note) => (
            <div key={note.content} className="note col-md-4 col-sm-6 col-lg-3">
                <NoteCard />
            </div>
        ));
    }

    render() {
        return (
        <div>
            <Jumbotron className="jumbotron-main" fluid> 
                <Container fluid>
                    <div className="jumbotron--header">
                        <h2 className="lander--header">notes</h2>
                    </div>
                    
                    
                    <div className="jumbotron--note-container row">
                        {this.renderNotes()}
                    </div>
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