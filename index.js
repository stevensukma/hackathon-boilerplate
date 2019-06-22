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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
models.sequelize.sync().then(() => {
    app.listen(PORT);
});
