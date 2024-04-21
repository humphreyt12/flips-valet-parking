// Importing app.css, the components and react-router-dom dependency 
import './app.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import About from './components/about/About';
// import Contact from './components/contact/Contact';
function App() {
  return (
    <div className="appContainer">
        <BrowserRouter>
         <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />

        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
