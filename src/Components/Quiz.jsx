import React, { useState } from 'react';



export default function Quiz() {
    const questions = [
        {
            question: 'Hur många jordklot skulle behövas om alla levde som medelsvensken?',
            answerOptions: [
                { question: '2', answer: false },
                { question: '3', answer: true },
                { question: '4', answer: false },
            ],
        },
        {
            question: 'En vuxen svensk släpper årligen i genomsnitt ut 4400 kg växthusgaser. Hur mycket släpper en flygresa t.o.r Thailand ut per person?',
            answerOptions: [
                { question: '8 800 kg koldioxid', answer: false },
                { question: '5 700 kg koldioxid', answer: true },
                { question: '6 500 kg koldioxid', answer: false },
            ],
        },
        {
            question: 'Palmolja framställs i huvudsak ur palmodlingar på skövlad regnskogsmark. Vad är den vanligaste innehållsbeteckningen för palmolja?',
            answerOptions: [
                { question: 'Vegetabiliskt fett', answer: true },
                { question: 'Palmolja', answer: false },
                { question: 'Anges ej', answer: false },
            ],
        },
        {
            question: 'Vilket av följande länder släpper ut mest koldioxid per invånare?',
            answerOptions: [
                { question: 'Sverige', answer: false },
                { question: 'Kina', answer: false },
                { question: 'Finland', answer: true },
            ],
        },
    ];
//  så att [indxnr] kan bytas ut mot [currentQuestion]
	const [currentQuestion, setCurrentQuestion] = useState(0);
	
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

	// event till knappen som tar en vidare till nästa fråga
    const handleAnswerOptionClick = (answer) => {
        if (answer) {
			setScore(score + 1);
			// lägg till 1p vid rätt
    } 
// För att inte få error när det inte finns fler frågor
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
			// visa resultat när sista frågan är hämtad
            setShowScore(true);
        }
    };
    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>

                    {/* Grön Dina poäng-skylt */}
                     <div class="alert alert-success" role="alert"><h1 class="display-4">Du fick {score} av {questions.length} möjliga</h1>
</div>
                    
                     <br></br>
                     {/* länkar */}
                     <a>Vill du testa att göra quizet igen?</a>
                     <p>Eller vill du läsa om de rätta svaren?</p>




    
                </div>
            ) : (
                <> 
                    <div className='question-section'>
                        <div className='question-count'>
                        {/* Quiz-rubrik */}
            <h1 class="display-4"> Habitatos miljö-quiz</h1>
                            <span>Fråga {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div> 
                    </div>
                    <div className='answer-section'>
						{/* mapfunktion för att itterera över array */}
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button type="button" class="btn btn-success" onClick={() => handleAnswerOptionClick(answerOption.answer)}>{answerOption.question}</button>
							))} 
                            
                            
                    </div>
                </>
            )} 
        </div>
    );
} 
