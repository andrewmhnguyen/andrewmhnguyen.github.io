var request = new XMLHttpRequest()
var key = config.KEY
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?id=5392171&appid=' + key + '&units=imperial', true)

request.onload = function () {
    var data = JSON.parse(this.response)
	let temper = data.main.temp
	document.getElementById("weather1").innerHTML = temper
}

request.send()