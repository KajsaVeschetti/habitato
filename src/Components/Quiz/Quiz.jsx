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

//  Chris Blakely. (24 November 2020). React Quiz App Tutorial (w/ starter code + working example) | Beginner React Projects [Video]. YouTube. https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react/

// freeCodeCamp.org. (25 November 2020). React / Typescript Tutorial - Build a Quiz App.  [Video]. YouTube. https://www.youtube.com/watch?v=F2JCjVSZlG0&t=1077s

// geeksforgeeks. (28 December 2020). Create a Quiz App using ReactJS. https://www.geeksforgeeks.org/create-a-quiz-app-using-reactjs/?fbclid=IwAR3N1Ri5SSv9JeF-ZAK6QKsc3B7h4q0sgQ63JfjWuL3Z6jkHauxwLeTXrKI

// mitchgavan. (24 November 2020). Create a quiz with React https://mitchgavan.com/react-quiz/

// Mozilla. (14 December 2020). async function. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

// Mozilla. (17 december 2020). Conditional (ternary) operator. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// KnowledgeHut. (17 December 2020). Build a Quiz App From Scratch Using React Components | React Tutorial For Beginners | Knowledgehut. [Video]. YouTube. https://www.youtube.com/watch?v=aq-fCtg_gG4&t=1774s

// Rajdeep singh. (28 December 2020). Create Modern Quiz With React Js. https://officialrajdeepsingh.medium.com/create-modern-quiz-with-react-js-8902f34074db

// Sathishravi. (24 November 2020) How To Create A Quiz App in React. https://medium.com/javascript-in-plain-english/how-to-create-a-quiz-app-in-react-5a6fefa3a100

// sitepoint. (22 December 2020) Responsive Web Design Tips from Bootstrap's CSS. https://www.sitepoint.com/responsive-web-design-tips-bootstrap-css/

// stackoverflow. (6 januari 2020). How to toggle boolean state of react component? https://stackoverflow.com/questions/40359800/how-to-toggle-boolean-state-of-react-component

// geeksforgeeks. (22 December 2020) Meaning of numbers in “col-md-4”,“ col-xs-1”, “col-lg-2” in Bootstrap. https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/

// Logrocket . (14 december 2020). useState in React: A complete guide. https://blog.logrocket.com/a-guide-to-usestate-in-react-ecb9952e406c/#declaringstateinreacthttps://www.youtube.com/watch?v=Lya-qYiDqIA