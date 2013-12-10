export default DS.JSONSerializer.extend({

  extract: function(store, type, payload) {
    var weatherCurrent = payload.weatherCurrent.current_observation;
    var weatherForecast = payload.weatherForecast

    currentInfo.id = 1;

    console.log(currentInfo);
    return currentInfo;

    // var returnedPayload = {
    //   id: 1,
    //   weather: currentInfo.weather,
    //   icon: currentInfo.icon
    // }

    // window.console.log(returnedPayload);
    // return returnedPayload;

  }
});

  // normalizeHash: {
  //   // Next, normalize individual comments, which (after `extract`)
  //   // are now located under `comments`
  //   weather: function(hash) {
  //     hash.observationTime = hash.temperature_string;
  //     hash.iconUrl = hash.icon_url;
  //     hash.tempC = hash.temp_c;
  //     hash.tempF = hash.temp_f;
  //     delete hash.observation_time;
  //     delete hash.temp_c;
  //     delete hash.temp_f;
  //     return hash;
  //   }
  // }

  // extractSingle: function(store, type, payload, id, requestType) {
  //   debugger;
  //   var forecast = payload.data.current_condition[0],
  //       forecastId = payload.data.request[0].query;
  //   forecast.id = forecastId;

  //   payload = { forecast: forecast};

  //   return this._super(store, type, payload, id, requestType);
  // },

  // normalizeHash: {
  //   // Next, normalize individual comments, which (after `extract`)
  //   // are now located under `comments`
  //   forecast: function(hash) {
  //     debugger;
  //     hash.observationTime = hash.observation_time;
  //     hash.tempC = hash.temp_C;
  //     hash.tempF = hash.temp_F;
  //     hash.weatherDesc = hash.weatherDesc[0].value;
  //     delete hash.observation_time;
  //     delete hash.temp_C;
  //     delete hash.temp_F;
  //     return hash;
  //   }
  // }

// });

/*
{
  {
  "response": {
  "version":"0.1",
  "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
  "features": {
  "conditions": 1
  }
  }
  , "current_observation": {
    "image": {
    "url":"http://icons-ak.wxug.com/graphics/wu2/logo_130x80.png",
    "title":"Weather Underground",
    "link":"http://www.wunderground.com"
    },
    "display_location": {
    "full":"Portland, AR",
    "city":"Portland",
    "state":"AR",
    "state_name":"Arkansas",
    "country":"US",
    "country_iso3166":"US",
    "zip":"71663",
    "magic":"1",
    "wmo":"99999",
    "latitude":"33.23935318",
    "longitude":"-91.51620483",
    "elevation":"45.00000000"
    },
    "observation_location": {
    "full":"Monticello, Arkansas",
    "city":"Monticello",
    "state":"Arkansas",
    "country":"US",
    "country_iso3166":"US",
    "latitude":"33.63605118",
    "longitude":"-91.75548553",
    "elevation":"269 ft"
    },
    "estimated": {
    },
    "station_id":"KLLQ",
    "observation_time":"Last Updated on December 10, 12:53 AM CST",
    "observation_time_rfc822":"Tue, 10 Dec 2013 00:53:00 -0600",
    "observation_epoch":"1386658380",
    "local_time_rfc822":"Tue, 10 Dec 2013 01:25:25 -0600",
    "local_epoch":"1386660325",
    "local_tz_short":"CST",
    "local_tz_long":"America/Chicago",
    "local_tz_offset":"-0600",
    "weather":"Overcast",
    "temperature_string":"32 F (0 C)",
    "temp_f":32,
    "temp_c":0,
    "relative_humidity":"88%",
    "wind_string":"From the NNW at 6 MPH",
    "wind_dir":"NNW",
    "wind_degrees":330,
    "wind_mph":6,
    "wind_gust_mph":0,
    "wind_kph":9,
    "wind_gust_kph":0,
    "pressure_mb":"1026",
    "pressure_in":"30.30",
    "pressure_trend":"+",
    "dewpoint_string":"29 F (-2 C)",
    "dewpoint_f":29,
    "dewpoint_c":-2,
    "heat_index_string":"NA",
    "heat_index_f":"NA",
    "heat_index_c":"NA",
    "windchill_string":"26 F (-3 C)",
    "windchill_f":"26",
    "windchill_c":"-3",
    "feelslike_string":"26 F (-3 C)",
    "feelslike_f":"26",
    "feelslike_c":"-3",
    "visibility_mi":"8.0",
    "visibility_km":"12.9",
    "solarradiation":"--",
    "UV":"0","precip_1hr_string":"-9999.00 in (-9999.00 mm)",
    "precip_1hr_in":"-9999.00",
    "precip_1hr_metric":"--",
    "precip_today_string":"0.00 in (0.0 mm)",
    "precip_today_in":"0.00",
    "precip_today_metric":"0.0",
    "icon":"cloudy",
    "icon_url":"http://icons-ak.wxug.com/i/c/k/nt_cloudy.gif",
    "forecast_url":"http://www.wunderground.com/US/AR/Portland.html",
    "history_url":"http://www.wunderground.com/history/airport/KLLQ/2013/12/10/DailyHistory.html",
    "ob_url":"http://www.wunderground.com/cgi-bin/findweather/getForecast?query=33.63605118,-91.75548553"
  }
}
*/
