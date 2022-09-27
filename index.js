const express = require('express');
// const axios = require("axios");
const app = express();

app.get('/', (req, res) => {
	try {
	// const response = "https://space-news.p.rapidapi.com/news/guardian"
	// res.send(response.data)
	res.send('hello, api!');
	} catch(e){
		console.error(e)
	}
});

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

app.listen(3000, () => console.log('Listening on port 3000!'));
