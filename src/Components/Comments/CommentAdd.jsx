import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';



class CommentAdd extends Component {
  constructor(props) {        // Constructorn visar hur objektet byggs
    super(props);
    this.state = {
      name: "",
      comment: "",
      commentList: [],
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeComment = this.handleChangeComment.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeComment(event) {
    this.setState({ comment: event.target.value });
  }
  handleSubmit(event) {     // Säger vad som ska hända när man trycker på knappen
    this.state.commentList.push({
      name: this.state.name,
      comment: this.state.comment,
    });
    this.setState(this.state.commentList);
    // alert("Din kommentar är publicerad: " + "Namn: " + this.state.name + " Kommentar: " + this.state.comment);
    event.preventDefault();
  }

  render() {

    return (
      <div className="commentComponentStyle">
        <h2>Dela med dig av ditt bästa miljötips!</h2>
        <div className="commentComponentGridStyle">
            <form 
            className="commentComponentFormStyle"
            onSubmit={this.handleSubmit}>
              <label>
                Namn: 
                <br />
                <input 
                  className="commentInputAreaStyle"
                  type="text" 
                  value={this.state.name}
                  onChange={this.handleChangeName}
                  required
                />
              </label>{" "}
              <br />
              <label>
                Kommentar:
                <br />
                <textarea
                  className="commentInputAreaStyle"
                  value={this.state.comment}
                  onChange={this.handleChangeComment} 
                  required
                />
              </label>
              <br />
              <Button as="input" type="submit" variant="info" size="sm" value="Skicka kommentar"></Button>
              {/* <input 
              style={commentInputBtnStyle}
              type="submit" 
              value="Skicka kommentar" /> */}
            </form>
        
          <div className="commentDisplayStyle" >
            {this.state.commentList.map((item) => (       // skriver ut kommentaren, {item.name}&{item.comment} tar value från formuläret och skriver ut det
              <div className="commentContainer">
                <p>
                  <div className="commentDisplayNameStyle" >
                  {item.name} 
                  </div>            
                
                  <div className="commentDisplayCommentStyle" >
                  {item.comment}
                  </div>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default CommentAdd;



// TEST 2 --------------------------------------------------TEST 2

// const Test = (props) => (
// <div>
// <p className="App-test">
//     heeej
//   </p>
// </div>
// )

// function CommentAdd(props) {
//     // let comment = '';
//     const [comment, setComment] = useState('');
//     return (
//         <div>
//             <div className="card mt-4 mb-3">
//                 <div className="card-body">
//                     <textarea name="comment" className="form-control" placeholder="Skriv en ny kommentar"
//                     onChange={event => comment = setComment(event.target.value)} value ={comment}></textarea>
//                 </div>
//             </div>
//             <div>
//                 <button className="btn btn-primary mr-3" onClick={event =>{
//                     handleCommentSubmit(comment);
//                 setComment('');
//                 }}>Kommentera</button>
//                 <button className="btn btn-warning">Close issue</button>
//             </div>
//         </div>
//     );
// }

// TEST 2 --------------------------------------------------TEST 2
// TEST 3 --------------------------------------------------TEST 3

// class Comments extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }
//   handleSubmit(event) {
//     alert("Din kommentar är publicerad: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <div>
//         <h2>Dela med dig av ditt bästa miljötips!</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Namn:
//             <br/>
//             <input
//               type="text"
//               value={this.state.value}
//               onChange={this.handleChange}
//             />
//           </label>{" "}
//           <br/>
//           <label>
//             Kommentar:
//             <br/>
//             <textarea value={this.state.value}  onChange={this.handleChange} />
//           </label>
//           <br/>
//           <input type="submit" value="Skicka kommentar" />
//         </form>
//         <Test/>
//       </div>
//     );
//   }
// }


// export default CommentList;

// TEST 3 --------------------------------------------------TEST 3

// kodinspiration från https://reactjs.org/docs/forms.html

// https://stackoverflow.com/questions/26505064/what-is-the-best-way-to-add-a-value-to-an-array-in-state

// https://www.w3schools.com/react/react_forms.asp

// https://reactjs.org/docs/forms.html

// https://www.qcode.in/learn-react-by-creating-a-comment-app/

// https://stackoverflow.com/questions/53106250/react-js-user-enters-value-in-the-input-field-on-button-click-to-display-the-val

// https://stackoverflow.com/questions/54256701/how-to-highlight-empty-mandatory-input-field-with-red-border-click-on-button

