const Sequelize = require('sequelize');
const sequelize = require("./index.js");
console.log("schema.js is ran")
let insert_dummy = true;

const items = sequelize.define(
  "items",
  {
    shoe_id: { type: Sequelize.STRING, primaryKey: true },
    item_name: Sequelize.STRING,
    price: Sequelize.DECIMAL(5, 2),
    category: Sequelize.STRING,
    front_paragraph: Sequelize.STRING,
		complete_description: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

//tuple to be unqique
const item_colors = sequelize.define(
  "item_colors",
  {
    shoe_id: { type: Sequelize.STRING, primaryKey: true },
    color_id: { type: Sequelize.STRING, primaryKey: true },
		text_of_color: Sequelize.STRING,
		SKU: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

//triple to be unqique
const item_pictures = sequelize.define(
  "item_pictures",
  {
    shoe_id: { type: Sequelize.STRING, pirmaryKey: true },
    color_id: { type: Sequelize.STRING, primaryKey: true },
    orientation: { type: Sequelize.STRING, primaryKey: true },
    image_link: Sequelize.STRING
  },
  {
    timestamps: false
  }
);

module.exports = {items,item_colors,item_pictures}



if (insert_dummy) {


  let test_items = 50;
  let test_colors = 4 ;
  let test_images = 6;
//MAYBE REFATOR SIZE
  for (let i = 0; i < test_items; i++) {
    items
      .create({
        shoe_id: "M"+i,
        item_name: "Yike Air Min 5"+i,
        price: 419.99,
				category: "Tripping Shoe",
				sold_out_size: '9.5',
        front_paragraph: "Shoe designed against elderlies",
        complete_description: "Will do later"
      })
      .then(() => console.log("sucess"))
      .catch((err, data) => console.log("err1"));

    for (let j = 0; j < test_colors; j++) {
      item_colors
        .create({
          shoe_id: "M" + i,
          color_id: "C" + j,
					color_text: "DESCRIPTION_FOR_" +"M"+i+"C"+j, //ipsum
					SKU: "m"+i+"c"+j
        })
        .then(() => console.log("sucess2"))
        .catch((err, data) => console.log("err2"));

      for (let k = 0; k < test_images; k++) {
        item_pictures
          .create({
            shoe_id: "M" + i,
            color_id: "c" + j,
            image_link: "m"+i+"c"+j+"o"+k,
            orientation: "O" + k
          })
          .then(() => console.log("sucess3"))
          .catch((err, data) => console.log("err3"));
      }
    }
  }
}
