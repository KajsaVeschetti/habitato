import { render } from "@testing-library/react";
import React, { Component } from "react";
import CommentAdd from './CommentAdd';


class CommentGroup extends Component {
   render(){
      return(
        <div>
            <CommentAdd />
        </div>
      );
    }
  }


export default CommentGroup;



// class CommentGroup extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             comments: [
//                 {id: 1, body: 'My first comment'}, 
//                 {id: 2, body: 'My second comment'}
//             ]
//         }
//     }
//     handleCommentSubmit(data) {
//         const postData = {
//             comment:data
//         };
//      );
//     }

//     renderComments() {
//         const {comments} = this.state;
//         return comments.map(comment => {
//             const {id, body} = comment;
//             return (
//                 <Comment key={id} body={body} />
                
//             );
//         } )
//     }
//     render() {
//         return (
//             <div>
//                 {this.renderComments()}
//                 <CommentAdd handleCommentSubmit={this.handleCommentSubmit} />
//             </div>
//         );
//     }
// }