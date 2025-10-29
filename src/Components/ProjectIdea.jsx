import { FaArrowRight } from "react-icons/fa";
function ProjectIdea() {
  return (
    <div
      style={{
        width: "1921px",
        height: "472px",
        backgroundColor: "#132238",
        paddingTop: "100px",
        paddingRight: "650px",
        paddingBottom: "100px",
        paddingLeft: "650px",
        gap: "32px",
      }} 
    >
      <h2
        style={{
          width: "621px",
          height: "112px",
          color: "#FFFFFF",
          fontFamily: "work sans",
          fontWeight: "600",
          fontStyle: "SemiBold",
          fontSize: "48px",
          lineHeight: "56px",
          letterSpacing: "0%",
        }}
      >
        Do you have Project Idia? Let's discuss your project!
      </h2>

      <p
        style={{
          width: "581px",
          height: "48px",
          color: "#A5ACB5",
          fontFamily: "work sans",
          fontWeight: "400",
          fontStyle: "regular",
          fontSize: "18px",
          lineHeight: "24px",
          letterSpacing: "0%",
          textAlign: "center",
          paddingTop: "32px",
        }}
      >
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration.
      </p>
      <div
        style={{
          placeSelf: "center",
          paddingTop: "48px",
        }}
      >
        <button
          style={{
            width: "240px",
            height: "48px",
            color: "#FFFFFF",
            backgroundColor: "#A53DFF",
            borderRadius: "4px",
            gap: "12px",
            paddingTop: "12px",
            paddingRight: "24px",
            paddingBottom: "24px",
            paddingLeft: "24px",
            fontFamily: "work sans",
            fontWeight: "600",
            fontStyle: "SemiBold",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "0%",
            border: "none",
          }}
        >
          Let’s work Together <FaArrowRight />
        </button>{" "}
      </div>
    </div>
  );
}

export default ProjectIdea;
