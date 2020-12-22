import React from "react";
import Facit from "./Facit"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';




const Resultat = ({score, playAgain }) => 
<div class="contentWrap" >
    <div> 
        <h2>Du fick {score} av XX möjliga </h2> 
    </div>

    <div class="btnWrap">
        <Button variant="info" size="sm"onClick={playAgain}>Gör om Quiz</Button>
    </div>
    <Facit />
</div>

export default Resultat;