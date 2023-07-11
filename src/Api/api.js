import axios from 'axios';
let key=process.env.REACT_APP_API_KEY
let base_url='https://weatherapi-com.p.rapidapi.com/forecast.json?q='
const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': key,
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
  };

 export const fetchdata = async (url)=>{
      const {data}= await axios.get(`${base_url}${url}`,options)
      return data;
}
