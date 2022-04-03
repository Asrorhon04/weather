const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "2db27faa01f64f0788dda86521734980"
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	
	document.querySelector('div.name-city').innerHTML = data.name;
	document.querySelector('p.temp').innerHTML = Math.round(data.main.temp)+'&deg';
	document.querySelector('p.clouds').innerHTML = data.weather[0]['description'];
	document.querySelector('p.wind').innerHTML = Math.round(data.wind.speed * 3.6) + ' ' + 'km/s';
	
	document.querySelector('p.humidity').innerHTML = data.main.humidity + ' %';
}

getWeather();
document.querySelector('#city').onchange = getWeather;