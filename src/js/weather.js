const weather = document.querySelector(".weather p");
const API_KEY = "f219164ca7942e19f400b9566f155a57";

function geoSuccess(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weather.innerText = `${data.name}, ${data.main.temp}℃ ${data.weather[0].main}`;
    });
}
function geoError() {
  weather.innerText = "위치정보 확인불가";
}

navigator.geolocation.getCurrentPosition(geoSuccess, geoError);
