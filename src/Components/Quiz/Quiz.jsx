import React, { Component } from "react"
import { getQuestions } from "./questions"
import QBtns from "./QBtns"
import Resultat from "./Resultat"
import {Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Quiz extends Component {
    state = {
        // array med namnet: questionArray. Här hamnar frågorna när man hämtat dom från filen
        questionArray:[],
        score: 0,
        responses: 0
    }

// lifecykle metod. Tar in objekt och lägger i state
// funktionen ser om svar matchar med rätt svar och lägger till poång i statevariabel score
computeAnswer = (answer, correct_answer) => {
    if (answer  === correct_answer){
        this.setState({
            score: this.state.score +1
        });
    }
    // håller koll på hur många frågor användaren svarat på +1 oavsätt rätt eller fel *conditional (ternary) operator*
    this.setState({
        responses: this.state.responses < 9 ? this.state.responses + 1 : 9
    });
};

// Gör quiz igen. funktion nollställer poäng och svar
playAgain = () => {
    this.setState({
        score: 0,
        responses: 0
    })
}
     async componentDidMount () {
        this.setState({
            questionArray: getQuestions(),
        });
    }
    render() { 
        return ( 
            <Container className="charts col-lg-9">

            <div className="container">
                <h1>Habitatos miljöquiz</h1>
                {/* renderar data från state */}
                {this.state.questionArray.length > 0 && 
                this.state.responses < 9 &&
                // mapar genom data och delar upp information
                    this.state.questionArray.map(({question, correct_answer, incorrect_answer}) => 
                    // Props // renderar komponent med knappar
                    <QBtns question={question} 
                    options={correct_answer, incorrect_answer}
                    selected={answer => this.computeAnswer(answer, correct_answer)}
                />
                )}
                                {/* knappar försvinner och visar resultat */}

                {this.state.responses  === 9 ? (  <Resultat score={this.state.score} playAgain={this.playAgain} /> ) : null } 

            </div>
            </Container>

         );
    }
}
 export default Quiz;