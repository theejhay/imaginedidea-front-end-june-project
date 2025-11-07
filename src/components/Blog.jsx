import React, {useState} from "react";
import "./Blog.css";
import shootingstar from "../assets/shootingstar.png";
import rainbow from "../assets/rainbow.png";
import sky from "../assets/sky.png";
import yellow from "../assets/yellow.png";

function Blog() {
  return (
    <>
      <div className="blog-section container-fluid py-4">
        <div className="main-blog container text-center">
          <div className="blog-1 mx-auto mb-5">
            <div className="blog-title">Blog</div>
            <div className="blog-description">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration.
            </div>
          </div>
          <div className="blog-2 row justify-content-center g-4">
            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className="box">
                <img src={shootingstar} alt="" />
                <div>
                  <p>22 Oct, 2020/246 Comments</p>
                  <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className="box">
                <img src={rainbow} alt="" />
                <div>
                  <p>22 Oct, 2020/246 Comments</p>
                  <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className="box">
                <img src={sky} alt="" />
                <div>
                  <p>22 Oct, 2020/246 Comments</p>
                  <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3 d-flex justify-content-center">
              <div className="box">
                <img src={yellow} alt="" />
                <div>
                  <p>22 Oct, 2020/246 Comments</p>
                  <p>Lorem ipsum dolor sit consea. Nulla purus arcu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
