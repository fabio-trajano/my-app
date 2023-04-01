import Heading from './components/Heading';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';
import Card from './components/Card';
import "./App.css";
import {Routes, Route} from 'react-router-dom'
import ReactPlayer from 'react-player';

function App() {

  function handleClick() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt('type a number');
    alert(`Computer number: ${randomNum}, Your guess: ${userInput}`);
  }

  const vidUrl = "https://www.youtube.com/watch?v=4LSHnxrbmFw";
  return (
    <div className="App">
      <Heading name="Fabio" />
      <Nav />
      <div>
        <h1>Task: Add a button and handle a click event</h1>
        <button onClick={handleClick}>Guess the number between 1 and 3</button>
      </div>
      <div>
        <Card h2="First card's h2" h3="First card's h3" />
        <Card h2="Second card's h2" h3="Second card's h3"/>
        <Card h2= "Third card's h2" h3="Third card's h3"/>
      </div>
      <ReactPlayer
        url={vidUrl}
        playing={false}
        volume={0.6}
      />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
