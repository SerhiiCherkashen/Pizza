import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Basket.css";
import basketLogo from "../Pizza/basketW.png";
import { delPizza, minusQuantity, plusQuantity } from "../Store/PizzaSlice";

const Basket = () => {
  const dispatch = useDispatch();
  const stateBasket = useSelector((state) => state.pizzaReducer.stateBasket);
  const stateAll = useSelector((state) => state.pizzaReducer.stateAll);
  return (
    <div>
      <div>
        {/* <img src={basketLogo} alt="" style={{ width: "50px" }} /> */}
        <h1>---Basket---</h1>
      </div>
      <div>
        {stateBasket.map((element, index) => {
          const indexCP = stateAll.arrayDataPizza.findIndex(
            (el) => el.id === element.id
          );
          return (
            <div className="basket bsk-pizza">
              <div
                style={{
                  width: "150px",
                  height: "100%",
                  gridColumn: "2",
                }}>
                <img
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  src={stateAll.arrayDataPizza[indexCP].imgSrc}
                  alt="..."
                />
              </div>

              <div
                style={{
                  height: "100%",
                  width: "200px",
                  gridColumn: "3",
                }}>
                <div style={{ margin: "0 100% 0  0" }}>
                  <h1>{stateAll.arrayDataPizza[indexCP].name}</h1>
                </div>

                <div style={{ display: "flex" }}>
                  <p style={{ marginRight: "30px" }}>{element.width}</p>
                  {element.size === "small" ? (
                    <p>25 sm</p>
                  ) : element.size === "madium" ? (
                    <p>30 sm</p>
                  ) : (
                    <p>40 sm</p>
                  )}
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  gridColumnStart: "6",
                }}>
                <button
                  value={index}
                  className="basket btn-plus-minus"
                  onClick={(e) => dispatch(minusQuantity(e))}>
                  -
                </button>
                <h2 style={{ margin: "0 30px 0 30px" }}> {element.quantity}</h2>
                <button
                  // value={[
                  //   element.id,
                  //   element.quantity,
                  //   element.priceNew,
                  //   element.priceAll,
                  // ]}
                  value={index}
                  className="basket btn-plus-minus"
                  onClick={(e) => dispatch(plusQuantity(e))}>
                  +
                </button>
              </div>
              <div
                style={{
                  width: "150px",
                  gridColumn: "10",
                }}>
                <h2>{element.priceAll} ua</h2>
              </div>
              <div
                style={{
                  gridColumn: "12",
                }}>
                <button
                  value={index}
                  onClick={(e) => {
                    dispatch(delPizza(e));
                  }}
                  className="basket btn-plus-minus">
                  X
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Basket;
{
  /* {stateBasket.myBasket.map((element, index) => {
        // const indexPCard = pizzaArrayCard.findIndex((el) => {
        //   el.id === element.id;
        // });
        <div>
          div {index}
          <img src={pizzaArrayCard[indexPCard].imgSrc} alt="..." />
        </div>;
      })} */
}
{
  /* {stateBasket[0] ? (
        stateBasket.map((element, index) => {
          console.log("element : ", element);
          console.log("element.id === : ", element.id, "   -next");
          const indexPCard = pizzaArrayCard.findIndex(
            (el) => el.id === element.id
          );
          return (
            <div className="basket bsk-pizza">
              {/* <img
                src={pizzaArrayCard[indexPCard].imgSrc}
                style={{ width: "100px", marginLeft: "50px" }}
                alt="..."
              /> */
}
// <div
//   style={{
//     margin: " 20px 0 0 20px",
//   }}>
//   <h2>{pizzaArrayCard[indexPCard].name}</h2>
//   <div style={{ display: "flex" }}>
//     <p>{pizzaArrayCard[indexPCard].currentStateDough}</p>
// {pizzaArrayCard[indexPCard].currentStateSize === "small" ? (
//   <p>25 sm</p>
// ) : pizzaArrayCard[indexPCard].currentStateSize ===
//   "medium" ? (
//   <p>30 sm</p>
// ) : (
// <p>40 sm</p>
// )}
//   </div>
// </div>
// <button
//   className="basket btn-plus-minus"
//   id={element.id}
//   onClick={(e) => dispatch(minusQuantity(e))}>
//   -
// </button>
// <h2>{element.quantity}</h2>
// <button
//   className="basket btn-plus-minus"
//       id={element.id}
//       onClick={(e) => dispatch(plusQuantity(e))}>
//       +
//     </button>

//     <h2>{element.price}</h2>
//   </div>
// );
// return <h1> ggg </h1>;
//   })
// ) : (
//
// ((<h1>{stateBasket.[0].quantity}</h1>),
// (<h1>{pizzaArrayCard[indexPCard].name}</h1>)))
// <h1>{pizzaArrayCard[indexedDB].name}</h1>
// <div>
//   div {element.id}
//   {/* <img src={pizzaArrayCard[indexPCard].imgSrc} alt="..." /> */}
// </div>;
// }
// (<h1>{stateBasket.[0].quantity}</h1>)
//   <h1>Do Order</h1>
// )}
