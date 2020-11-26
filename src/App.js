import './App.css';
import Header from "./Components/Header.jsx";
import Comments from "./Components/Comments.jsx";
import Information from "./Components/FaktaRutor.jsx";
import Quiz from "./Components/Quiz.jsx";
import Footer from "./Components/Footer.jsx";



function App() {
  return (
    <div className="App">
      <Header/>
      <Information/>
      <Comments/>
      <Quiz/>
      <Footer/>
    </div>
  );
}

export default App;
