import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./All.css";
import { clickOrder, clickSize, clickWidth } from "../Store/PizzaSlice";

const All = () => {
  const dispatch = useDispatch();
  const stateAll = useSelector((state) => state.pizzaReducer.stateAll);
  return (
    <div>
      <h1>---All---</h1>
      <div className="hyi">
        {stateAll.arrayDataPizza.map((element, index) => {
          return (
            <div class="card  m-3 " key={index}>
              <img src={element.imgSrc} class="card-img-top  h-100" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{element.name}</h5>
                <div className="all bnt-wrapper">
                  <div className="all btn-top">
                    <button
                      value={"thin"}
                      id={element.id}
                      onClick={(e) => dispatch(clickWidth(e))}>
                      Тонкое
                    </button>
                    <button
                      value={"thick"}
                      id={element.id}
                      count={0}
                      index={123}
                      onClick={(e) => dispatch(clickWidth(e))}>
                      Толстое
                    </button>
                  </div>
                  <div className="all btn-bottom">
                    <button
                      value={"small"}
                      id={element.id}
                      onClick={(e) => dispatch(clickSize(e))}>
                      25 sm
                    </button>
                    <button
                      value={"medium"}
                      id={element.id}
                      onClick={(e) => dispatch(clickSize(e))}>
                      30 sm
                    </button>
                    <button
                      value={"large"}
                      id={element.id}
                      onClick={(e) => dispatch(clickSize(e))}>
                      40 sm
                    </button>
                  </div>
                </div>
                <div className="all price-wrapper mt-5 ">
                  <div className="all price-div-wr">
                    <span className="all price price-old">
                      {element.currentPriceOld} ua
                    </span>
                    <span className="all  price price-new">
                      {element.currentPriceNew} ua
                    </span>
                  </div>
                  <div>
                    <button
                      // value={[
                      //   index,
                      //   element.currentStateDough,
                      //   element.currentStateSize,
                      //   element.currentPriceOld,
                      //   element.currentPriceNew,
                      // ]}
                      id={element.id}
                      type="button"
                      onClick={(e) => dispatch(clickOrder(e))}
                      class="btn btn-primary price ">
                      Order
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div class="card" style={{ width: "200px" }}>
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
      </div> */}
    </div>
  );
};

export default All;
