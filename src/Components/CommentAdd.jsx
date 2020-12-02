import { render } from "@testing-library/react";
import React,  { Component } from "react";
import CommentList from './CommentList';


// class CommentAdd extends Component {

//   render(){

//     return(
//       <div>


//         <p>hehe ADd</p>

//       </div>
//     );
//   }
// }


class CommentAdd extends Component {
      constructor(props) {
        super(props);
        // this.state = { 
        //   name: "", 
        //   comment: "",
        //   commentList: []
        // };
        this.state = this.props; 
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
      handleSubmit(event) {
        alert("Din kommentar är publicerad: " + "Namn: " + this.state.name + " Kommentar: " + this.state.comment);
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
            <h2>Dela med dig av ditt bästa miljötips!</h2>
            <form onSubmit={this.handleSubmit}>
              <label>
                Namn:
                <br/>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleChangeName}
                />
              </label>{" "}
              <br/>
              <label>
                Kommentar:
                <br/>
                <textarea value={this.state.comment}  onChange={this.handleChangeComment} />
              </label>
              <br/>
              <input type="submit" value="Skicka kommentar" />
            </form>
          </div>
        );
      }
    }

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

export default CommentAdd;
// export default CommentList;

// TEST 3 --------------------------------------------------TEST 3

// kodinspiration från https://reactjs.org/docs/forms.html




