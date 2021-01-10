import React, { Component } from "react"
import { getQuestions } from "./questions"
import QBtns from "./QBtns"
import Resultat from "./Resultat"
import {Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Quiz extends Component {
    state = {
        // array med namnet: questionArray. Här hamnar frågorna när man hämtat dom från filen. Här sparas även användarens resultat och antal svar man gjort med hjälp av funktionen nedan.
        questionArray:[],
        score: 0,
        responses: 0
    }

// Tar in objekt och lägger i state
// Ser om svar matchar med rätt svar och lägger till poång i statevariabel score
computeAnswer = (answer, correct_answer) => {
    if (answer  === correct_answer){
        this.setState({
            score: this.state.score +1
        });
    }
    
   //Räknar antal svar till statevariabel responses
    this.setState({
        responses: this.state.responses < 10 ? this.state.responses + 1 : 10 
    });
};

// Om användaren väljer att göra quizet igen. Funktionen nollställer poäng och svar
playAgain = () => {
    this.setState({
        score: 0,
        responses: 0
    })
}
//Funktion som hämtar frågor från js-filen och förvarar i state questionArray
     async componentDidMount () {
        this.setState({
            questionArray: getQuestions(),
        });
    }

    /* renderar quiz med hjälp av data från state */
    render() { 
        return ( 
            <Container className="charts col-lg-9">
            <div className="container">
                <h1>Habitatos miljöquiz</h1>
                <div className="chartContainer">
                {this.state.questionArray.length > 0 && 
                this.state.responses < 10 &&

                //mappar igenom information i js-fil och deklarerar vad som är vad
                //till komponentenen Qbtns

                //om antal svar är exakt 10 visas resultatkomponent.
                //Deklarerar vad som är vad för Resultatkomponent
                    this.state.questionArray.map(({question, correct_answer, answer}) => 
                    <QBtns question={question} 
                    options={correct_answer, answer} 
                    selected={answer => this.computeAnswer(answer, correct_answer)}/>
                )}
                {this.state.responses  === 10 ? (  <Resultat score={this.state.score} playAgain={this.playAgain} responses={this.state.responses} /> ) : null } 
                </div>   
            </div>
            </Container>

         );
    }
}
 export default Quiz;
