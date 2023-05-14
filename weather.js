const getWeather = async () => {

	const cityInput = document.getElementById('city'); // Get the input element
	const cityName = document.getElementById('searchResult');  // Get the search result element
	const city = cityInput.value; // Get the value entered in the input box

	

	cityName.innerHTML = city; // Set the city name in the search result element
	
	//fetching data from API
	const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
	const options = {
	  method: 'GET',
	  headers: {
		'X-RapidAPI-Key': 'db888c02a7msh9a63d220f9f7a13p1b9c84jsn4ea13919490e',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	  }
	};
  
	try {
	  const response = await fetch(url, options);
	  const result = await response.json(); // Parse the response as JSON
  
	  // Access the response data and update the HTML elements
	  cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;
	} catch (error) {
	  console.error(error);
	}
  };
  
  const submitButton = document.getElementById('submit');
submitButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  getWeather();
});

  //getWeather("Delhi");


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'db888c02a7msh9a63d220f9f7a13p1b9c84jsn4ea13919490e',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// const getWeather = (city) => {
// 	cityName.innerHTML=city

// 	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
// 	.then(response => response.json())
// 	.then((response) => {
// 		console.log(response)
// 		cloud_pct.innerHTML = result.cloud_pct;
// 		temp.innerHTML = result.temp;
// 		feels_like.innerHTML = result.feels_like;
// 		humidity.innerHTML = result.humidity;
// 		min_temp.innerHTML = result.min_temp;
// 		max_temp.innerHTML = result.max_temp;
// 		wind_speed.innerHTML = result.wind_speed;
// 		wind_degrees.innerHTML = result.wind_degrees;
// 		sunrise.innerHTML = result.sunrise;
// 		sunset.innerHTML = result.sunset;
// 	})
// 	.catch(err => console.error(err));
// }

// submit.addEventListener("click", (e) => {
// 	e.preventDefault();
// 	getWeather(city.value)
// })

// getWeather('Bangalore');



// //By wrapping the code inside the DOMContentLoaded event listener, it ensures that the JavaScript code will execute after the HTML document has finished loading, allowing the correct binding of event listeners and manipulation of HTML elements.








// //using 2 extensions
// //rapid API
// //live server to run the project

// //dependencies: bootstrap

