const Model = require('../models/jokes.model');


const createJoke = (req,res) => {
    Model.create(req.body)
    .then((result) =>  {
        res.json(result)
    }).catch((err) => {
        console.log(err); 
    });
}

const getJoke = (req,res) => {
    Model.find()
    .then((result) =>  {
        res.json(result)
    }).catch((err) => {
        res.json(err); 
    });
}
const getById = (req,res) => {
    Model.findOne({ _id: req.params._id })
    .then((result) =>  {
        res.json(result)
    }).catch((err) => {
        res.json(err); 
    });
}

const update = (req, res) => {
    Model.findOneAndUpdate({ _id: req.params._id }, req.body, {       
        new: true, 
        runValidators: true 
    })
    .then((result) =>  {
        res.json(result)
    }).catch((err) => {
        res.json(err); 
    });
}

const deleteJoke = (req, res) => {
    Model.remove({_id: req.params._id})
    .then((result) =>  {
        res.json(result)
    }).catch((err) => {
        res.json(err); 
    });
}

module.exports = {
    createJoke,
    getJoke,
    update,
    getById,
    deleteJoke
}