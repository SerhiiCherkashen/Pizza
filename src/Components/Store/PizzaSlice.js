import { createSlice } from "@reduxjs/toolkit";
import { state } from "./StatePizza";

const pizzaSlice = createSlice({
  name: "pizzaSite",
  initialState: state,
  reducers: {
    clickWidth: (state, action) => {
      const id = action.payload.target.id; //   0Firmennaa
      const width = action.payload.target.value; //'thin /thick
      const index = state.stateAll.arrayDataPizza.findIndex(
        (el) => el.id === id
      );
      const objectCard = state.stateAll.arrayDataPizza[index]; //  {}

      if (width === "thin") {
        if (objectCard.currentStateSize === "small") {
          objectCard.currentPriceOld = objectCard.price.thin.small.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.small.priceNew;
        } else if (objectCard.currentStateSize === "medium") {
          objectCard.currentPriceOld = objectCard.price.thin.medium.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.medium.priceNew;
        } else {
          objectCard.currentPriceOld = objectCard.price.thin.big.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.big.priceNew;
        }
      } else {
        console.log("if");
        if (objectCard.currentStateSize === "small") {
          objectCard.currentPriceOld = objectCard.price.thick.small.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.small.priceNew;
        } else if (objectCard.currentStateSize === "medium") {
          objectCard.currentPriceOld = objectCard.price.thick.medium.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.medium.priceNew;
        } else {
          objectCard.currentPriceOld = objectCard.price.thick.big.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.big.priceNew;
        }
      }

      objectCard.currentStateWidth = width;
    },
    clickSize: (state, action) => {
      const id = action.payload.target.id; //   0Firmennaa
      const size = action.payload.target.value; // small /  medium  / large

      const index = state.stateAll.arrayDataPizza.findIndex(
        (el) => el.id === id
      );
      const objectCard = state.stateAll.arrayDataPizza[index]; //  {}

      if (objectCard.currentStateWidth === "thin") {
        if (size === "small") {
          objectCard.currentPriceOld = objectCard.price.thin.small.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.small.priceNew;
        } else if (size === "medium") {
          objectCard.currentPriceOld = objectCard.price.thin.medium.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.medium.priceNew;
        } else {
          objectCard.currentPriceOld = objectCard.price.thin.big.priceOld;
          objectCard.currentPriceNew = objectCard.price.thin.big.priceNew;
        }
      } else {
        if (size === "small") {
          objectCard.currentPriceOld = objectCard.price.thick.small.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.small.priceNew;
        } else if (size === "medium") {
          objectCard.currentPriceOld = objectCard.price.thick.medium.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.medium.priceNew;
        } else {
          objectCard.currentPriceOld = objectCard.price.thick.big.priceOld;
          objectCard.currentPriceNew = objectCard.price.thick.big.priceNew;
        }
      }
      objectCard.currentStateSize = size;
    },

    clickOrder: (state, action) => {
      console.log("ID ? : ", String(+new Date())); // ID 492750203459
      const id = action.payload.target.id; //  0Firmenna

      const index = state.stateAll.arrayDataPizza.findIndex(
        (el) => el.id === id
      ); // 0 / 1 in [stateAll]
      const objPizza = state.stateAll.arrayDataPizza[index]; // { id : 0Firmenna , --- , currentPriseNew}

      const BasketIndex = +state.stateBasket.findIndex(
        (el) =>
          el.id === id &&
          el.width === objPizza.currentStateWidth &&
          el.size === objPizza.currentStateSize
      ); // index in [state.Basket]

      if (BasketIndex < 0) {
        state.stateBasket = [
          ...state.stateBasket,
          {
            id: id,
            imgSrc: objPizza.imgSrc,
            name: objPizza.name,
            width: objPizza.currentStateWidth,
            size: objPizza.currentStateSize,
            quantity: 1,
            priceOld: +objPizza.currentPriceOld,
            priceNew: +objPizza.currentPriceNew,
            priceAll: +objPizza.currentPriceNew,
          },
        ];
      } else {
        state.stateBasket[BasketIndex].quantity += 1;
        state.stateBasket[BasketIndex].priceAll += +objPizza.currentPriceNew;
      }
    },

    minusQuantity: (state, action) => {
      const index = action.payload.target.value;
      if (state.stateBasket[index].quantity >= 2) {
        state.stateBasket[index].quantity -= 1;
        state.stateBasket[index].priceAll -= state.stateBasket[index].priceNew;
      } else {
        state.stateBasket.splice(index, 1);
      }
    },
    plusQuantity: (state, action) => {
      const index = action.payload.target.value;

      state.stateBasket[index].quantity += 1;
      state.stateBasket[index].priceAll += state.stateBasket[index].priceNew;
    },
    delPizza: (state, action) => {
      const index = action.payload.target.value;
      state.stateBasket.splice(index, 1);
    },
  },
});

