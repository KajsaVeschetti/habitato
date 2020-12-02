import { render } from "@testing-library/react";
import React, { Component } from "react";
import CommentAdd from './CommentAdd';
import CommentGroup from './CommentGroup';


class CommentList extends Component {

    render(){
  
      return(
        <div>
          {/* {list.map((item) => (
           <p>{item.name}</p>
          ))
        } */}
  
        </div>
      );
  
    }
  }
  



// export default function Comment(props) {
//     const { name, message, time } = props.comment;
  
//     return (
//       <div>
        
//         <div >
//           <small >{time}</small>
//           <h6 >{name}</h6>
//           {message}
//         </div>
//       </div>
//     );
//   }

// class Comment extends Component {
//     constructor(props) {
//     super(props);
// }
//     render() {
//         const {body} = this.props;
//         return (
//             <div>
//                {body}
//             </div>
//         );
//     }
// }





export default CommentList;