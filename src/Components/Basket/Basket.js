import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Basket.css";
import basketLogo from "./basketLogoBlack.webp";
import {
  compositionOfProducts,
  delPizza,
  minusQuantity,
  plusQuantity,
} from "../Store/PizzaSlice";
import { Link } from "react-router-dom";

const Basket = () => {
  const dispatch = useDispatch();
  const stateBasket = useSelector((state) => state.pizzaReducer.stateBasket);
  const stateAll = useSelector((state) => state.pizzaReducer.stateAll);
  let quantity = 0;
  let summa = 0;
  stateBasket.forEach((element) => {
    quantity += element.quantity;
    summa += element.priceAll;
  });
  const handelClick = () => {
    dispatch(compositionOfProducts());
  };
  return (
    <div>
      <div className="basket wrap-bsk-logo">
        <img className="basket bsk-logo" src={basketLogo} />
        <h1>---Basket---</h1>
      </div>
      <div>
        {stateBasket.map((element, index) => {
          const indexCP = stateAll.arrayDataPizza.findIndex(
            (el) => el.id === element.id
          );
          return (
            <div className="basket bsk-pizza">
              <Link
                onClick={() => dispatch(compositionOfProducts(index))}
                className="basket bsk-link"
                to="composition">
                <div className="basket bsk-link-context">
                  {/* <div> */}
                  <img
                    src={stateAll.arrayDataPizza[indexCP].imgSrc}
                    alt="..."
                  />
                  {/* </div> */}

                  <div className="basket bsk-div-text-content">
                    <div className="basket bsk-link-context name">
                      <h1>{stateAll.arrayDataPizza[indexCP].name}</h1>
                    </div>

                    <div className="basket bsk-link-context size-width">
                      <p>{element.width}</p>
                      {element.size === "small" ? (
                        <p>25 sm</p>
                      ) : element.size === "madium" ? (
                        <p>30 sm</p>
                      ) : (
                        <p>40 sm</p>
                      )}
                    </div>
                  </div>
                </div>
              </Link>

              {/*  */}
              {/*  */}
              {/*  */}
              <div className="basket bsk-wrap-plus-minus">
                <button
                  className={` basket btn-plus-minus   ${
                    element.quantity !== 1 ? "" : "activeOrange"
                  }`}
                  value={index}
                  onClick={(e) => dispatch(minusQuantity(e))}>
                  -
                </button>
                <h2> {element.quantity}</h2>
                <button
                  className="basket btn-plus-minus "
                  onClick={(e) => dispatch(plusQuantity(e))}
                  value={index}>
                  +
                </button>
              </div>
              <div className="basket bsk-wrap-price">
                <h2>{element.priceAll} ua</h2>
              </div>
              <div className="basket bsk-del">
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
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="basket bsk-wrap-footer">
        <div className="basket bsk-footer-allPizzas">
          <h3>Всего пицци : </h3>
          <h1>{quantity} шт</h1>
        </div>
        {/* s */}
        <div className="basket bsk-summa">
          <h3> Сумма заказа : </h3>
          <h1>{summa} ua</h1>
        </div>
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
