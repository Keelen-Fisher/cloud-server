'use strict';

const express = require('express');
const app = express();


const PORT = process.env.PORT || 3002;


app.get('/', (req, res, next) => {
  res.status(200).send('Hey Everyone!');
});

  app.listen(PORT, () => console.log(`listening on port ${PORT}`));

