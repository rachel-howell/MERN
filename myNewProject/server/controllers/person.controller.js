const Person = require('../models/person.model');

module.exports.index = (req,res) => {
    res.json({
        message: "Henlo world"
    });
}

module.exports.createPerson = (req,res) => {
    Person.create(req.body)
        .then((person) => res.json(person))
        .catch(err => res.json(err));
}

module.exports.getPeople = (req,res) => {
    Person.find()
        .then((result) =>  {
            res.json(result)
        }).catch((err) => {
            res.json(err); 
        });
}

module.exports.deletePerson = (req, res) => {
    Person.findByIdAndRemove(req.params.id)
        .then((result) =>  {
            res.json(result)
        }).catch((err) => {
            res.json(err); 
        });
}