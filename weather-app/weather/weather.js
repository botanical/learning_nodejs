const request = require('request');

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/6726558a19f188ba24097cb53d65a62f/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        callback('Unable to connect to DarkSky servers.');
      }
      else if (response.statusCode === 400) {
        callback('Unable to find that address.');
      }
      else if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature,
          apparentTemperature: body.currently.apparentTemperature
        });
      }
      else {
        callback('Unable to fetch weather');
      }
    }
  );
}

module.exports.getWeather = getWeather;
