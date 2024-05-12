//Importing the Hompage
import "./home.scss";
import Carousel from "react-bootstrap/Carousel";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="textContainer">
        <h1>Flips Valet Parking</h1>
      <Carousel>
        <Carousel.Item>
        <img src="/hero.png" alt="Hero Image" />
        </Carousel.Item>
      <Carousel.Item>
       <img src="/photo2.JPG" alt="photo2" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="/photo4.JPG" alt="photo4" />
    
      </Carousel.Item>
      <Carousel.Item>
      <img src="/photo5.jpg" alt="photo5" />
       
      </Carousel.Item>
      </Carousel>
      </div>
      <section id="services">
          <Services />
        </section>
    </div>
  );
};

export default Home;
