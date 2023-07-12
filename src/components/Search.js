import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { Context } from "../Api/context";

const Search = () => {

    const {setcity,itemList, setItemList,} = useContext(Context);
 
    const handlesearch=()=>{
        let e= document.getElementsByName('search')[0]
       setcity(e.value)
       let q=e.value;
         setItemList(itemList.concat(q))
      }
    
  return (
    <div>
        <div
          className="container md:flex-row rounded-3xl w-fit border flex justify-center mt-8 items-center mx-auto   "
          x-data="{ search: '' }"
        >
         
            <input
            name="search"
              type="search"
              size={125}
              className="  bg-transparent rounded-l-3xl md:w-fit w-60 px-4 py-1.5 text-left text-slate-500  focus:outline-none"
              placeholder="Search here.."
         
              
            />
         
        <button
              type="submit"
              onClick={handlesearch}
              className="flex items-center bg-blue-500 justify-center w-20 h-9 text-white rounded-r-3xl"
            >  Search</button>
            {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
      </div>
        </div>

  );
};

export default Search;
