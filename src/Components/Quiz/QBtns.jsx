import React, { useState } from "react";

const QBtns = ({ question, options, selected }) => {
    const [answer, setAnswer] = useState(options);
    return (
        <div>
            <div>{question}</div>
            {answer.map((text) => (
                <button onClick={() => {
                    setAnswer([text]);
                    selected(text);
                }}>
                    {text}
                </button>
            ))}
        </div>
    )
}
export default QBtns;