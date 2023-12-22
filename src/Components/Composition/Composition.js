import React from "react";
import { useSelector } from "react-redux";

const Composition = () => {
  const state = useSelector((state) => state.pizzaReducer);
  return (
    <div>
      <h1>---Composition---</h1>

      {state.compositionOfProducts.map((el, index) => {
        if (index === 0) {
          return (
            <h2
              style={{
                display: "flex",
                justifyContent: "flex-start",
                fontWeight: "900",
                margin: "0 0 30px 30px",
              }}>
              {el}
            </h2>
          );
        }
        return (
          <h3 style={{ display: "flex", justifyContent: "flex-start" }}>
            - {el}{" "}
          </h3>
        );
      })}
    </div>
  );
};

export default Composition;
