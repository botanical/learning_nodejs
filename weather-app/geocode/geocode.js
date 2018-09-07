const request = require('request');

var geocodeAddress = (address, callback) => {
  var encodedAddress = encodeURIComponent(address);
  request(
    {
      url: `http://mapquestapi.com/geocoding/v1/address?key=rUooLZ4XhvU4qaIyhy92C1Qo0eDyGeD1&location=${encodedAddress}`,
      json: true
    },
    (error, response, body) => {
      console.log(`Body status is ${body.info.statuscode}`);
      if (error) {
        callback('Unable to connect to MapQuest servers.');
      }
      else if (body.info.statuscode === 603) {
        callback('Unable to find that address.');
      }
      else if (body.info.statuscode === 0) {
        callback(undefined, {
          address: body.results[0].locations[0].street + ', ' + body.results[0].locations[0].adminArea5 + ', ' + body.results[0].locations[0].adminArea3 + ', ' + body.results[0].locations[0].adminArea1 + ', ' + body.results[0].locations[0].postalCode,
          latitude: body.results[0].locations[0].latLng.lat,
          longitude: body.results[0].locations[0].latLng.lng
        })
      }
    }
  );
};

module.exports.geocodeAddress = geocodeAddress;
