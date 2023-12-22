export const numberOfPizzasOrdered = (stateBasket, element) => {
  // let quantity = 0;
  const BskIndex = stateBasket.findIndex(
    (el) =>
      el.id === element.id &&
      el.width === element.currentStateWidth &&
      el.size === element.currentStateSize
  );

  if (stateBasket[BskIndex]) {
    return stateBasket[BskIndex].quantity;
  } else {
    return 0;
  }
};
