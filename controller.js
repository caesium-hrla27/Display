console.log('controller loaded');
const db = require('./db/dbHelper');

db.getInfo
obj = {name: "default"};

obj.get = (req, res) => {

	res.status(200).send();
}

obj.getInfo = (req, res) => {

	console.log(obj.name, "getInfo")
	db
	.getInfo(req.query.shoe_id)
	.then( (data)=>
		res.status(200).send(data)
	)
	.catch ( (err) =>{
		res.status(404).send("err");
	})

}

obj.getColors = (req, res) => {
	console.log(obj.name, "getColors")
	db
	.findColors(req.query.shoe_id)
	.then( (data)=>
		res.status(200).send(data)
	)
	.catch ( (err) =>{
		res.status(404).send("err");
	})
}

obj.getPicutres = (req, res) => {
	console.log(obj.name, "getPictures")
	db
	.findPictures(req.query.shoe_id,req.query.color_id)
	.then( (data)=>
		res.status(200).send(data)
	)
	.catch( (err) =>{
		res.status(404).send("err");
	})
}

obj.post = (req, res) => {
    console.log(obj.name, "post")
    console.log(req.body);
    res.status(201).send();
}
obj.get = (req, res) => {
    console.log(obj.name, "get")
    res.status(204).send();
}



module.exports = obj

