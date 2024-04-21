// Importing app.css and the required sections for the app
import './app.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
// import Contact from './components/Contact';
// import About from './components/About';
import Services from './components/services/Services';

function App() {
  return (
    <div> 
      <section id ="Homepage">
         <Navbar />
         <Hero />
      </section>
      <section id="Services"><Services/></section>
    </div>
  );
}

export default App;
