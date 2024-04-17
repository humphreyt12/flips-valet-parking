// Importing app.css and the required sections for the app
import './app.scss';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div> 
      <section id ="Homepage">
         <Navbar />
         <Services />
      </section>
      <section id="About Our Company"><About /></section> 
      <section id="Contact"><Contact/></section>
    </div>
  );
}

export default App;
