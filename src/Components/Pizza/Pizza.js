import React from "react";
import "./PizzaSite.css";
import { Routes, Route, Link } from "react-router-dom";
import { NavBar } from "./NavBAr";
import All from "../All/All";
import Home from "../Home/Home";
import Settings from "../Settings/Settings";
import { useSelector } from "react-redux";
import Basket from "../Basket/Basket";
import basket from "./basket.webp";
import basketW from "./basketW.png";
// import logo from "./imgPizza/logoPizza.webp";

const Pizza = () => {
  return (
    <div>
      <h1>---Pizza---</h1>
      <div className="header-logo">
        <div>
          <span style={{ fontWeight: "700", fontSize: "30px" }}>
            Redux Pizza
          </span>
        </div>
        <div>
          <button className="headerBtn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="basket">
              100 ua |
              <img
                style={{ width: "20px", margin: "4px" }}
                src={basketW}
                alt=""
              />
            </Link>
          </button>
        </div>
      </div>

      <NavBar />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="mes" element={<Settings />}></Route>
        <Route path="message" element={<All />}></Route>
        <Route path="basket" element={<Basket />}></Route>
      </Routes>
    </div>
  );
};

export default Pizza;
{
  /* <img src={pizza} class="rounded float-end" alt="..." /> */
}
{
  /* <img src={pizzaArray[1].imgSrc} alt="..." />
      <img src={pizzaArray[0].imgSrc} alt="..." /> */
}
{
  /* <h1>---{name}---</h1> */
}
{
  /* <label for="customRange2" class="form-label">
        Example range
      </label>
      <input
        type="range"
        class="form-range"
        min="0"
        max="5"
        id="customRange2"></input>
      <div>
        <label for="customRange3" class="form-label">
          Example range
        </label>
        <input
          type="range"
          class="form-range"
          min="0"
          max="5"
          step="0.5"
          id="customRange3"
        />
      </div> */
}
{
  /* <div class="container asd">asd</div>
      <div class="container-xl  ">qwe</div> */
}
{
  /* <div class="grid text-center">
        <div class="g-col-4">.g-col-4</div>
        <div class="g-col-4">.g-col-4</div>
        <div class="g-col-4">.g-col-4</div>
      </div> */
}
