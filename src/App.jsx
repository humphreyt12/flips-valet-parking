// Importing app.css, the components and react-router-dom dependency 
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
// import Services from './components/services/Services';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
// import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="appContainer">
        <BrowserRouter>
        <section id ="Homepage">
           <Navbar />
        </section>   
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about/About' element={<About />} />
        <Route path='/contact/Contact' element= {<Contact />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
