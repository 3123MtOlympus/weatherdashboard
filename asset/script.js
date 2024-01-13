// // // API Key and Base URL
// // const apiKey = '9f6c21a58902dba2f9890b61a635bd4d';
// // const apiUrl = 'https://api.openweathermap.org/data/2.5/';
// // const forecastCards = document.querySelectorAll('.formatDisplay')

// // let cityName = 'Los Angeles';


// // // Event listener for form submission
// // document.getElementById('cityForm').addEventListener('submit', function (e) {
// //     e.preventDefault();

// //         // Get user input
// //     const city = document.getElementById('cityInput').value;

// //         // Call function to fetch weather data
// //         getWeatherData(city);
// //     });

// //     function cityLonLat(cityName) {
// //         var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + ',US&appid=9f6c21a58902dba2f9890b61a635bd4d';
// //         fetch(requestUrl)
// //             .then(function (response) {
// //                 return response.json();
// //             })
// //             .then(function (data) {
// //                 lat = data[0].lat;
// //                 lon = data[0].lon;
// //                 console.log(data);
// //                 console.log(lat);
// //                 console.log(lon);
// //                 currentDay(lat, lon);
// //                 fiveDay(lat, lon);
// //             });
// //     };
// //     cityLonLat(cityName)

// //     function fiveDay(lat, lon) {
// //         var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=9f6c21a58902dba2f9890b61a635bd4d';
// //         fetch(requestUrl)
// //             .then(function (response) {
// //                 return response.json();
// //             })
// //             .then(function (data) {

// //                 displayForecast(data);

// //                 console.log(data);

// //             });
// //     }
// //     function currentDay(lat, lon) {
// //         var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=9f6c21a58902dba2f9890b61a635bd4d';
// //         fetch(requestUrl)
// //             .then(function (response) {
// //                 return response.json();
// //             })
// //             .then(function (data) {

// //                 displayCurrentWeather(data);

// //                 console.log(data);


// //             })
// //     }


// //     // Function to display current weather data
// //     function displayCurrentWeather(data) {
// //       // Update the DOM with current weather information
// //         const currentWeatherContainer = document.getElementById('currentWeather');
// //         currentWeatherContainer.innerHTML =
// //             `<h2>${data.name}, ${data.weather[0].icon} </h2>
// //        <h4>Temperature: ${data.main.temp} °C</h4>
// //        <h4>Humidity: ${data.main.humidity}%</h4>
// //        <h4>Wind Speed: ${data.wind.speed} m/s</h4>`;

// //     }

// //     // // Function to display 5-day forecast
// //     function displayForecast(data) {
// //         const forecastContainer = document.getElementById('forecast');
// //         forecastContainer.innerHTML = '';  
    
// //         for (var i = 0; i < data.list.length; i++) {
// //             forecastContainer.innerHTML +=
// //                 `<h2>${data.list[i].name}, ${data.list[i].weather[0].icon}</h2>
// //                <p>Temperature: ${data.list[i].main.temp} °C</p>
// //                <p>Humidity: ${data.list[i].main.humidity}%</p>
// //                <p>Wind Speed: ${data.list[i].wind.speed} m/s</p>`;
// //         }
// //     }
    
// //     function displayForecast(data) {
// //         const forecastCards = document.querySelectorAll('.formatDisplay');
// //         forecastCards.forEach((card, i) => {
// //             card.innerHTML =
// //                 `<h2>${data.list[i].name}, ${data.list[i].weather[0].icon}</h2>
// //                <p>Temperature: ${data.list[i].main.temp} °C</p>
// //                <p>Humidity: ${data.list[i].main.humidity}%</p>
// //                <p>Wind Speed: ${data.list[i].wind.speed} m/s</p>`;
// //         });
// //     }
    


// // API Key and Base URL
// const apiKey = '9f6c21a58902dba2f9890b61a635bd4d';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/';
// const forecastCards = document.querySelectorAll('.forecastDisplay');

// // Event listener for form submission
// document.getElementById('cityForm').addEventListener('submit', function (e) {
//     e.preventDefault();

//     // Get user input
//     const city = document.querySelector('.cityInput').value;

//     // Call function to fetch weather data
//     getWeatherData(city);
// });

// function getWeatherData(city) {
//     // Call function to get latitude and longitude
//     cityLonLat(city);
// }

// function cityLonLat(cityName) {
//     var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=' + apiKey;
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             const lat = data[0].lat;
//             const lon = data[0].lon;
//             console.log(data);
//             console.log(lat);
//             console.log(lon);
//             currentDay(lat, lon);
//             fiveDay(lat, lon);
//         });
// }

// function fiveDay(lat, lon) {
//     var requestUrl = apiUrl + 'forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             displayForecast(data);
//             console.log(data);
//         });
// }

