import axios from 'axios';

const OPEN_WEATHER_API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?appid=0ad0c14dfffc5518af3b0528dd76612e&units=metric';

// 0ad0c14dfffc5518af3b0528dd76612e
// http://api.openweathermap.org/data/2.5/weather?q=erode&appid=0ad0c14dfffc5518af3b0528dd76612e

module.exports = {

    getTempt: function(locationName) {
        return `Location is ${locationName}`;
    },

    getTemp: (locationName) => {
        var requestUrl = `${OPEN_WEATHER_API_ENDPOINT}&q=${locationName}`;
        return axios.get(requestUrl).then(function(res) {
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            } else {
              return res.data;
                //return res.data.main.temp;
            }
        }, function(res) {
            throw new Error(res.data.message);
        });
    }
}
