import React from "react";
import { useSelector } from "react-redux";
import "./Composition.css";

const Composition = () => {
  const state = useSelector((state) => state.pizzaReducer);
  return (
    <div>
      <h1>---Composition---</h1>
      <div className="composition wrap ">
        <div className="composition wrap-text">
          <h2>{state.compositionOfProducts.name}</h2>
          {state.compositionOfProducts.array.map((el, index) => {
            return <h3>- {el}</h3>;
          })}
        </div>
        <div className="composition wrap-img">
          <img src={state.compositionOfProducts.imgSrc} alt="..." />
        </div>
      </div>
    </div>
  );
};

export default Composition;
