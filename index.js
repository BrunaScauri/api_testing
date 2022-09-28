require('dotenv').config();
const express = require('express');
const axios = require('axios').default;
const cors = require('cors');

const app = express();
app.use(cors());
const port = process.env.PORT;

app.get('/', (req, res) => {
  const options = {
    method: 'GET',
    url: 'https://space-news.p.rapidapi.com/news/guardian',
    headers: {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'space-news.p.rapidapi.com',
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
  }).catch((error) => {
    console.error(error);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
