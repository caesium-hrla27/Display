const { items, item_colors, item_pictures } = require("./schema.js");

var obj = {};

//takes in shoe id;
obj.getInfo = function(sid) {

	return   items.findOne({ where: { shoe_id: sid } });
  // items
  //   .findOne({ where: { shoe_id: sid } })
  //   .then(data => console.log(data.dataValues))
  //   .catch(err => console.log("error"));
};

obj.findColors = function(sid) {
  // item_colors
  //   .findOne({ where: { shoe_id: sid } })
  //   .then(data => console.log(data.dataValues))
	// 	.catch(err => console.log("error"));
		return   item_colors.findAll({ attributes:[ 'color_id','text_of_color'], where: { shoe_id: sid } });
};

obj.findPictures = function(sid, cid) {
	// item_pictures
	// .findOne({ where: { shoe_id: sid, color_id:cid} })
	// .then(data => console.log(data.dataValues))
	// .catch(err => console.log(err));
	return item_pictures.findAll({ attributes:[ 'orientation', 'image_link'], where: { shoe_id: sid, color_id:cid} });
};

module.exports = obj;
