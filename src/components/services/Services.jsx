import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
// import "./services.scss";

const Services = () => {

    const servicesStyle = {
        // Add your inline styles here
        backgroundColor: "lightgray",
        padding: "20px",
    };

  return (
    <div className="services" style={servicesStyle}>
      <h1>Services</h1>
      <Row xs={3} md={3} className="g-4">
        {/* Card 1 */}
        <Card>
          <Card.Body>
            <Card.Title>Restaurants</Card.Title>
            <Card.Text>
              Park worry-free and dine with ease at our restaurant, where every
              visit begins with the convenience of our valet service.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 2 */}
        <Card>
          <Card.Body>
            <Card.Title>Private and Public Events</Card.Title>
            <Card.Text>
              From intimate gatherings to grand galas, make every event
              unforgettable with our premier valet service. Whether you're
              attending a public event, arrive in style and leave the parking to
              us.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 3 */}
        <Card>
          <Card.Body>
            <Card.Title>Office/Retail </Card.Title>
            <Card.Text>
              Transform your office or retail experience with our top-notch
              valet service.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 4 */}
        <Card>
          <Card.Body>
            <Card.Title>Hospitals </Card.Title>
            <Card.Text>
              Ensure a stress-free arrival for patients and visitors alike with
              our reliable valet service, providing convenience and comfort
              during challenging times.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 5 */}
        <Card>
          <Card.Body>
            <Card.Title>Residential </Card.Title>
            <Card.Text>
              Experience seamless valet service right at your doorstep with our 
              residential solutions.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 6 */}
        <Card>
         
          <Card.Body>
            <Card.Title>Hotels & Resorts </Card.Title>
            <Card.Text>
              Elevate your stay with our premier valet service, ensuring seamless 
              convenience from arrival to departure at hotels and resorts.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 7 */}
        <Card>

          <Card.Body>
            <Card.Title>Healthcare Facilities </Card.Title>
            <Card.Text>
              Elevate your stay with our premier valet service, ensuring seamless 
              convenience from arrival to departure at hotels and resorts.
            </Card.Text>
          </Card.Body>
        </Card>
        {/* Card 8 */}
        <Card>
          <Card.Body>
            <Card.Title>Hospitals </Card.Title>
            <Card.Text>
              Elevate your stay with our premier valet service, ensuring seamless 
              convenience from arrival to departure at hotels and resorts.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Card 9 */}
        <Card>
          <Card.Body>
            <Card.Title>Corporations </Card.Title>
            <Card.Text>
              Elevate your stay with our premier valet service, ensuring seamless 
              convenience from arrival to departure at hotels and resorts.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <h1>And More...</h1>
    </div>
  );
};

export default Services;

