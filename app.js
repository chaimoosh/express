const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product');//import route for product
const app = express();

const mongoose = require('mongoose');
let dev_db_url = 'mongodb://someuser:abc1234@ds035776.mlab.com:35776/products_tutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use('/products', product)

let port = 1234;

app.listen(port, () => {
    console.log("Server is running at port " + port);
})