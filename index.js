require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
  try {
    // const response = "https://space-news.p.rapidapi.com/news/guardian"
    // res.send(response.data)
    res.send('hello, api!');
  } catch (e) {
    console.error(e);
  }
});

// axios.request(options).then(function (response) {
// console.log(response.data);
// }).catch(function (error) {
// console.error(error);
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));
