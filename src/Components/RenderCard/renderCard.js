export const renderCard = (
  element,
  index,
  dispatch,
  clickOrder,
  clickSize,
  clickWidth,
  quantity,
  type,
  trueFalse
) => {
  if (element.type === type || trueFalse) {
    // console.log(element.name);

    return (
      <div className="card wrap-card " key={index}>
        <div className="card wrap-img">
          <img src={element.imgSrc} className="card " alt="..." />
        </div>
        {/*  */}
        <div class="card-body">
          <h5 class="card-title">{element.name}</h5>
          <div className="all bnt-wrapper">
            <div className="all btn-top">
              <button
                className={element.currentStateWidth === "thin" ? "active" : ""}
                value={"thin"}
                id={element.id}
                onClick={(e) => dispatch(clickWidth(e))}>
                Тонкое
              </button>
              <button
                className={
                  element.currentStateWidth === "thick" ? "active" : ""
                }
                value={"thick"}
                id={element.id}
                onClick={(e) => dispatch(clickWidth(e))}>
                Толстое
              </button>
            </div>
            <div className="all btn-bottom">
              <button
                className={element.currentStateSize === "small" ? "active" : ""}
                value={"small"}
                id={element.id}
                onClick={(e) => dispatch(clickSize(e))}>
                25 sm
              </button>
              <button
                className={
                  element.currentStateSize === "medium" ? "active" : ""
                }
                value={"medium"}
                id={element.id}
                onClick={(e) => dispatch(clickSize(e))}>
                30 sm
              </button>
              <button
                className={element.currentStateSize === "large" ? "active" : ""}
                value={"large"}
                id={element.id}
                onClick={(e) => dispatch(clickSize(e))}>
                40 sm
              </button>
            </div>
          </div>
          <div className="all price-wrapper  ">
            <div className="all price-old-new-wr">
              <span className="all price price-old">
                {element.currentPriceOld} ua
              </span>
              <span className="all  price price-new">
                {element.currentPriceNew} ua
              </span>
            </div>
            <div className="all price-order-btn-wr">
              <button
                id={element.id}
                type="button"
                onClick={(e) => dispatch(clickOrder(e))}
                // class="btn btn-primary"
              >
                + Order {quantity}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

//
//
//
//     //
//   <div class="card  m-3 " key={index}>
//     <img src={element.imgSrc} class="card-img-top  h-100" alt="..." />
//     <div class="card-body">
//       <h5 class="card-title">{element.name}</h5>
//       <div className="all bnt-wrapper">
//         <div className="all btn-top">
//           <button
//             className={element.currentStateWidth === "thin" ? "active" : ""}
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
//             className={element.currentStateSize === "small" ? "active" : ""}
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
//             className={element.currentStateSize === "large" ? "active" : ""}
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
//
