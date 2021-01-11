import React, { useState } from "react";  //Importerar useState hook from React för att kunna använda useState i en funktion
import { Button } from 'react-bootstrap';


//Funktion för att få knappar till quiz
// Tar in objekt och lägger i state
//För att kunna använda statevariabeln i en funktion

//En boolean i state, ändras till true när användaren klickat på ett svar.

const QBtns = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options); 
    const [alreadyAnswered, setAlreadyAnswered] = useState(false);

    return (
        <div>
            <div className="wrap">{question}</div>
            <div className="questWrap">
                {/* mappar ut text på knappar */}
                {answer.map((text) => (
                    <Button className="btnWrap" variant="info" size="block" onClick={() => {
                        if (!alreadyAnswered) {
                            setAnswer([text]);
                            selected(text);
                            setAlreadyAnswered(true);
                        }
                    }}>
                        {text}
                    </Button>
                ))}
            </div>
        </div>
    )
}
export default QBtns;
