/*
const img = document.querySelector('img');
const searchBtn = document.getElementById('searchBtn');
const searchBar = document.getElementById('searchBar');

function displayImage() {
  const searchTerm = searchBar.value
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=erZiZzIv8Xlemiq4AOSV3KCHjIPiTzN3&s=${searchTerm}`)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (!response.data || !response.data.images) {
        console.log('No image data returned:', response);
        return;
      }
      img.src = response.data.images.original.url;
    })
    .catch(function(error) {
      console.log('Fetch failed: ', error);
    });
}

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();

  displayImage();
  searchBar.value = '';
});
*/

async function getWeather(location) {
    try {
        // const location = searchBar.value;
        let weather = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QKH7NRC95WQ4AVCEV5HBRJABF`);
        let response = await weather.json();

        if (!response.data) {
            console.log('No data returned: ', response);
            return;
    }
        console.log(response);
    } catch (error) {
    console.log('Catch error: ', error);
}
};

getWeather('london');