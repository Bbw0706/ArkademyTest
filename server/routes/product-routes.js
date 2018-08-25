const router = require('express').Router();
const Product = require('../models/product-models.js');

router.get("/", (req,res) => {
	Product.find({})
	.then(data => res.send(data))
})

router.post("/", (req,res) => {
	Product.create(req.body)
	.then(data => res.send(data))
})

router.put('/:id', (req,res) => {
	const id = req.params.id;
	const {title, price, image, description} = req.body

	Product.findByIdAndUpdate(id, {$set : {title, price, image, description}})
	.then(data => {
		Product.find({})
		.then(data => res.send(data))
	})
})

router.delete("/:id", (req,res) => {
	const {id} = req.params

	Product.findByIdAndRemove(id)
	.then(data => res.send(data))
})

module.exports = router