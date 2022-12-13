const Author = require('../models/author.model');

module.exports.createAuthor = (req,res) => {
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.getAuthors = (req,res) => {
    Author.find()
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.getAuthorById = (req,res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req,res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req,res) => {
    Author.findOneAndDelete({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}