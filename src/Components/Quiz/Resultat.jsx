import React from "react";
import Facit from "./Facit"
import { Button } from 'react-bootstrap';




//const med vad som ska visas när vy visas
//score, play again och responses har deklarerats i quizkomponent

//rad 22 visar knapp som kör funktion play again som deklarerats i quizkomponent.
//rad 24 infogar facit-komponent


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