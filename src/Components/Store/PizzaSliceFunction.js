export const determineSize = (width, size, objectCard) => {
  if (width === "thin") {
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
};
export const orderFn = (BasketIndex, id, objPizza, state) => {
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
};
