const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const models = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const fs = require('fs');

const files = fs.readdirSync(path.join(__dirname, 'routes'));
files.forEach(function (file) {
    const routes = require('./routes/' + file);
    routes(app);
})

const PORT = process.env.PORT || 5000;
models.sequelize.sync().then(() => {
    app.listen(PORT);
});