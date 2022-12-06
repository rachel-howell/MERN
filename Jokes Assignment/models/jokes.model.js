const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        hook: String,
        punchline: String
    }
)

const JokeCollection = mongoose.model("Jokes", JokeSchema);

module.exports = JokeCollection;