const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/philadelphia.json?access_token=pk.eyJ1IjoicmFmYXkxMiIsImEiOiJjazh1OTFqY3IwNXc0M2hzNzd1bmJyMXN0In0.xAzaHjx4rClhjEG2S4oLrQ&limit=1";

  request({ url, json: true }, (error, body) => {
    if (error) {
      console.log("Unable to connect location", undefined);
    } else if (body.features.length === 0) {
      console.log("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          "It is currently " +
          body.currently.temprature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
