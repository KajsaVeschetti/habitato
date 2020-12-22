import React, { Component } from "react";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


// const HeartIcon = <FontAwesomeIcon icon={faCoffee} />

class LikeButton extends React.Component {
    
    state = {
    likes: 0
  };
  

  
  addLike = () => {
    let newCount = this.state.likes + 1;
      this.setState({
      likes: newCount
    });
    
  };



  
  render() {
	
      return (
      <div>
        <button 
          className="likeButton" 
          onClick={this.addLike} > <FontAwesomeIcon icon={farHeart} />
          {this.state.likes} 
        </button>
      </div>
      );
  }
}
    





//  ---------------------- NYTT TEST from codepen -------------------


// class LikeButton extends React.Component {
//   state = {
//     likes: 0
//   };

//   addLike = () => {
//     let newCount = this.state.likes + 1;
//      this.setState({
//      likes: newCount
//      });
//   };

//   render() {
//     const likes = this.state.likes;
//     if (likes === 0) {
//       return (
//         <div>
//           <button
//             className="button"
//             onClick={this.addLike}
//           >
//             <i className="far fa-heart fa-lg" style={{ color: "#33c3f0" }}></i>
//           </button>
//         </div>
//       );
//     }
//     if (likes === 1) {
//       return (
//         <div>
//           <button className="button" onClick={this.addLike}>
//             <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>
//           </button>
//         </div>
//       );
//     }
//     if (likes > 1) {
//       return (
//         <div>
//           <button className="button" onClick={this.addLike}>
//             <i className="fas fa-heart fa-lg" style={{ color: "red" }}></i>{" "}
//             {likes}
//           </button>
//         </div>
//       );
//     }
//   }
// }

   
        export default LikeButton;



        // https://medium.com/javascript-in-plain-english/creating-a-reusable-like-button-component-in-react-8028d17c024c
        // https://stackoverflow.com/questions/59091882/how-can-i-use-outlined-icons-with-react-fontawesome
        