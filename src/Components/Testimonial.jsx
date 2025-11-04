import "./Testimonial.css"
import Pagination from "../assets/Testimonial-images/Pagination.png";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <div className="frame-283">
        <div className="head-and-sub-head">
          <h2 className="heading">
            Testmonial
          </h2>

          <p className="sub-heading">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
        <div className="frame-282">
          <p className="testimonial-paragraph">
            “Nulla efficitur nisl sit amet velit malesuada dapibus. Duis mollis
            felis turpis, nec semper odio convallis at. Curabitur imperdiet
            semper arcu, a finibus arcu suscipit in. Donec quis placerat nibh.
            Maecenas est purus, eleifend ac cursus sed, tincidunt ut sapien.
            <br />
            Morbi ornare elit at libero suscipit porta.”
          </p>

          <div className="name-and-company">

            <h4 className="name">
              Esther Howard
            </h4>

            <p className="company">
              Managing Director,ABC company
            </p>
          </div>
        </div>
      </div>
      <div className="pagination">
        <img src={Pagination} />
      </div>
    </div>
  );
}

export default Testimonial;
