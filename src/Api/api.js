import axios from 'axios';

let base_url='https://weatherapi-com.p.rapidapi.com/forecast.json?q='
const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '0d0b5028bfmshcd46054ed021906p193cd9jsn47dc70454671',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
  };

 export const fetchdata = async (url)=>{
      const {data}= await axios.get(`${base_url}${url}`,options)
      return data;
}
