import { render } from "@testing-library/react";
import React, { Component } from "react";



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
    const commentComponentStyle={
      background: "white",
      opacity: "80%",
      margin: "0 20%",
      padding: "2em",
    }
    const commentComponentGridStyle={
      display:"grid",
      gridTemplateColumns: "50% 50%",
    }

    const commentInputAreaStyle={
      margin: "0.5%",
      borderRadius: "7px",
    }
    
    const commentComponentFormStyle={
      gridColumn: "1",
    }

    const commentDisplayStyle={
      gridColumn: "2",
    }


    const commentDisplayNameStyle={
      textAlign: "left",
      fontWeight: "bold",
      marginTop: "2em", 
      marginBottom: "0em",
      padding: "0",
    }

    const commentDisplayCommentStyle={
      textAlign: "left",
      marginTop: "0",
      padding: "0",
    }

    const commentInputBtnStyle={
      color: "white",
      fontWeight: "bold",
      background: "#17A2B8",
      padding: "0.5em 1em",
    }

    return (
      <div style={commentComponentStyle}>
        <h2>Dela med dig av ditt bästa miljötips!</h2>
        <div style={commentComponentGridStyle} >
            <form 
            style={commentComponentFormStyle} 
            onSubmit={this.handleSubmit}>
              <label>
                Namn: 
                <br />
                <input 
                  style={commentInputAreaStyle}
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />
              </label>{" "}
              <br />
              <label>
                Kommentar:
                <br />
                <textarea
                  style={commentInputAreaStyle}
                  value={this.state.comment}
                  onChange={this.handleChangeComment}
                />
              </label>
              <br />
              <input 
              style={commentInputBtnStyle}
              type="submit" 
              value="Skicka kommentar" />
            </form>
        
          <div style={commentDisplayStyle}>
            {this.state.commentList.map((item) => (       // skriver ut kommentaren, {item.name}&{item.comment} tar value från formuläret och skriver ut det
              <div>
                <p>
                  <div style={commentDisplayNameStyle}>
                  {item.name} 
                  </div>            
                
                  <div style={commentDisplayCommentStyle} >
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


