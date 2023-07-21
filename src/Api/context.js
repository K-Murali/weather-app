import React, { createContext, useState, useEffect } from "react";
import {fetchdata} from './api' 

export const Context = createContext();

export const AppDataProvider = (props) => {
  const [weatherinfo, setweatherinfo] = useState(false);
  const [city, setcity] = useState('Kakinada');
  const [loading, setloading] = useState(false);
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    console.log("fetched "+city)
    fetch_category_data(city);
  }, [city]);

  const fetch_category_data = async(query) => {
    setloading(true);
   await fetchdata(`${query}&days=3`).then((contents) => {
      setweatherinfo(contents);
      setloading(false)
    });
  };

  return (
    <Context.Provider
      value={{
       weatherinfo,itemList, setItemList,
       city, setcity,setweatherinfo
       ,loading, setloading
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
