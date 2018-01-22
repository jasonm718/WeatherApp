// npm install --save redux-promise
// npm install --save axios
import axios from 'axios';


const API_KEY = 'dc186f3f487594c17d77a3d3aeffdfa7';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';


export function fetchWeather(city){
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  //console.log('Request:', request);

  return{
    type: FETCH_WEATHER,
    payload: request
  };
}
