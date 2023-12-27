import { createSlice } from "@reduxjs/toolkit";
import { state } from "./StatePizza";
import { determineSize, orderFn } from "./PizzaSliceFunction.js";

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
      objectCard.currentStateWidth = width;
      determineSize(width, objectCard.currentStateSize, objectCard);
    },
    clickSize: (state, action) => {
      const id = action.payload.target.id; //   0Firmennaa
      const size = action.payload.target.value; // small /  medium  / large
      const index = state.stateAll.arrayDataPizza.findIndex(
        (el) => el.id === id
      );
      const objectCard = state.stateAll.arrayDataPizza[index]; //  {}
      objectCard.currentStateSize = size;

      determineSize(objectCard.currentStateWidth, size, objectCard);
    },
    clickOrder: (state, action) => {
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

      // orderFn(BasketIndex, id, objPizza, state);
      if (BasketIndex < 0) {
        state.stateBasket = [
          ...state.stateBasket,
          {
            id: id,
            imgSrc: objPizza.imgSrc,
            name: objPizza.name,
            compositionOfProducts: objPizza.compositionOfProducts,
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
      }
      // else {
      //   state.stateBasket.splice(index, 1);
      // }
    },
    plusQuantity: (state, action) => {
      const index = action.payload.target.value;
      state.stateBasket[index].quantity += 1;
      state.stateBasket[index].priceAll += state.stateBasket[index].priceNew;
    },
    delPizza: (state, action) => {
      console.log("length 1: ", state.stateBasket.length);
      const index = +action.payload.target.value;
      console.log("index del: ", index);
      state.stateBasket.splice(index, 1);
      console.log("length 2: ", state.stateBasket.length);
    },
    compositionOfProducts: (state, action) => {
      const index = action.payload;
      // if (state.stateBasket.length > 0) {
      // console.log("index ??? : ", index);
      // console.log(" state.keys: ", Object.keys(state));
      // //
      // console.log(" stateBasket.keys: ", Object.keys(state.stateBasket[index]));
      state.compositionOfProducts.name = state.stateBasket[index].name;
      state.compositionOfProducts.imgSrc = state.stateBasket[index].imgSrc;
      state.compositionOfProducts.array =
        state.stateBasket[index].compositionOfProducts;
      // }
    },
    addPagination: (state, action) => {
      console.log("addPagination action.payload: ", action.payload);
      if (action.payload > 1660) {
        console.log("aaa");
        state.statePagination.sizePage = 6;
      } else if (1450 < action.payload && action.payload < 1660) {
        console.log("bbb");
        state.statePagination.sizePage = 5;
      } else if (1200 < action.payload && action.payload < 1450) {
        console.log("ccc");
        state.statePagination.sizePage = 4;
      } else if (900 < action.payload && action.payload < 1200) {
        console.log("ddd");
        state.statePagination.sizePage = 3;
      } else if (680 < action.payload && action.payload < 900) {
        console.log("eee");
        state.statePagination.sizePage = 2;
      } else if (action.payload < 680) {
        console.log("fff");
        state.statePagination.sizePage = 1;
      }

      console.log(
        "state.statePagination.sizePage : ",
        state.statePagination.sizePage
      );
      // state.statePagination.sizePage = 2;
      state.statePagination.arrayLength = state.stateAll.arrayDataPizza.length;
      state.statePagination.countPages = Math.ceil(
        state.statePagination.arrayLength / state.statePagination.sizePage
      );
    },
    changePaginationPages: (state, action) => {
      console.log("changePaginationPages : ", action.payload);
      let pageWidth = action.payload.pageWidth;

      if (pageWidth > 1660) {
        state.statePagination.sizePage = 6;
      } else if (pageWidth < 1660) {
        state.statePagination.sizePage = 5;
      } else if (pageWidth < 1450) {
        state.statePagination.sizePage = 4;
      } else if (pageWidth < 1200) {
        state.statePagination.sizePage = 3;
      } else if (pageWidth < 900) {
        state.statePagination.sizePage = 2;
      } else if (pageWidth < 680) {
        state.statePagination.sizePage = 1;
      }
      // console.log("active : ", action.payload);
      state.statePagination.active = action.payload.number;
      state.statePagination.countPages = Math.ceil(
        state.statePagination.arrayLength / state.statePagination.sizePage
      );
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
  compositionOfProducts,
  addPagination,
  changePaginationPages,
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
//
//
// if (BasketIndex < 0) {
//   state.stateBasket = [
//     ...state.stateBasket,
//     {
//       id: id,
//       imgSrc: objPizza.imgSrc,
//       name: objPizza.name,
//       width: objPizza.currentStateWidth,
//       size: objPizza.currentStateSize,
//       quantity: 1,
//       priceOld: +objPizza.currentPriceOld,
//       priceNew: +objPizza.currentPriceNew,
//       priceAll: +objPizza.currentPriceNew,
//     },
//   ];
// } else {
//   state.stateBasket[BasketIndex].quantity += 1;
//   state.stateBasket[BasketIndex].priceAll += +objPizza.currentPriceNew;
// }
//
//
//
// if (width === "thin") {
//   if (objectCard.currentStateSize === "small") {
//     objectCard.currentPriceOld = objectCard.price.thin.small.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.small.priceNew;
//   } else if (objectCard.currentStateSize === "medium") {
//     objectCard.currentPriceOld = objectCard.price.thin.medium.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.medium.priceNew;
//   } else {
//     objectCard.currentPriceOld = objectCard.price.thin.big.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.big.priceNew;
//   }
// } else {
//   console.log("if");
//   if (objectCard.currentStateSize === "small") {
//     objectCard.currentPriceOld = objectCard.price.thick.small.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.small.priceNew;
//   } else if (objectCard.currentStateSize === "medium") {
//     objectCard.currentPriceOld = objectCard.price.thick.medium.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.medium.priceNew;
//   } else {
//     objectCard.currentPriceOld = objectCard.price.thick.big.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.big.priceNew;
//   }
// }
//
//
//

// if (objectCard.currentStateWidth === "thin") {
//   if (size === "small") {
//     objectCard.currentPriceOld = objectCard.price.thin.small.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.small.priceNew;
//   } else if (size === "medium") {
//     objectCard.currentPriceOld = objectCard.price.thin.medium.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.medium.priceNew;
//   } else {
//     objectCard.currentPriceOld = objectCard.price.thin.big.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thin.big.priceNew;
//   }
// } else {
//   if (size === "small") {
//     objectCard.currentPriceOld = objectCard.price.thick.small.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.small.priceNew;
//   } else if (size === "medium") {
//     objectCard.currentPriceOld = objectCard.price.thick.medium.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.medium.priceNew;
//   } else {
//     objectCard.currentPriceOld = objectCard.price.thick.big.priceOld;
//     objectCard.currentPriceNew = objectCard.price.thick.big.priceNew;
//   }
// }
