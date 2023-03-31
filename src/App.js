import Heading from './components/Heading';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
      <Heading />
      <Nav />
      <Intro1 />
      <Intro2 />
      <Intro3 />
      <Promo />
      <Footer />
    </div>
  );
}

export default App;
