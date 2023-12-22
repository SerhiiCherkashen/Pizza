// import firmenna from "../PizzaSite/imgPizza/firmenna.webp";
import firmenna from "./ImgCard/firmenna.webp";
import gribi from "./ImgCard/gribi.png";
import salami from "./ImgCard/salami.webp";
import salat from "./ImgCard/salat.webp";

export const stateAll = {
  arrayDataPizza: [
    {
      id: "0Signature ",
      name: "Signature ",
      imgSrc: firmenna,
      price: {
        thin: {
          small: { priceOld: 120, priceNew: 100 },
          medium: { priceOld: 140, priceNew: 119 },
          big: { priceOld: 180, priceNew: 149 },
        },
        thick: {
          small: { priceOld: 1400, priceNew: 1090 },
          medium: { priceOld: 1500, priceNew: 1190 },
          big: { priceOld: 1800, priceNew: 1490 },
        },
      },
      compositionOfProducts: [
        "Signature ",
        "Bacon slices",
        "Grilled chicken",
        "Spicy Italian pepperoni sausages",
        "Ham",
        "Paprika",
        "Herbs",
        "Mozzarella",
      ],
      currentStateWidth: "thin",
      currentStateSize: "small",
      currentPriceOld: 120,
      currentPriceNew: 100,
    },

    // { name: "Gribi", imgSrc: gribi, priceOld: "130 ua", priceNew: "109 ua" },
    {
      id: "1With-Mushrooms",
      name: "With-Mushrooms",
      imgSrc: gribi,
      price: {
        thin: {
          small: { priceOld: 220, priceNew: 199 },
          medium: { priceOld: 240, priceNew: 219 },
          big: { priceOld: 280, priceNew: 249 },
        },
        thick: {
          small: { priceOld: 290, priceNew: 239 },
          medium: { priceOld: 270, priceNew: 259 },
          big: { priceOld: 290, priceNew: 279 },
        },
      },
      compositionOfProducts: [
        "With-Mushrooms",
        "Fresh champignons",
        "Tomatoes",
        "cucumbers",
        " Bell pepper",
        "Hard cheese",
        "Olives",
      ],
      currentStateWidth: "thin",
      currentStateSize: "small",
      currentPriceOld: 220,
      currentPriceNew: 199,
    },

    // { name: "Salami", imgSrc: salami, priceOld: "110 ua", priceNew: "99 ua" },
    {
      id: "2With-Salami",
      name: "With-Salami",
      imgSrc: salami,
      price: {
        thin: {
          small: { priceOld: 320, priceNew: 299 },
          medium: { priceOld: 340, priceNew: 319 },
          big: { priceOld: 380, priceNew: 349 },
        },
        thick: {
          small: { priceOld: 370, priceNew: 339 },
          medium: { priceOld: 380, priceNew: 349 },
          big: { priceOld: 390, priceNew: 379 },
        },
      },
      compositionOfProducts: [
        "With-Salami",
        "salami sausage",
        "mozzarella cheese",
        "hard cheese",
        "tomatoes in their own juice",
        "cream",
        "Dor Blue cheese",
      ],
      currentStateWidth: "thin",
      currentStateSize: "small",
      currentPriceOld: 320,
      currentPriceNew: 299,
    },
    // { name: "Salat", imgSrc: salat, priceOld: "120 ua", priceNew: "79 ua" },
    {
      id: "3Four-Cheeses",
      name: "Four-Cheeses",
      imgSrc: salat,
      price: {
        thin: {
          small: { priceOld: 420, priceNew: 399 },
          medium: { priceOld: 440, priceNew: 419 },
          big: { priceOld: 480, priceNew: 449 },
        },
        thick: {
          small: { priceOld: 140, priceNew: 109 },
          medium: { priceOld: 140, priceNew: 119 },
          big: { priceOld: 180, priceNew: 149 },
        },
      },
      compositionOfProducts: [
        "Four-Cheeses",
        "Mozzarella cheese ",
        " Ricotta cheese",
        "parmesan cheese",
        " Gorgonzola cheese",
      ],
      currentStateWidth: "thin",
      currentStateSize: "small",
      currentPriceOld: 420,
      currentPriceNew: 399,
    },
  ],
  dataPizzaBeforeClickOrder: [
    {
      //     id: "0Firmennaa",
      //     name: "Firmennaa",
      //     imgSrc: firmenna,
      //     width: "thin",
      //     size: "small",
      //     quantity: 1,
      //     priceOld: 223,
      //     priceNew: 123,
      //     priceAll :0
    },
  ],
};
