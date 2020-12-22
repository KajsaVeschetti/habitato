import React, { useState } from "react";
import { Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



const QBtns = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div>
            <div>{question}</div>
                <div class="questWrap">
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