var request = new XMLHttpRequest()

request.open('GET', 'api.openweathermap.org/data/2.5/weather?id=5392171&appid=24e40f29884f1711a3aec72aa439e34a&units=imperial', true)

request.onload = function () {
    var data = JSON.parse(this.response)
    document.getElementById("demo").innerHTML = data.main.temp;
}

request.send()

