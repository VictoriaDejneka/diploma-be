const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./src/userRoute.js');
const bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(cors());
app.use(routes);

app.listen(8080, () => {
  console.log('Example app listening on port 8080!');
});