const express = require('express');
const app = express();
require("./config/mongoose.config");
const PORT = 8000;

app.use(express.json(), express.urlencoded({ extended: true }));

const Routes = require('./routes/jokes.routes');
Routes(app);

app.listen(PORT, ()=> {
    console.log(`The server is up and running at port ${PORT}.`)
})