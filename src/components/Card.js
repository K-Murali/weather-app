import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faDroplet,faSnowflake,faWind,faSun} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from "react";
const Card = (props) => {
  let d=new Date();
  let date=((d.getFullYear())+'-'+0+((d.getMonth()+1))+'-'+(d.getDate()))
  const [day, setday] = useState(props.day);
  return (
    <div>
      <div className="border p-2 card m-5 w-80 bg-base-100 shadow-xl">
        {" "}
        <h2 className="card-title justify-center">
          <div className={` p-3 mt-3 text-lg text-white badge badge-primary `}>
            { (date==props.date)?'Today':'Upcoming'}
            
          </div>
        </h2>
        <div className="card-body p-0 mx-3  mt-5">
      <div className="border rounded ">
          <h1 className="mx-3 mt-1">{props.date}<p className="float-right">{ d.getHours() + ":" + d.getMinutes()}</p></h1>
          <div className="flex  container w-fit mx-auto justify-center gap-5 items-center">
            <figure>
              <img
                className="    rounded-full w-20 "
                src={day.condition.icon}
                alt="Shoes"
              />
            </figure>

            <div className="flex-col w-fit  container justify-center  items-center">
              <h2 className=" font-semibold   text-left text-4xl">
                {day.maxtemp_c}°c
              </h2>
              <p className="mt-3  justify-between text-lg">
                Feels like&nbsp; <div className=" font-semibold">{day.avgtemp_c}°</div>
              </p>
            </div>
          </div>
          <p className=" text-left mx-4 mb-1 text-md">
            {day.condition.text}, {((date==props.date)?props.current.condition.text:` `)}
          </p>
          </div>

          <div className="flex mt-3 border  rounded justify-around gap-10  items-center">
            <div className="flex-col  flex-wrap p-1 justify-left items-center">
              <p className="mt-2  text-left text-lg">
                Precipitation <FontAwesomeIcon icon={faSnowflake} />
                 </p><div className=" font-semibold">{day.daily_chance_of_rain}% </div>
              <p className="mt-2  justify-between text-lg">
                WindSpeed  <FontAwesomeIcon icon={faWind} />
              </p><div className=" font-semibold">{day.avgvis_km} Kmph</div>
            </div>
            <div className="flex-col  p-1 flex-wrap  justify-left items-center">
              <p className="mt-2   text-lg">
              Radiation <FontAwesomeIcon icon={faSun} />
              </p><div className=" font-semibold"> {day.uv} %</div>
              <p className="mt-2 mb-3 text-lg">
               humidity  <FontAwesomeIcon icon={faDroplet} />
             </p><div className=" font-semibold">{day.avghumidity} %</div>
            </div>
          </div>
          <div className="card-actions mt-3 mx-auto mb-4 flex items-center justify-center">
            <p>Location : {props.location.country}&nbsp;,{props.location.region}&nbsp;,<br/>{props.location.name} {props.location.lat}° {props.location.lon}°</p>
            <p>Last update : {props.current.last_updated}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
