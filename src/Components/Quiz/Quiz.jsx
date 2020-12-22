// import React, { useState } from 'react';
// import Facit from './Facit';
// import { Button, Container } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
 
// export default function Quiz() {
//     const questions = [
 
//         {
//             question: 'Hur många jordklot skulle behövas om alla levde som medelsvensken?',
//             answerOptions: [
//                 { question: '2', answer: false },
//                 { question: '3', answer: true },
//                 { question: '4', answer: false },
//             ],
//         },
//         {
//             question: 'Vad menas med den förstärkta växthuseffekten?',
//             answerOptions: [
//                 { question: 'Jorden snurrar snabbare', answer: false },
//                 { question: 'Ökad upphettning i atmosfären', answer: true },
//                 { question: 'Ökad nedkylningen i atmosfären', answer: false },
//             ],
//         },
//         {
//             question: 'En vuxen svensk släpper årligen i genomsnitt ut 4400 kg växthusgaser. Hur mycket släpper en flygresa t.o.r Thailand ut per person?',
//             answerOptions: [
//                 { question: '8 800 kg koldioxid', answer: false },
//                 { question: '5 700 kg koldioxid', answer: true },
//                 { question: '6 500 kg koldioxid', answer: false },
//             ],
//         },
//         {
//             question: 'Förnybar energi ses som miljövänliga alternativ till fossila bränslen. Vad av följande är en förnybar energikälla?',
//             answerOptions: [
//                 { question: 'Kärnkraft', answer: false },
//                 { question: 'Solkraft', answer: true },
//                 { question: 'Kolkraft', answer: false },
//             ],
//         },
//         {
//             question: 'Palmolja framställs i huvudsak ur palmodlingar på skövlad regnskogsmark. Vad är den vanligaste innehållsbeteckningen för palmolja?',
//             answerOptions: [
//                 { question: 'Vegetabiliskt fett', answer: true },
//                 { question: 'Palmolja', answer: false },
//                 { question: 'Anges ej', answer: false },
//             ],
//         },
//         {
//             question: 'Hur mycket skulle havsnivån stiga om alla glaciärer smälter?',
//             answerOptions: [
//                 { question: '75 meter', answer: false },
//                 { question: '170 meter', answer: false },
//                 { question: '120 meter', answer: true },
//             ],
//         },
//         {
//             question: 'Vilket av följande val är klimatsmart?',
//             answerOptions: [
//                 { question: 'Äta kött', answer: false },
//                 { question: 'Flyga', answer: false },
//                 { question: 'Shoppa mindre', answer: true },
//             ],
//         },
//         {
//             question: 'Varför stiger havsnivåerna?',
//             answerOptions: [
//                 { question: 'Fuktigare klimat', answer: false },
//                 { question: 'Varmare klimat', answer: true },
//                 { question: 'Kallare klimat', answer: false },
//             ],
//         },
//         {
//             question: 'Vilket av följande länder släpper ut mest koldioxid per invånare?',
//             answerOptions: [
//                 { question: 'Sverige', answer: false },
//                 { question: 'Kina', answer: false },
//                 { question: 'Finland', answer: true },
//             ],
//         },
//     ];
 
// //  så att [indxnr] kan bytas ut mot [currentQuestion]
//     const [currentQuestion, setCurrentQuestion] = useState(0);
    
//     const [showScore, setShowScore] = useState(false);
//     const [score, setScore] = useState(0);
 
//     // event till knappen som tar en vidare till nästa fråga
//     const handleAnswerOptionClick = (answer) => {
//         if (answer) {
//             setScore(score + 1);
//             // lägg till 1p vid rätt
//     } 
// // För att inte få error när det inte finns fler frågor
//         const nextQuestion = currentQuestion + 1;
//         if (nextQuestion < questions.length) {
//             setCurrentQuestion(nextQuestion);
//         } else {
//             // visa resultat när sista frågan är hämtad
//             setShowScore(true);
//         }
//     };
    
//      const BtnStyle = {
//         fontFamily: "Quicksand",
//         fontSize: "15px",
//         color:"#1F1F1F",
//      }
 
 
//     return (
//         <Container className="charts" style={{width:"750px", padding: "0px"}}>
//         <div>
//              {/* Quiz-rubrik */}
//              <h1> Habitatos miljö-quiz</h1>
            
//             {showScore ? (
//                 <div className="chartContainer"  style={{width:"600px"}}>
//                     {/* Dina poäng */}
//                      <div>
//                          <h4>Du fick {score} poäng av {questions.length} möjliga!</h4>
//                          {/* Länk till facit-komponent */}
//                          <Facit/>
 
//                     </div>
//                 </div>
//             ) : (
//                 <div className="chartContainer"  style={{width:"600px"}}> 
//                     <div>
//                             <div>
                               
//                                 {/* Visar vilken fråga användaren är på */}
//                                     <span>Fråga {currentQuestion + 1}</span>/{questions.length}
//                             </div>
//                             {/* Frågan */}
//                             <p>{questions[currentQuestion].question}</p> 
//                     </div>
//                     {/* Slut på fråg-sekton */}
//                     <div>
//                         {/* mapfunktion för att itterera över array */}
//                         {/* Knappar med de olika svarsalternativen */}
//                         {questions[currentQuestion].answerOptions.map((answerOption) => (
//                             <Button style={BtnStyle} variant="info" size="lg" onClick={() => handleAnswerOptionClick(answerOption.answer)}>{answerOption.question}</Button>
//                             ))} 
//                     </div>
//                 </div>
//             )} 
//             </div>
        
//         </Container>
//     );
// } 













import React, { Component } from "react"
import { getQuestions } from "./questions"


class Quiz extends Component {
    state = {
        // array med namnet: questionArray. Här hamnar frågorna när man hämtat dom från filen
        questionArray:[]
    }
//     getQuestions = () => {
//     questions().then(question => {
//         this.setState({
//             questionArray: question
//         })
//     })
//  }
     async componentDidMount () {
        this.setState({
            questionArray: getQuestions(),
        });
    }
    render() { 
        return ( 
            <div className="container">
                <div className="title">Habitatos miljöquiz!</div>
                {this.state.questionArray.length > 0 && this.state.questionArray.map(({question, correct_answer, incorrect_answer}) => <h4>{question}</h4>
                )}
            </div>
         );
    }
}
 export default Quiz;