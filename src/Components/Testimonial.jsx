import Pagination from "../assets/Testimonial-images/Pagination.png";

function Testimonial() {
  return (
    <div
      style={{
        width: "1920px",
        height: "534px",
        paddingRight: "524px",
        paddingBottom: "100px",
        paddingLeft: "524px",
        gap: "50px",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "872px",
          height: "376px",
          gap: "70px",
          display: "flex",
          flexDirection: "column",
          placeSelf: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "577px",
            height: "128px",
            gap: "24px",
          }}
        >
          <h2
            style={{
              width: "274px",
              height: "56px",
              color: "#333333",
              fontFamily: "work sans",
              fontWeight: "600",
              fontStyle: "SemiBold",
              fontSize: "48px",
              lineHeight: "56px",
              letterSpacing: "0%",
              placeSelf: "center",
            }}
          >
            Testmonial
          </h2>

          <p
            style={{
              width: "577px",
              height: "48px",
              color: "#87909D",
              fontFamily: "work sans",
              fontWeight: "400",
              fontStyle: "Regular",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0%",
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
            width: "827px",
            height: "178px",
            gap: "24px",
          }}
        >
          <p
            style={{
              width: "872px",
              height: "96px",
              color: "#2B384C",
              fontFamily: "work sans",
              fontWeight: "500",
              fontStyle: "Medium",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0%",
              textAlign: "center",
            }}
          >
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            <br />
            Morbi ornare elit at libero suscipit porta.”
          </p>

          <div
            style={{
              width: "268px",
              height: "58px",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              placeSelf: "center",
            }}
          >

            <h4
              style={{
                width: "131px",
                height: "26px",
                color: "#000000",
                fontFamily: "Poppins",
                fontWeight: "500",
                fontStyle: "Medium",
                fontSize: "18px",
                lineHeight: "26px",
                letterSpacing: "0%",
                placeSelf: "center",
                textAlign: "center",
              }}
            >
              Esther Howard
            </h4>

            <p
              style={{
                width: "268px",
                height: "24px",
                color: "#000000",
                fontFamily: "Poppins",
                fontWeight: "300",
                fontStyle: "Light",
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
                textAlign: "center",
              }}
            >
              Managing Director,ABC company
            </p>
          </div>
        </div>
      </div>
      <div
        style={{
          widows: "70px",
          height: "8px",
          gap: "12px",
          paddingTop: "50px",
          placeSelf: "center",
        }}
      >
        <img src={Pagination} />
      </div>
    </div>
  );
}

export default Testimonial;
