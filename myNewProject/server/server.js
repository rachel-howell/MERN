const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
require('./routes/person.routes')(app);
require('./config/mongoose.config');


    
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));