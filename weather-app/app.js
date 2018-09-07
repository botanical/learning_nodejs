//
//const yargs = require('yargs');
//
//const geocode = require('./geocode/geocode')
//
//const argv = yargs
//  .options({
//    a: {
//      demand: true,
//      alias: 'address',
//      describe: 'Please Provide and Address to fetch Weather Forecast',
//      string: true
//    }
//  })
//  .help()
//  .alias('help', 'h')
//  .argv;
//
//geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//  if (errorMessage) {
//    console.log(errorMessage);
//  } else {
//    console.log(JSON.stringify(results, undefined, 2))
//  }
//});
const request = require('request');
  request(
    {
      url: `https://api.darksky.net/forecast/6726558a19f188ba24097cb53d65a62f/33.610816,-117.666482`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        console.log('Unable to connect to DarkSky servers.');
      }
      else if (response.statusCode === 400) {
        console.log('Unable to find that address.');
      }
      else if (!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
      }
      else {
        console.log('Unable to fetch weather');
      }
    }
  );

// 6726558a19f188ba24097cb53d65a62f