// function currentDay(lat, lon) {
//     var requestUrl = apiUrl + 'weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
//     fetch(requestUrl)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             displayCurrentWeather(data);
//             console.log(data);
//         })
// }

// // Function to display current weather data
// function displayCurrentWeather(data) {
//     // Update the DOM with current weather information
//     const currentWeatherContainer = document.getElementById('currentWeather');
//     currentWeatherContainer.innerHTML =
//         `<h2>${data.name}, ${data.weather[0].icon}</h2>
//        <h4>Temperature: ${data.main.temp} °C</h4>
//        <h4>Humidity: ${data.main.humidity}%</h4>
//        <h4>Wind Speed: ${data.wind.speed} m/s</h4>`;
// }

// // Function to display 5-day forecast
// function displayForecast(data) {
//     // Update the DOM with forecast information
//     forecastCards.forEach((card, i) => {
//         card.innerHTML =
//             `<h2>${data.list[i].name}, ${data.list[i].weather[0].icon}</h2>
//            <p>Temperature: ${data.list[i].main.temp} °C</p>
//            <p>Humidity: ${data.list[i].main.humidity}%</p>
//            <p>Wind Speed: ${data.list[i].wind.speed} m/s</p>`;
//     });
// }

// API Key and Base URL
const apiKey = '9f6c21a58902dba2f9890b61a635bd4d';
const apiUrl = 'https://api.openweathermap.org/data/2.5/';
const forecastCards = document.querySelectorAll('.forecastDisplay');

// Event listener for form submission
document.getElementById('cityForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get user input
    const city = document.querySelector('.cityInput').value;

    // Call function to fetch weather data
    getWeatherData(city);
});

// Event listeners for city buttons
document.querySelectorAll('.city-btn').forEach(function (button) {
    button.addEventListener('click', function () {
        const cityName = this.id;
        getWeatherData(cityName);
    });
});

function getWeatherData(city) {
    // Call function to get latitude and longitude
    cityLonLat(city);
}

function cityLonLat(cityName) {
    var requestUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + cityName + '&appid=' + apiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            console.log(data);
            console.log(lat);
            console.log(lon);
            currentDay(lat, lon);
            fiveDay(lat, lon);
        });
}

function fiveDay(lat, lon) {
    var requestUrl = apiUrl + 'forecast?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayForecast(data);
            console.log(data);
        });
}

function currentDay(lat, lon) {
    var requestUrl = apiUrl + 'weather?lat=' + lat + '&lon=' + lon + '&appid=' + apiKey;
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            displayCurrentWeather(data);
            console.log(data);
        });
}



// Function to display current weather data
function displayCurrentWeather(data) {
    
    const currentWeatherContainer = document.getElementById('currentWeather');
    const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    

//Convert to Fahrenheit

    const temperatureF = (data.main.temp - 273.15) * 9/5 + 32;

    currentWeatherContainer.innerHTML =
            `<h2>${data.name}</h2>
        <img id="currentWeatherIcon" src="${iconUrl}" alt="Weather Icon">
        <h4>Temperature: ${temperatureF.toFixed(2)} °F</h4>
        <h4>Humidity: ${data.main.humidity}%</h4>
        <h4>Wind Speed: ${data.wind.speed} m/s</h4>`;
}

// Function to display 5-day forecast
function displayForecast(data) {

    // Days of the 5 day forecast
    const groupedByDate = groupByDate(data.list);

    // Search the DOM with forecast information
    forecastCards.forEach((card, i) => {
        // Get the forecast for each day
        const dailyForecast = groupedByDate[i];

        const iconUrl = `https://openweathermap.org/img/wn/${dailyForecast[0].weather[0].icon}.png`;

        // Convert Kelvin to Fahrenheit
        const temperatureF = (dailyForecast[0].main.temp - 273.15) * 9/5 + 32;

        // Get the timestamp for the forecast and create a Date object
        const timestamp = dailyForecast[0].dt * 1000; // Convert to milliseconds
        const date = new Date(timestamp);

        // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

        card.innerHTML = `
            <h2>${data.city.name}</h2>
            <img src="${iconUrl}" alt="Weather Icon">
            <p>Day: ${dayOfWeek}</p>
            <p>Temperature: ${temperatureF.toFixed(2)} °F</p>
            <p>Humidity: ${dailyForecast[0].main.humidity}%</p>
            <p>Wind Speed: ${dailyForecast[0].wind.speed} m/s</p>`;
    });
}

// Helper function to group forecast data by date
function groupByDate(list) {
    const grouped = {};
    list.forEach(forecast => {
        const date = new Date(forecast.dt * 1000).toLocaleDateString();
        grouped[date] = grouped[date] || [];
        grouped[date].push(forecast);
    });
    return Object.values(grouped);
}

