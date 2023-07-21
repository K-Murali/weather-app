import React, { useContext ,useEffect,useState} from 'react'
import Card from './Card'
import { Context } from '../Api/context';

const Content = () => {
  const { weatherinfo,city,loading,setloading} = useContext(Context);
  
   useEffect(() => {
       console.log("city changed "+city)
     setloading(false)
   }, [city]);
     return (
      weatherinfo&&!loading&&
    <div className='container block mt-5 mx-auto'>
   
      <div  className='flex flex-wrap gap-2  justify-center items-center'>
      {weatherinfo.forecast.forecastday.map((ele, i = 0) => {
            return (
        <Card key={i++}
          date={ele.date}
          sunrise={ele.astro.sunrise}
          sunset={ele.astro.sunset}
          day={ele.day}
          location={weatherinfo.location}
          current={weatherinfo.current}
          />
          )}
          )}
          </div>

      </div>
  
  )
}

export default Content
