const express = require('express');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const productRoutes = require("./routes/product-routes.js")

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost:27017/arkademytest", { useNewUrlParser: true })
.then(() => console.log("Connected to mongo"))
.catch(err => console.log(err))

const app = express();

app.use(bodyParser.json())

app.use("/product", productRoutes)

const port = 5000 || process.env.PORT

app.listen(port, () => console.log(`Listen to the port of ${port}`))