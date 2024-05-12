// Importing app.css, the components and react-router-dom dependency
import "./app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

// Importing the pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <div className="appContainer">
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
    </div>
  );
};

export default App;
