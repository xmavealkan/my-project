import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  CardImg,
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar";
import "./Footer";
import axios from "axios";
import {useEffect, useState} from "react";
const Api = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jk-tv.netlify.app/cartoons/get_all")
      .then(d => setData(d.data));
  });
  return (
    <div className="Opp">
      {data.map((d, index) => (
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
export default Api;
