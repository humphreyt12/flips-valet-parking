import './app.css';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <div className="homepage">
      <Navbar />
      <Contact />
      <About />
    </div>
  );
}

export default App;
