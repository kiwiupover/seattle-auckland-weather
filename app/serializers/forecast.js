export default DS.RESTSerializer.extend({

  extractSingle: function(store, type, payload, id, requestType) {
    var forecast = payload.data.current_condition[0];
        id = payload.data.request[0].query
    forecast.id = id;

    payload = { forecast: forecast};

    return this._super(store, type, payload, id, requestType);
  },

  normalizeHash: {
    // Next, normalize individual comments, which (after `extract`)
    // are now located under `comments`
    forecast: function(hash) {
      hash.observationTime = hash.observation_time;
      hash.tempC = hash.temp_C;
      hash.tempF = hash.temp_F;
      hash.weatherDesc = hash.weatherDesc[0].value
      delete hash.observation_time;
      delete hash.temp_C;
      delete hash.temp_F;
      return hash;
    }
  }

});

/*
{
  "data":{
    "current_condition":[
      {
        "cloudcover":"50",
        "humidity":"47",
        "observation_time":"11:00 PM",
        "precipMM":"0.0",
        "pressure":"1033",
        "temp_C":"1",
        "temp_F":"34",
        "visibility":"16",
        "weatherCode":"116",
        "weatherDesc":[
          {
            "value":"Partly Cloudy"
          }
        ],
        "weatherIconUrl":[
          {
            "value":"http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0002_sunny_intervals.png"
          }
        ],
        "winddir16Point":"N",
        "winddirDegree":"0",
        "windspeedKmph":"0",
        "windspeedMiles":"0"
      }
    ],
    "request":[
      {
        "query":"98115",
        "type":"Zipcode"
      }
    ],
    "weather":[
      {
        "date":"2013-12-08",
        "precipMM":"0.0",
        "tempMaxC":"0",
        "tempMaxF":"32",
        "tempMinC":"-6",
        "tempMinF":"21",
        "weatherCode":"113",
        "weatherDesc":[
          {
            "value":"Sunny"
          }
        ],
        "weatherIconUrl":[
          {
            "value":"http:\/\/cdn.worldweatheronline.net\/images\/wsymbols01_png_64\/wsymbol_0001_sunny.png"
          }
        ],
        "winddir16Point":"SE",
        "winddirDegree":"142",
        "winddirection":"SE",
        "windspeedKmph":"7",
        "windspeedMiles":"4"
      }
    ]
  }
}
*/
