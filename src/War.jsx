import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/Navbar";
import "./components/Footer";
import axios from "axios";
import {useEffect, useState} from "react";
const WarMovie = () => {
  const [war, setWar] = useState([]);
  useEffect(() => {
    axios
      .get("https://jk-tv.netlify.app/war_movies/get_all")
      .then(d => setWar(d.data));
  });
  return (
    <div className="Opp">
      {war.map((d, index) => (
        <Card
          className="my-2"
          style={{
            width: "18rem",
          }}
          key={index}
        >
          <CardBody>
            <CardText>
              <CardImg src={d.backdropPath} />
            </CardText>
            <CardTitle tag="h5">{d.title}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {d.releaseDate}
            </CardSubtitle>

            {/* <Button>
                    Button
                  </Button> */}
          </CardBody>
        </Card>
      ))}
    </div>
  );
};
export default WarMovie;