export const {
  clickWidth,
  clickSize,
  clickOrder,
  plusQuantity,
  minusQuantity,
  delPizza,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
// //
// console.log("S value ===  : ", action.payload.target.value);
// console.log(
//   "S value.split('' ===  : ",
//   action.payload.target.value.split(",")
// );
// console.log("S value ===  : ", action.payload.target.value[0]);
// console.log("S type  : ", action.type);
// console.log("S meta  : ", action.meta);
// console.log("S   : ", action.payload);
// console.log("S target  : ", action.payload.target);
// console.log(
//   "S target.__reactProps$uax65o6b1v  : ",
//   action.payload.target.__reactProps$uax65o6b1v
// );
// console.log("S size  : ", size);
// console.log("S index  : ", index);
// console.log("S object  : ", object);
// console.log("S index2  : ", index2);
// console.log("S count  : ", count);

// console.log("W width  : ", width);
// console.log("W index  : ", index);
// console.log("W object  : ", object);
// const BeforeClickIndex =
//   +state.stateAll.dataPizzaBeforeClickOrder.findIndex(
//     (el) => el.id === id
//   );
// if (BeforeClickIndex < 0) {
//   state.stateAll.dataPizzaBeforeClickOrder = [
//     ...state.stateAll.dataPizzaBeforeClickOrder,
//     {
//       id: id,
//       // imgSrc: firmenna,
//       // name: "Fipmenna",
//       width: width,
//       size: size,
//       quantity: 1,
//       priceOld: +priceOld,
//       priceNew: +priceNew,
//       priceAll: +priceNew,
//     },
//   ];
// } else {
//   state.stateAll.dataPizzaBeforeClickOrder[
//     BeforeClickIndex
//   ].quantity += 1;
//   state.stateAll.dataPizzaBeforeClickOrder[BeforeClickIndex].priceOld +=
//     +priceOld;
//   state.stateAll.dataPizzaBeforeClickOrder[BeforeClickIndex].priceNew +=
//     +priceNew;
//   state.stateAll.dataPizzaBeforeClickOrder[BeforeClickIndex].priceAll +=
//     +priceNew;
// }
//
// const BasketIndex = +state.stateBasket.findIndex(
//   (el) => el.id === id && el.width === width && el.size === size
// );

// console.log("Count === : ", state.count);
// console.log("BasketIndex ??? 0 / 1: ", BasketIndex);
// console.log("order cl id : ", id);
// console.log("order cl index : ", index);
// console.log("order cl width : ", width);
// console.log("order cl size : ", size);
// //

// console.log("[0] ? : ", state.stateBasket[0].id);
// console.log("[0] ?: ", state.stateBasket[0].width);
// console.log("[0] ?: ", state.stateBasket[0].size);

// if (BasketIndex < 0) {
//   state.stateBasket = [
//     ...state.stateBasket,
//     {
//       id: id,
//       // imgSrc: firmenna,name: "Fipmenna",
//       width: width,
//       size: size,
//       quantity: 1,
//       priceOld: +priceOld,
//       priceNew: +priceNew,
//       priceAll: +priceNew,
//     },
//   ];
// } else {
//   state.stateBasket[BasketIndex].quantity += 1;
//   state.stateBasket[BasketIndex].priceOld += +priceOld;
//   state.stateBasket[BasketIndex].priceNew += +priceNew;
//   state.stateBasket[BasketIndex].priceAll += +priceNew;
// }
//
//
//
