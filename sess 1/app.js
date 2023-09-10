import { api_key } from "./config.js";

fetch("https://api-basketball.p.rapidapi.com/timezone", {
    method: 'GET',
	headers: {
		'X-RapidAPI-Key': api_key,
		'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
	}
})

.then(response => response.json())

.then(response => {
    console.log(response);
    document.getElementById("text").innerHTML = response.response[0]
})

.catch(err => {
    console.log(err);
});


