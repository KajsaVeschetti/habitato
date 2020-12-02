import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "./Components/Page";
import NavBar from './Components/NavBar';
import Quiz from './Components/Quiz';
import Footer from './Components/Footer';
import AllCharts from './Components/Charts/AllCharts';
import Tips from './Components/Tips';
import Test from './Components/Test';
import Comments from './Components/Comments';
import FaktaRutor from './Components/FaktaRutor';



class App extends Component{


  render(){
    return (
      <div className="App">
        <NavBar/>
       <Tips/>
       {/* <Test/> */}
      <AllCharts/>
      <Comments />
      <FaktaRutor/>
      <Quiz/>
      <Footer/>

      </div>
    );
  }
}


export default App;
