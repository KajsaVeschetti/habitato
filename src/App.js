import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< HEAD
// import Page from "./Components/Page";
import NavBar from './Components/NavBar';
import Quiz from './Components/Quiz';
import Footer from './Components/Footer';
import AllCharts from './Components/Charts/AllCharts';
import Tips from './Components/Tips';
import CommentGroup from './Components/CommentGroup';
import FaktaRutor from './Components/FaktaRutor';
=======


import Page from './Components/Page';
>>>>>>> 48a3f8403fcbee83c9a26a3a9d9ef960a04c5019



class App extends Component{


  render(){
    return (
      <div className="App">
<<<<<<< HEAD
        <NavBar/>
       <Tips/>
       <CommentGroup />
      <AllCharts/>
      
      <FaktaRutor/>
      <Quiz/>
      <Footer/>

=======
      <Page/>
>>>>>>> 48a3f8403fcbee83c9a26a3a9d9ef960a04c5019
      </div>
    );
  }
}


export default App;
