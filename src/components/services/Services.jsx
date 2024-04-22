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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
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
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Hospitals </Card.Title>
            <Card.Text>
              Ensure a stress-free arrival for patients and visitors alike with
              our reliable valet service, providing convenience and comfort
              during challenging times.
            </Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
};

export default Services;
