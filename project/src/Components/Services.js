import React from 'react'
import {GiWifiRouter, GiVacuumCleaner} from "react-icons/gi";
import {SiPlaywright} from "react-icons/si"
import {FaGuitar} from "react-icons/fa"
import {IoRestaurantSharp} from "react-icons/io5"

const Services = () => {
  return (
    <>
    <div className='bg-[#a3a3a3] p-3 h-full md:h-screen pt-5'>
        <div className='text-center text-3xl font-bold py-2'><h1>Services</h1></div>
        <hr class="w-48 h-1 mx-auto my-1 bg-black border-0 rounded md:my-5"></hr>
        <div className='grid md:grid-cols-3 text-black pt-2'>
            <div className='w-84 p-2'>
                <GiWifiRouter className='h-7 w-10 '/>
                <h2 className='text-md font-semibold underline decoration-solid underline-offset-1 my-3'>Free Wi-Fi</h2>
                <p className='text-sm'>Free Wi-Fi is a wonderful luxury to stay <br></br>in touch with 
                family and friends, share updates  <br></br>on your trip, do research
                on the resort and <br></br>country and so on.</p>
            </div>
            <div className='w-84 p-2'>
                <GiVacuumCleaner className='h-7 w-10 '/>
                <h2 className='text-md font-semibold underline decoration-solid underline-offset-1 my-3'>Daily Housekeeping</h2>
                <p className='text-sm'>While on a getaway, clean surroundings add to <br></br>the experience. 
                Great resorts offer daily <br></br>housekeeping as  an amenity for guests. 
                </p>
            </div>
            <div className='w-84 p-2'> 
                <SiPlaywright className='h-7 w-10'/>
                <h2 className='text-md font-semibold underline decoration-solid underline-offset-1 my-3'>Kids’ Clubs</h2>
                <p className='text-sm'>Kids’ Clubs are wonderful for adults traveling<br></br> with young children. 
                While family time is important<br></br>, adults may still require a little alone 
                time or wish to attend <br></br>an event or function which is not appropriate for children.</p>
            </div>
            <div className='w-84 p-2'>
                <FaGuitar className="h-7 w-10"/>
                <h2 className='text-md font-semibold underline decoration-solid underline-offset-1 my-3'>Entertainment</h2>
                <p className='text-sm'>This is great for mingling with other guests <br></br>and locals, 
                and in some instances, getting a taste<br></br> of the country’s culture.</p>
            </div>
            <div className='w-84 p-2'>
                <IoRestaurantSharp className="h-7 w-10"/>
                <h2 className='text-md font-semibold underline decoration-solid underline-offset-1 my-3'>Multiple Restaurants</h2>
                <p className='text-sm'>Several on site food outlet options is always <br></br>a plus when choosing 
                a good resort. For guests who do<br></br> not wish to dine outside of the resort 
                regularly, multiple <br></br>restaurants are a wonderful amenity. </p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Services