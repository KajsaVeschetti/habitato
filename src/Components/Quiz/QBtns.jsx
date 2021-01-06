import React, { useState } from "react";
import { Button } from 'react-bootstrap';



const QBtns = ({ question, options, selected }) => {
    // state kan bara användas i class. UseState returns en array inte objekt
    const [answer, setAnswer] = useState(options); //här gör det så att man kan använda statevariabeln i en funktionen.
    const [alreadyAnswered, setAlreadyAnswered] = useState(0);

    return (
        <div>
            <div className="abc">{question}</div>
            <div className="questWrap">
                {/* mappar ut knappar */}
                {answer.map((text) => (
                    <Button className="btnWrap" variant="info" size="block" onClick={() => {
                        if (!alreadyAnswered) {
                            setAnswer([text]);
                            selected(text);
                            setAlreadyAnswered(1);
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