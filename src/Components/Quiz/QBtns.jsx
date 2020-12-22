import React, { useState } from "react";
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const QBtns = ({ question, options, selected }) => {
    // state kan bara användas i class. UseState returns en array inte objekt
    const [answer, setAnswer] = useState(options); //här gör det så att man kan använda statevariabeln i en funktionen.
    return (
        <div>
            <div>{question}</div>
                <div class="questWrap">
                    {/* mappar ut knappar */}
                {answer.map((text) => (
                    <Button class="btnWrap" variant="info" size="sm" onClick={() => {
                        setAnswer([text]);
                        selected(text);
                    }}>
                        {text}
                    </Button>
                ))}
                </div>
        </div>
    )
}
export default QBtns;