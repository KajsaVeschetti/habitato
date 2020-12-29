import React, { Component } from "react";
import { Button, Container } from 'react-bootstrap';
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



class LikeButton extends React.Component {
  
  state = {
    likes: 0
    
  };

 
  addLike = () => {
    let newCount = this.state.likes + 1;
      this.setState({
      likes: newCount,
      bgColor: 'red'
    });
  
  
}





  render() {

      return (
      // <div>
      //   <Button className="likeButton" 
      //       > <FontAwesomeIcon icon={faHeart} onClick={this.addLike}  />
      //     {this.state.likes} 
      //   </Button>
      // </div>


        <Container className="likeBtnContainer">
          <FontAwesomeIcon icon={faHeart} 
          onClick={this.addLike} 
          className="likeBtnIcon" style={{color:this.state.bgColor}} />
          <span>
           {this.state.likes} </span>
          
        </Container>

      );
  }
}
    

export default LikeButton;











//  ---------------------- TEST 5 -------------------


  // getInitialState = () => {
  //   return {
  //     bgColor: 'red'
  //   }
    
  // }
  
  // handleClick = () => {
  //   this.setState({
  //     bgColor: 'red'
  //   })
  // }
  
  // render : function() {
  //   return (
  //     <div>
  //       <button 
  //         onClick={this.handleClick} 
  //         style={{backgroundColor:this.state.bgColor}}>Button</button>
  //     </div>
  //   )
  // }


// ReactDOM.render(
//   <ButtonColor />,
//     document.getElementById('button')
// );


//  ny sektion test


//  ---------------------- TEST 3 -------------------

// class LikeButton extends React.Component {
//   state = {
//   likes: 0
  
// };



// addLike = () => {
//   let newCount = this.state.likes + 1;
//     this.setState({
//     likes: newCount
//   });


// }



// render() {

//   const activeLike = {
//     color: "#17A2B8",
    
//   }


//     return (
    // <div>
    //   <Button className="likeButton" 
    //       > <FontAwesomeIcon icon={faHeart} onClick={this.addLike}  />
    //     {this.state.likes} 
    //   </Button>
    // </div>
//       <Container className="likeBtnContainer">
//         <FontAwesomeIcon icon={faHeart} onClick={this.addLike} className="likeBtnIcon" /><span>
//          {this.state.likes} </span>
//       </Container>

//     );
// }
// }
  


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

   
   



        // https://medium.com/javascript-in-plain-english/creating-a-reusable-like-button-component-in-react-8028d17c024c
        // https://stackoverflow.com/questions/59091882/how-can-i-use-outlined-icons-with-react-fontawesome
        // https://stackoverflow.com/questions/56935208/change-the-color-when-onclick-with-react
        // https://forum.freecodecamp.org/t/react-js-i-need-a-button-color-to-change-onclick-but-cannot-determine-how-to-properly-set-and-change-state-for-that-component/45168/2
        // 