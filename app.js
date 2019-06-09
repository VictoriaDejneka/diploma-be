const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/questionRoute.js');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(routes);

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});