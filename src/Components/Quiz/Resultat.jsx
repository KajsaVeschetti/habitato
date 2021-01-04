import React from "react";
import Facit from "./Facit"
import { Button } from 'react-bootstrap';





const Resultat = ({score, playAgain, responses }) => 
<div className="contentWrap" >
    <div> 
        <h2>Du fick {score} av {responses} möjliga </h2> 
    </div>

    <div className="btnWrap">
        <Button variant="info" size="sm"onClick={playAgain}>Gör om Quiz</Button>
    </div>
    <Facit />
</div>

export default Resultat;