/* BASE URL */
export const baseUrl: string = 'https://api.openweathermap.org'

/* GET WEATHER URL */

export const getWeatherUrl = (city: string): string =>
  `/data/2.5/weather?q=${city}&appid=HERE_PUT_YOUR_TOKEN&units=metric`