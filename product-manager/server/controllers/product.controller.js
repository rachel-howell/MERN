const Product = require('../model/product.model');

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.getProducts = (req,res) => {
    Product.find()
        .then(product => res.json(product))
        .catch(err => res.json(err))
}