import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./All.css";
import { clickOrder, clickSize, clickWidth } from "../Store/PizzaSlice";
import { numberOfPizzasOrdered } from "./AllFunction.js";
import { renderCard } from "../RenderCard/renderCard";

const All = () => {
  const dispatch = useDispatch();
  const stateAll = useSelector((state) => state.pizzaReducer.stateAll);
  const stateBasket = useSelector((state) => state.pizzaReducer.stateBasket);
  let quantity = null;

  return (
    <div>
      {/* <h1>---All---</h1> */}
      <div className="grid">
        {stateAll.arrayDataPizza.map((element, index) => {
          quantity = numberOfPizzasOrdered(stateBasket, element);
          return renderCard(
            element,
            index,
            dispatch,
            clickOrder,
            clickSize,
            clickWidth,
            quantity,
            "",
            true
          );
        })}
      </div>
    </div>
  );
};

export default All;
// if (element.type ==='' ) {
// return (
//   <div class="card  m-3 " key={index}>
//     <img
//       src={element.imgSrc}
//       class="card-img-top  h-100"
//       alt="..."
//     />
//     <div class="card-body">
//       <h5 class="card-title">{element.name}</h5>
//       <div className="all bnt-wrapper">
//         <div className="all btn-top">
//           <button
//             className={
//               element.currentStateWidth === "thin" ? "active" : ""
//             }
//             value={"thin"}
//             id={element.id}
//             onClick={(e) => dispatch(clickWidth(e))}>
//             Тонкое
//           </button>
//           <button
//             className={
//               element.currentStateWidth === "thick" ? "active" : ""
//             }
//             value={"thick"}
//             id={element.id}
//             onClick={(e) => dispatch(clickWidth(e))}>
//             Толстое
//           </button>
//         </div>
//         <div className="all btn-bottom">
//           <button
//             className={
//               element.currentStateSize === "small" ? "active" : ""
//             }
//             value={"small"}
//             id={element.id}
//             onClick={(e) => dispatch(clickSize(e))}>
//             25 sm
//           </button>
//           <button
//             className={
//               element.currentStateSize === "medium" ? "active" : ""
//             }
//             value={"medium"}
//             id={element.id}
//             onClick={(e) => dispatch(clickSize(e))}>
//             30 sm
//           </button>
//           <button
//             className={
//               element.currentStateSize === "large" ? "active" : ""
//             }
//             value={"large"}
//             id={element.id}
//             onClick={(e) => dispatch(clickSize(e))}>
//             40 sm
//           </button>
//         </div>
//       </div>
//       <div className="all price-wrapper mt-5 ">
//         <div className="all price-div-wr">
//           <span className="all price price-old">
//             {element.currentPriceOld} ua
//           </span>
//           <span className="all  price price-new">
//             {element.currentPriceNew} ua
//           </span>
//         </div>
//         <div>
//           <button
//             id={element.id}
//             type="button"
//             onClick={(e) => dispatch(clickOrder(e))}
//             class="btn btn-primary">
//             + Order {quantity}
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }
// const BskIndex = stateBasket.findIndex(
//   (el) =>
//     el.id === element.id &&
//     el.width === element.currentStateWidth &&
//     el.size === element.currentStateSize
// );

// if (stateBasket[BskIndex]) {
//   quantity = stateBasket[BskIndex].quantity;
// } else {
//   quantity = 0;
// }
{
  /* <div class="card" style={{ width: "200px" }}>
        <img src={pizzaArrayCard[0].imgSrc} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */
}
