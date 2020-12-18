import React, { Component } from "react"
import { getQuestions } from "./questions"

class Quiz extends Component {
    state = {
        // array med namnet: questionArray. Här hamnar frågorna när man hämtat dom från filen
        questionArray:[]
    }
    getQuestions = () => {
    questions().then(question => {
        this.setState({
            questionArray: question
        })
    })
 }
     async componentDidMount () {
        this.setState({
            questionArray: getQuestions(),
        });
    }
    render() { 
        return ( 
            <div className="container">
                <div className="title">Habitatos miljöquiz!</div>
                {this.state.questionArray.length > 0 && this.state.questionArray.map(({question, correct_answer, incorrect_answer}) => <h4>{question}</h4>
                )}
            </div>
         );
    }
}
 
export default Quiz;