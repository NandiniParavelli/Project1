import React from 'react'
import { Link } from 'react-router-dom'
import {LiaFilterSolid} from "react-icons/lia"
import { useState } from 'react'
import Filters from './Filters'

const Rooms = () => {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
    <div>
        <div className=" bg-center bg-cover h-96 text-center"
        style={{
            backgroundImage:
              "url('images/RoomsMain.jpg')",
          }}>
            <div className="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-white bg-[#6b7280] bg-opacity-60 px-28 py-8">
                    <h2 className="text-5xl font-bold">Our Rooms</h2>
                    <hr class="w-36 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"></hr>
                    <Link to="/Home"><button
                    type="button"
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-bold uppercase leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Return Home
                    </button></Link>
                </div>
              </div>
            </div> 
          </div>
        
        <div className='text-center text-2xl font-bold pt-5 pb-1'><h1>Featured Rooms</h1></div>
        <div className='flex gap-1' onClick={(e) => {setIsShown(current => !current)
        return(
          <Filters />
        )}}>< LiaFilterSolid/>
        <button>Filters</button></div>
        <div></div>
        
        <hr class="w-36 h-1 mx-auto my-1 bg-black border-0 rounded md:my-5"></hr>
        
      
    </div>
    </>
  )
}

export default Rooms