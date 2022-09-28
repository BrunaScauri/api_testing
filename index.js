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
      'X-RapidAPI-Key': process.env.RAPID_API_KEY,
      'X-RapidAPI-Host': process.env.RAPID_API_HOST,
    },
  };

  axios.request(options).then((response) => {
    console.log(response.data);
    res.json(response.data);
  }).catch((err) => {
    console.error(err);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
