import { stateAll } from "./StateAll/StateAll";
import { stateBasket } from "./StateBasket/StateBasket";
import { stateHome } from "./StateHome/StateHome";
import { statePagination } from "./StatePagination/StatePagination";

export const state = {
  stateHome: stateHome,
  stateAll: stateAll,
  stateBasket: stateBasket,
  statePagination: statePagination,
  compositionOfProducts: {
    name: "",
    imgSrc: "",
    array: [],
  },
  // dataPizzaBeforeClickOrder: [],
};
