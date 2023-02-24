export const weatherData = {
  data: {
    coord: {
      lon: 11.4333,
      lat: 44.4667
    },
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04d'
      }
    ],
    base: 'stations',
    main: {
      temp: 286.89,
      feels_like: 286.23,
      temp_min: 284.84,
      temp_max: 288.49,
      pressure: 1015,
      humidity: 73
    },
    visibility: 8000,
    wind: {
      speed: 1.54,
      deg: 10
    },
    clouds: {
      all: 75
    },
    dt: 1677166878,
    sys: {
      type: 2,
      id: 2004497,
      country: 'IT',
      sunrise: 1677132165,
      sunset: 1677171179
    },
    timezone: 3600,
    id: 3181927,
    name: 'Bologna',
    cod: 200
  }
}

export const weatherDataMapped = {
  id: 1,
  name: 'Bologna',
  description: 'Best city in Italy',
  temp_min: 15,
  temp_max: 120,
  humidity: 730
}

export const initialStateFailed = {
  weather: {
    weatherInfoAll: [],
    weatherInfoCurrent: {},
    status: 'failed'
  }
}

export const initialStateIdle = {
  weather: {
    weatherInfoAll: [],
    weatherInfoCurrent: weatherDataMapped,
    status: 'idle'
  }
}
