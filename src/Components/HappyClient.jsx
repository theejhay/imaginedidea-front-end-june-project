import "./HappyClient.css";
import Google from "../assets/HappyClient-images/Google.png";
import Dribbble from "../assets/HappyClient-images/Dribbble.png";
import Linkedin from "../assets/HappyClient-images/Linkedin.png";
import Amazon from "../assets/HappyClient-images/Amazon.png";
import Medium from "../assets/HappyClient-images/Medium.png";
import Spotify from "../assets/HappyClient-images/Spotify.png";

function HappyClient() {
  return (
    <div className="happy-client-container">
      <div className="frame-281">
        <h2 className="happy-client">Happy Clients</h2>

        <p className="sub-heading">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div className="frame-280">
        <img src={Google} className="google" />
        <img src={Dribbble} className="dribbble" />
        <img src={Linkedin} className="linkedin" />
        <img src={Amazon} className="amazon" />
        <div className="medium">
          <img src={Medium} />
        </div>
        <img src={Spotify} className="spotify" />
      </div>
    </div>
  );
}

export default HappyClient;
