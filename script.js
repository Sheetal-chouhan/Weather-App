let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&Units=matric&q="

let apiKey = "bcbce941481174e138bc2a3304df487b&";

let temp = document.getElementById("temp");
let city = document.getElementById("city");

let humidity = document.getElementById("dh");
let wind = document.getElementById("dw");

let searchBox = document.querySelector(".search input");
let searchBtn = document.getElementById("searchBtn");

let image = document.querySelector(".weatherStatus img");

let card = document.querySelector(".card");

let weatherStatus = document.querySelector(".weatherStatus ");

let inValid = document.getElementById("invalidCity");

async function checkWeather(cityy) {
    let response = await fetch(apiUrl + cityy + "&appid=" + apiKey);
    let data = await response.json();
    
    if(data.cod === "404") {
        
        inValid.style = "display: block;";
    }

    temp.innerHTML = Math.round(data.main.temp - 273.15) + "°C";

    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + "%";

    wind.innerHTML = data.wind.speed + "km/h";

    inValid.style = "display: none;";

    if(data.weather[0].main == "Clouds") {
        image.src = "/animated/cloudy-day-3.svg";
    }
    else if(data.weather[0].main == "Clear") {
        image.src = "/animated/day.svg";
    }
    else if(data.weather[0].main == "Rain") {
        image.src = "/animated/rainy-7.svg";
    }
    else if(data.weather[0].main == "Drizzle") {
        image.src = "/animated/rainy-6.svg";
    }
    else if(data.weather[0].main == "Snow") {
        image.src = "/animated/snowy-6.svg";
    }
    else if(data.weather[0].main == "Thunderstorm") {
        image.src = "/animated/thunder.svg";
    }
    else if( data.weather[0].main == "night") {
        image.src = "/animated/night.svg";
    }
    else if( data.weather[0].main == "sunny") {
        image.src = "/animated/day.svg";
    }
   
    card.style.height = "600px"
    card.style.transition = "0.5s ease";
    card.style.boxShadow = "0 8px 32px rgb(31, 38, 135)";
    card.style.backdropFilter = "blur( 8.5px )";
    card.style.webkitBackdropFilter = "blur( 8.5px )";

    weatherStatus.style.display = "block";

   



}
// checkWeather(searchBox.value);

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
