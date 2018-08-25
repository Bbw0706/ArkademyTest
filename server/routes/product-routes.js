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

router.get("/:id", (req,res) => {
	const {id} = req.params
	Product.findById(id)
	.then(data => res.send(data))
})

// router.put("/:id", (req,res) => {
// 	Product.findByIdAndUpdate()
// })

router.delete("/", (req,res) => {
	const {id} = req.params

	Product.findByIdAndRemove(id)
	.then(data => res.send(data))
})

module.exports = router