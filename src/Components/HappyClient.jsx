import "./HappyClient.css";
import Google from "../assets/images/HappyClient-images/Google.png";
import Dribbble from "../assets/images/HappyClient-images/Dribbble.png";
import Linkedin from "../assets/images/HappyClient-images/Linkedin.png";
import Amazon from "../assets/images/HappyClient-images/Amazon.png";
import Medium from "../assets/images/HappyClient-images/Medium.png";
import Spotify from "../assets/images/HappyClient-images/Spotify.png";

function HappyClient() {
  return (
    <div className="happy-client-container col-12 col-sm-6 col-md-4 mb-4">
      <div className="frame-281">
        <h2 className="happy-client">Happy Clients</h2>

        <p className="sub-heading">
          There are many variations of passages of Lorem Ipsum available, <br />
           but the majority have suffered alteration.
        </p>
      </div>
      <div className="frame-280 col-12 col-sm-6 col-md-4 mb-4">
        <img src={Google} />
        <img src={Dribbble} />
        <img src={Linkedin} />
        <img src={Amazon} />
        <img src={Medium} />
        <img src={Spotify} />
      </div>
    </div>
  );
}

export default HappyClient;
