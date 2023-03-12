const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000 ;
const db = require('./models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));


require('./routes/apiRoute')(app);
require('./routes/htmlRoute')(app);

db.sequelize.sync( { force: false } ).then(function() {
    app.listen(PORT, () => {
        console.log("app is listening on: ", PORT)
    })
})