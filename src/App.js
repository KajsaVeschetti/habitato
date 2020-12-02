import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
<<<<<<< Updated upstream

import Page from './Components/Page';
=======
// import Page from "./Components/Page";
import NavBar from './Components/NavBar';
import Quiz from './Components/Quiz';
import Footer from './Components/Footer';
import AllCharts from './Components/Charts/AllCharts';
import Tips from './Components/Tips';
import Test from './Components/Test';
import CommentGroup from './Components/CommentGroup';
import FaktaRutor from './Components/FaktaRutor';
>>>>>>> Stashed changes



class App extends Component{


  render(){
    return (
      <div className="App">
<<<<<<< Updated upstream


      <Page/>
=======
        <NavBar/>
       <Tips/>
       <Test/>
      <AllCharts/>
      <CommentGroup />
      <FaktaRutor/>
      <Quiz/>
      <Footer/>
>>>>>>> Stashed changes

      </div>
    );
  }
}


export default App;
