console.log('controller loaded');

obj = {name: "default"};

obj.get = (req, res) => {
    console.log(obj.name, "get")
    res.status(200).send();
}
obj.post = (req, res) => {
    console.log(obj.name, "post")
    console.log(req.body);
    res.status(201).send();
}
obj.delete = (req, res) => {
    console.log(obj.name, "delete")
    res.status(204).send();
}

module.exports = obj

