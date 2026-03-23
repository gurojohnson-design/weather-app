import "./styles.css"



const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');
const content = document.getElementById('content');


async function getWeather(location) {
    try {
        // const location = searchBar.value;
        let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=QKH7NRC95WQ4AVCEV5HBRJABF&contentType=json`);
        let response = await weather.json();

        renderDOM(response);

        console.log(response);
        return response;
    } catch (error) {
    console.log('Catch error: ', error);
}
};

getWeather('new york, NY');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    content.textContent = '';
    getWeather(searchBar.value);
    searchBar.value = '';
});

// create dom
function renderDOM(response) {
    // time for background display, location, verbal description, temp, feels like temp, wind, humidity

    const location = document.createElement('div') ;
    location.id = 'location';
    location.textContent = response.resolvedAddress;

    const verbDesc = document.createElement('div');
    verbDesc.id = 'verDesc';
    verbDesc.textContent = response.currentConditions.conditions;

    const temp = document.createElement('div');
    temp.id = 'temp';
    temp.textContent = `${response.currentConditions.temp} \u00B0F`;

    const feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';
    feelsLike.textContent = `Feels Like: ${response.currentConditions.feelslike} \u00B0F`;

    const wind = document.createElement('div');
    wind.id = 'wind';
    wind.textContent = `Wind: ${response.currentConditions.windspeed} mph`;

    const humidity = document.createElement('div');
    humidity.id = 'humidity';
    humidity.textContent = `Humidity: ${response.currentConditions.humidity}%`;

    content.append(location, verbDesc, temp, feelsLike, wind, humidity);
}
