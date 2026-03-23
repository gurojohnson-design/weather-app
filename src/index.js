const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');


async function getWeather(location) {
    try {
        // const location = searchBar.value;
        let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=QKH7NRC95WQ4AVCEV5HBRJABF&contentType=json`);
        let response = await weather.json();

        console.log(response);
        return response;
    } catch (error) {
    console.log('Catch error: ', error);
}
};

getWeather('london');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  searchBar.value = '';
});


function renderDOM() {
    // time for background display, location, verbal description, temp, feels like temp, wind, humidity

    const content = document.getElementById('content');

    const location = document.createElement('div') ;
    location.id = 'location';

    const verbDesc = document.createElement('div');
    verbDesc.id = 'verDesc';

    const time = document.createElement('div');
    time.id = 'time';

    const temp = document.createElement('div');
    temp.id = 'temp';

    const feelsLike = document.createElement('div');
    feelsLike.id = 'feelsLike';

    const wind = document.createElement('div');
    wind.id = 'wind';

    const humidity = document.createElement('div');
    humidity.id = 'humidity';

    content.append(location, verbDesc, time, temp, feelsLike, wind, humidity);
}

