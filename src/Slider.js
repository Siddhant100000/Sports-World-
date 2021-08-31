import React from "react";

function Slider({ image }) {
  return (
    <div className="container-fluid">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-label="Slide 1"
            aria-current="true"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            className=""
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            className=""
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item carousel-item-next carousel-item-start">
            <img src={image} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Welcome to iCoder</h2>
              <p>Technology, Devlopment and Trends</p>
              <button className="btn btn-danger">Technology</button>
              <button className="btn btn-success">Web Devlopment</button>
              <button className="btn btn-primary">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item">
            <img src={image} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>The best coding block</h2>
              <p>Technology, Devlopment and Trends</p>
              <button className="btn btn-danger">Technology</button>
              <button className="btn btn-success">Web Devlopment</button>
              <button className="btn btn-primary">Tech Fun</button>
            </div>
          </div>
          <div className="carousel-item active carousel-item-start">
            <img src={image} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h2>Award Winning Blog</h2>
              <p>Technology, Devlopment and Trends</p>
              <button className="btn btn-danger">Technology</button>
              <button className="btn btn-success">Web Devlopment</button>
              <button className="btn btn-primary">Tech Fun</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Slider;
