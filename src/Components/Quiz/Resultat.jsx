import React from "react";
import Facit from "./Facit"


const Resultat = ({score, playAgain }) => 
<div>
    <div> Du fick {score} av 10 möjliga </div>
    <button onClick={playAgain}>Gör om Quiz</button>
    <Facit />

</div>

export default Resultat;