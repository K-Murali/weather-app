import React, { useContext } from 'react'
import Search from './Search'
import { Context } from '../Api/context';

const Heading = () => {
  const {city} = useContext(Context);
  return (
    <div>
  <div name='intro' className=" container mx-auto  items-center   justify-center pt-28  md:flex sm:flex-auto">
      <h1 className='text-center md:text-4xl text-3xl font-semibold'>Weather of {city}</h1>
     
        </div>
    </div>
  )
}

export default Heading
