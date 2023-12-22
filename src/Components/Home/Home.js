import React from "react";
import { useSelector } from "react-redux";

const Home = () => {
  const stateHome = useSelector((state) => state.pizzaReducer.stateHome);
  return (
    <div>
      <h1 style={{ marginRight: "80%", padding: "10px" }}>All Pizza</h1>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          {stateHome.map((element, index) => {
            if (index === 0) {
              return (
                <div class="carousel-item active">
                  <img src={element} class="d-block w-100" alt="..." />
                </div>
              );
            } else {
              return (
                <div class="carousel-item">
                  <img src={element} class="d-block w-100" alt="..." />
                </div>
              );
            }
          })}
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
{
  /* <div class="carousel-item active">
            <img src={pizza1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza3} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza4} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={pizza5} class="d-block w-100" alt="..." />
          </div> */
}
{
  /* {pizzaArrayCarousel.map((element, index) => {
            if (index === 0) {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  class="active"
                  aria-current="true"
                  aria-label="Slide 1"></button>
              );
            } else {
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                aria-label="Slider 2" {`Slider ${index + 1}`}></button>;
            }
          })} */
}
