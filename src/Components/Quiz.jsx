import React, { useState } from 'react';

export default function HaQuiz() {
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
                     Du fick {score} av {questions.length} möjliga
          

					 <h1>Facit</h1>

<h2>Fråga 1</h2>
<b>Rätt svar: 3 jordklot</b>
<p>Om man skulle dela upp jordens produktiva yta på antalet människor på jorden, så skulle var och en av oss få 1,8 globala hektar till vårt förfogande. Vi svenskar gör ett genomsnittligt ekologiskt fotavtryck på 5,9 globala hektar och ligger på 13e plats på listan över länder med störst fotavtryck per person. Om resten av världens befolkning skulle göra lika stora avtryck, behöver vi drygt 3 jordklot i stället för det enda vi har. Vi överutnytttjar naturens grundläggande resurser. Ett överuttag som underminerar våra barnbarns och hela vår civilisations framtid. (Källa WWF)</p>

<h2>Fråga 2</h2> 
<b>Rätt svar: 5 700 kg koldioxid</b>
<p>Enligt Internationella klimatpanelen står flyget globalt sett för omkring två procent av de totala utsläppen av koldioxid. Flyget är det transportmedel som ökar snabbast över hela världen. Inte minst genom den globala turistindustrin. Räknar man även in effekterna av andra växthusgaser främst vattenånga och kväveoxider på hög höjd samt påverkan från kondensstrimmor blir flygets totala klimatpåverkan ungefär dubbelt så stor. Flygets totala klimatpåverkan är fortfarande osäker. (Källa Transportstyrelsen, Atmosfair )
</p>

<h2>Fråga 3</h2>
<b>Rätt svar: Vegitabilisk fett</b>
<p>Palmoljeodlingarna sker framförallt på mark från skövlad regnskog. De senaste 100 åren har mer än hälften av den tropiska regnskogen försvunnit, samtidigt som palmoljeodlingarna har tredubblats under de senaste 30 åren. Idag kan allt från chips och glass till tvål och smink innehålla palmolja. Den pågående skövlingen av världens skogar har stor klimatpåverkan och kan liknas vid förbränningen av fossila bränslen (olja, kol och fossilgas). (Källa: WWF).</p>

<h2>Fråga 4</h2> 
<b>Rätt svar: Finland</b>
<p>Sverige skulle ligga betydligt högre upp på rankinglistan om vi i utgick från konsumtion istället för produktion. Det mesta i vår livsstil – vad vi äter, klär oss i, möblerar med, förflyttar oss med, snackar i, twittrar, zappar, facebookar, googlar och skriver på – är tillverkat utomlands. Främst i utvecklingsländer som Kina och Indien vilka indirekt får stå för våra utsläpp. (Källa CDIAK – US department of Energy´s Carbon Dioxide Information Analysis Center)</p> 

          
                </div>
            ) : (
                <> 
                    <div className='question-section'>
                        <div className='question-count'>
            <h1>Testa dina kunskaper om klimatförändringar med Habitatos miljö-quiz</h1>
                            <span>Fråga {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].question}</div> 
                    </div>
                    <div className='answer-section'>
						{/* mapfunktion för att itterera över array */}
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.answer)}>{answerOption.question}</button>
							))}
                    </div>
                </>
            )} 
        </div>
    );
} 
