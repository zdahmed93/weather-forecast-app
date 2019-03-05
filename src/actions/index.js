import axios from 'axios';

const API_KEY = '0b6bcf7273cbad2a221c7baacdcb8e17';
const ROOT_URL= `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER='FETCH_WEATHER';

export function fetchWeather(city,country) {
    const url=`${ROOT_URL}&q=${city},${country}`;
    const request=axios.get(url);

    //console.log('Request:',request);
    return {
        type: FETCH_WEATHER,
        payload: request
    }
}