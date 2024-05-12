// Importing app.css, the components and react-router-dom dependency
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Media from 'react-media';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Importing the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="appContainer">
      {/* Media Inquiries for Differnt Size Screens */}
      <ThemeProvider 
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint="xxs"
      >
      <Media query="(min-width: 600px">
        {/*Browser Router allows the app to navigate through the pages  */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* The Footer */}
        <Footer />
      </BrowserRouter>
      </Media>
      </ThemeProvider>
    </div>
  );
};

export default App;
