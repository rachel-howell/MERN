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

module.exports.getProductById = (req,res) => {
    Product.findOne({_id: req.params.id})
        .then(product => res.json(product))
        .catch(err => res.json(err))
}

module.exports.updateProduct = (req,res) => {
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((result) => res.json(result))
        .catch(err => res.json(err))
}

module.exports.deleteProduct = (req, res) => {
    Product.findOneAndDelete({_id: req.params.id})
        .then((result) => res.json(result))
        .catch(err => res.json(err))
}