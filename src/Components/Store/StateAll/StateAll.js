// import firmenna from "../PizzaSite/imgPizza/firmenna.webp";
import firmenna from "./ImgCard/firmenna.webp";
import gribi from "./ImgCard/gribi.png";
import salami from "./ImgCard/salami.webp";
import salami2 from "./ImgCard/salami2.png";
import salat from "./ImgCard/salat.webp";

import sirnaa from "./ImgCard/sirnaa.png";
import kalbasa from "./ImgCard/kalbasa.png";
import ovocheva from "./ImgCard/ovocheva.webp";
import ovoshhnaya222 from "./ImgCard/ovoshhnaya222.png";
import peperoni from "./ImgCard/peperoni.webp";
import peperoni2 from "./ImgCard/peperoni2.png";
import poDomashnemy from "./ImgCard/poDomashnemy.png";
import english from "./ImgCard/english.png";

export const stateAll = {
  arrayDataPizza: [
    {
      id: "0Signature ",
      name: "Signature ",
      imgSrc: firmenna,
      type: "vegetarian",
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

    {
      id: "1With-Mushrooms",
      name: "With-Mushrooms",
      imgSrc: gribi,
      type: "vegetarian",
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

    {
      id: "2With-Salami",
      name: "With-Salami",
      imgSrc: salami2,
      type: "acute",
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
    // asd
    {
      id: "4Sirnaa",
      name: "Sirnaa",
      imgSrc: sirnaa,
      type: "vegetarian",
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
    {
      id: "5Kalbasa",
      name: "Kalbasa",
      imgSrc: kalbasa,
      type: "acute",
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
    {
      id: "6Ovocheva",
      name: "Ovocheva",
      imgSrc: ovoshhnaya222,
      type: "vegetarian",
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
    //
    {
      id: "7Peperoni",
      name: "Peperoni",
      imgSrc: peperoni2,
      type: "vegetarian",
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
    {
      id: "8PoDomashnemy",
      name: "PoDomashnemy",
      imgSrc: poDomashnemy,
      type: "vegetarian",
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
    {
      id: "3English",
      name: "English",
      imgSrc: english,
      type: "vegetarian",
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
