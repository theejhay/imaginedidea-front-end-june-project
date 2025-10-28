import "./HappyClient.css";
import Google from "../assets/HappyClient-images/Google.png";
import Dribbble from "../assets/HappyClient-images/Dribbble.png";
import Linkedin from "../assets/HappyClient-images/Linkedin.png";
import Amazon from "../assets/HappyClient-images/Amazon.png";
import Medium from "../assets/HappyClient-images/Medium.png";
import Spotify from "../assets/HappyClient-images/Spotify.png";

function HappyClient() {
  return (
    <div
      style={{
        width: "1920px",
        height: "552px",
        paddingTop: "100px",
        paddingRight: "300px",
        paddingBottom: "100px",
        paddingLeft: "300px",
        gap: "24px",
      }}
    >
      <div
        style={{
          width: "577px",
          height: "128px",
          gap: "24px",
          placeSelf: "center",
        }}
      >

        <h2
          style={{
            width: "327px",
            height: "56px",
            color: "#132238",
            fontFamily: "Work Sans",
            fontWeight: "600",
            fontStyle: "SemiBold",
            fontSize: "48px",
            lineHeight: "56px",
            letterSpacing: "0%",
            placeSelf: "center",
          }}
        >
          Happy Clients
        </h2>

        <p
          style={{
            width: "577px",
            height: "48px",
            color: "#87909D",
            fontFamily: "Work Sans",
            fontWeight: "400",
            fontStyle: "regular",
            fontSize: "18px",
            lineHeight: "24px",
            letterSpacing: "0%",
            display: "flex",
            flexDirection: "column",
            placeSelf: "center",
            textAlign: "center",
            paddingTop: "24px",
          }}
        >
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration.
        </p>
      </div>
      <div
        style={{
          width: "1320px",
          height: "200px",
          gap: "24px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <img src={Google} />
        <img src={Dribbble} style={{ width: "200px", height: "200px" }} />
        <img src={Linkedin} style={{ width: "200px", height: "200px" }} />
        <img src={Amazon} style={{ width: "200px", height: "200px" }} />
        <div style={{ lineHeight: "200px" }}>
          <img src={Medium} />
        </div>
        <img src={Spotify} style={{ width: "200px", height: "200px" }} />
      </div>
    </div>
  );
}

export default HappyClient;