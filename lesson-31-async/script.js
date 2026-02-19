
// function afterwards() {
//   console.log('AFTER')
// }
//
// function first() {
//   console.log('first');
// }
//
// function second() {
//   console.log('second ');
// }
//
// function third() {
//   console.log('third ');
// }
//
//
// console.log('Start')
//
// setTimeout(afterwards, 0);
//
// first()
// second()
// third()
//
//
// console.log('Finish')

// =================================================

// function parseResponse(response) {
//   console.log(response);
//   return response.json();
// }
//
// function showTemperature(data) {
//   console.log(`${data.name}: ${data.main.temp} градусів Цельсія, відчувається як ${data.main.feels_like}`)
// }
//
// const cityName = 'AMSTERDAM';
//
// const weatherPromise = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
//
// weatherPromise
//   .then(parseResponse)
//   .then(showTemperature)
//   .catch(error => {
//     console.log('error: ', error)
//   })
//   .finally(() => {
//   console.log('Процес закінчився')
// })

// =================================================
const cityNameElement = document.getElementById('cityName');
const getWeatherButton = document.getElementById('getButton');
const resultElement = document.getElementById('result');

getWeatherButton.addEventListener('click', async (e) => {
  const cityName = cityNameElement.value;

  const data = await getWeather(cityName);

  if (data) {
    resultElement.innerHTML = `Місто: ${data.name}<br>
    ${data.main.temp} градусів Цельсія, відчувається як ${data.main.feels_like}<br>
    <img src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" >`
  } else {
    resultElement.innerHTML = 'Some error happened'
  }
})

async function getWeather(name) {
  const cityName = name.toUpperCase();

  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }

  return null;
}