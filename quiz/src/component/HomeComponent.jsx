import React, { Component } from 'react';
import './HomeComponent.css'
import QuizComponent from './QuizComponent';

class HomeComponent extends Component {
    render() {
        return (
            <React.Fragment>
            <div id='quiz-main'>
                <h1>Quiz App</h1>
                <button id='play-button' onClick={<QuizComponent/>}>Play</button>
                
            </div>
            </React.Fragment>
        );
    }
}

export default HomeComponent;