import { stateAll } from "./StateAll/StateAll";
import { stateBasket } from "./StateBasket/StateBasket";
import { stateHome } from "./StateHome/StateHome";

export const state = {
  stateHome: stateHome,
  stateAll: stateAll,
  stateBasket: stateBasket,
  compositionOfProducts: {
    name: "",
    imgSrc: "",
    array: [],
  },
  // dataPizzaBeforeClickOrder: [],
};
