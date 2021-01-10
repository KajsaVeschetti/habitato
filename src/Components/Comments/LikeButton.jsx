import React from "react";
import {  Container } from 'react-bootstrap';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class LikeButton extends React.Component {
  state = {                                  // listar komponentens data som hanteras
  likes: 0                                   // state-objektets attribut
  };

  addLike = () => {                         // arrow function som räknar
    let newCount = this.state.likes + 1;    // varje gång addLike anropas plussas 1 på antalet
    this.setState({                         // listar komponentens data som hanteras
      likes: newCount,                      // lista med state-objektets attribut
      bgColor: '#EB2805'                    // sätter ny färg
    });
  }

  render() {
    return (
      <Container className="likeBtnContainer">
        <FontAwesomeIcon 
          icon={faHeart}                          // skriver ut hjärtikonen som importerats från fontawesome
          onClick={this.addLike}                  // vid klick anropas funktionen addLike
          className="likeBtnIcon" 
          title="Gillaknapp"
          style={{color:this.state.bgColor}}/>    {/* Vid klick anropas bgColor som byter färg på ikonen */}
        <span>
           {this.state.likes}                     {/* Skriver ut nytt antal likes från this.state.likes */}
        </span>
      </Container>
    );
  }
}
    
export default LikeButton;                        //exporterar LikeButton




// Referenser:

// https://medium.com/javascript-in-plain-english/creating-a-reusable-like-button-component-in-react-8028d17c024c

// https://stackoverflow.com/questions/59091882/how-can-i-use-outlined-icons-with-react-fontawesome

// https://stackoverflow.com/questions/56935208/change-the-color-when-onclick-with-react

// https://forum.freecodecamp.org/t/react-js-i-need-a-button-color-to-change-onclick-but-cannot-determine-how-to-properly-set-and-change-state-for-that-component/45168/2
