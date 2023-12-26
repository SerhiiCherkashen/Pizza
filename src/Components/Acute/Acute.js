import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../All/All.css";
import { clickOrder, clickSize, clickWidth } from "../Store/PizzaSlice";
import { numberOfPizzasOrdered } from "../All/AllFunction.js";
import { renderCard } from "../RenderCard/renderCard";

const Acute = () => {
  const dispatch = useDispatch();
  const stateAll = useSelector((state) => state.pizzaReducer.stateAll);
  const arrayDataPizza = useSelector(
    (state) => state.pizzaReducer.stateAll.arrayDataPizza
  );
  const stateBasket = useSelector((state) => state.pizzaReducer.stateBasket);
  let quantity = null;

  // const renderCard = (element) => {
  //   console.log(element.name);
  //   return element.name;
  // };

  return (
    <div>
      <h1>---Acute---</h1>
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
            "acute"
          );
        })}
      </div>
    </div>
  );
};

export default Acute;

//
//
//
// if (element.type === "acute") {
//   return (
//     <div class="card  m-3 " key={index}>
//       <img
//         src={element.imgSrc}
//         class="card-img-top  h-100"
//         alt="..."
//       />
//       <div class="card-body">
//         <h5 class="card-title">{element.name}</h5>
//         <div className="all bnt-wrapper">
//           <div className="all btn-top">
//             <button
//               className={
//                 element.currentStateWidth === "thin" ? "active" : ""
//               }
//               value={"thin"}
//               id={element.id}
//               onClick={(e) => dispatch(clickWidth(e))}>
//               Тонкое
//             </button>
//             <button
//               className={
//                 element.currentStateWidth === "thick" ? "active" : ""
//               }
//               value={"thick"}
//               id={element.id}
//               onClick={(e) => dispatch(clickWidth(e))}>
//               Толстое
//             </button>
//           </div>
//           <div className="all btn-bottom">
//             <button
//               className={
//                 element.currentStateSize === "small" ? "active" : ""
//               }
//               value={"small"}
//               id={element.id}
//               onClick={(e) => dispatch(clickSize(e))}>
//               25 sm
//             </button>
//             <button
//               className={
//                 element.currentStateSize === "medium" ? "active" : ""
//               }
//               value={"medium"}
//               id={element.id}
//               onClick={(e) => dispatch(clickSize(e))}>
//               30 sm
//             </button>
//             <button
//               className={
//                 element.currentStateSize === "large" ? "active" : ""
//               }
//               value={"large"}
//               id={element.id}
//               onClick={(e) => dispatch(clickSize(e))}>
//               40 sm
//             </button>
//           </div>
//         </div>
//         <div className="all price-wrapper mt-5 ">
//           <div className="all price-div-wr">
//             <span className="all price price-old">
//               {element.currentPriceOld} ua
//             </span>
//             <span className="all  price price-new">
//               {element.currentPriceNew} ua
//             </span>
//           </div>
//           <div>
//             <button
//               id={element.id}
//               type="button"
//               onClick={(e) => dispatch(clickOrder(e))}
//               class="btn btn-primary">
//               + Order {quantity}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
