const API_KEY = `9068cbb504637a17e930924b9651b7d9`;
const weatherData = city =>{
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayData(data))
}

// set inner text
const displayData = id =>{
    document.getElementById("city-name").innerText = id.name;
    document.getElementById("sentimetre").innerText = id.main.temp;
    document.getElementById("weather-status").innerText = id.weather[0].main;
    console.log(id)
    

}

document.getElementById("search-button").addEventListener('click', function(){
    const textValue = document.getElementById("input-field").value;
    weatherData(textValue);
})
weatherData("Dhaka")