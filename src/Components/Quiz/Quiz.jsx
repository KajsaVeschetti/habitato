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
// funktionen ser om svar matchar med rätt svar och lägger till poång i statevariabel score
computeAnswer = (answer, correct_answer) => {
    if (answer  === correct_answer){
        this.setState({
            score: this.state.score +1
        });
    }
    
    //*conditional (ternary) operator* Kort version av if else
   // ett villkor följt av ett frågtecken
   // Sen vad som ska utföras om villkoret är sant följt av kolon
   //till sist vad som ska utgföras om villkoret är falskt. 
   //*condition ? exprIfTrue : exprIfFalse*
   
    this.setState({
        responses: this.state.responses < 10 ? this.state.responses + 1 : 10 
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
                <div className="chartContainer">
                {this.state.questionArray.length > 0 && 
                this.state.responses < 10 &&
                    this.state.questionArray.map(({question, correct_answer, answer, questionId}) => 
                    <QBtns question={question} 
                    options={correct_answer, answer} key={questionId}
                    selected={answer => this.computeAnswer(answer, correct_answer)}
                />
                )}
{/* om antal responses är exakt 10 visa komponent resultat. 
Deklarerar vad state score, playAgian och responsens är. */}
                {this.state.responses  === 10 ? (  <Resultat score={this.state.score} playAgain={this.playAgain} responses={this.state.responses} /> ) : null } 
                </div>   
            </div>
            </Container>

         );
    }
}
 export default Quiz;
