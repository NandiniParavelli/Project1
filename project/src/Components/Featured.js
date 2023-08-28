import React from 'react'
import { Link } from 'react-router-dom'

const Featured = () => {
  return (
    <>
    <div className='p-3 h-screen pt-5'>
        <div className='text-center text-3xl font-bold py-2'><h1>Featured Rooms</h1></div>
        <hr class="w-48 h-1 mx-auto my-1 bg-black border-0 rounded md:my-5"></hr>
        <div className='md:flex md:flex-row justify-around md:py-5 sm:px-2'>
        
        <div class="text-gray-900 py-3 md:py-1 group hover:opacity-25 ">
            <div
                style={{
                backgroundImage:
                "url('images/familyDeluxe.jpg')"
            }} class="sm:w-56 sm:h-48 md:w-72 md:h-56 fd-cl hover:opacity-25 rounded-lg shadow-md flex justify-center items-center">   
                <Link to="/Features/FamilyDeluxe"><button class="rounded border-4 border-black px-7 pb-[8px] pt-[10px] text-md font-bold invisible group-hover:visible bg-transparent text-black">
                     Features
                </button></Link></div>

            <div class=" px-2 -mt-8  w-64">
            <div class="bg-white p-3 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        $599
                    </span>
                    <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    2 baths  &bull; 3 rooms
                    </div>  
                </div>
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate">Family Deluxe</h4>
                <div class="mt-2">
                    <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                    <span class="text-sm text-gray-600">(based on 334 ratings)</span>
                </div>  
            </div>
            </div>
        </div>
        <div class="text-gray-900 py-3 md:py-1 group hover:opacity-25">
            <div
                style={{
                backgroundImage:
                "url('images/DoubleDeluxe.jpg')"
            }} class="sm:w-56 sm:h-48 md:w-72 md:h-56 fd-cl hover:opacity-25 rounded-lg shadow-md flex justify-center items-center">   
                <Link to="/Features/DoubleDeluxe"><button class="rounded border-4 border-black px-7 pb-[8px] pt-[10px] text-md font-bold invisible group-hover:visible bg-transparent text-black">
                     Features
                </button></Link></div>
            <div class=" px-2 -mt-8  w-64">
            <div class="bg-white p-3 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        $430
                    </span>
                    <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    1 bath  &bull; 2 rooms
                    </div>  
                </div>
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate">Double Deluxe</h4>
                <div class="mt-2">
                    <span class="text-teal-600 text-md font-semibold">4.4/5 ratings </span>
                    <span class="text-sm text-gray-600">(based on 1211 ratings)</span>
                </div>  
            </div>
            </div>
        </div>
        <div class="text-gray-900 py-3 md:py-1 group hover:opacity-25">
            <div
                style={{
                backgroundImage:
                "url('images/singleDeluxe.jpg')"
            }} class="sm:w-56 sm:h-48 md:w-72 md:h-56 fd-cl hover:opacity-25 rounded-lg shadow-md flex justify-center items-center">   
                <Link to="/Features/SingleDeluxe"><button class="rounded border-4 border-black px-7 pb-[8px] pt-[10px] text-md font-bold invisible group-hover:visible bg-transparent text-black">
                     Features
                </button></Link></div>
            <div class="px-2 -mt-8  w-64">
            <div class="bg-white p-3 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        $310
                    </span>
                    <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                    1 bath  &bull; 1 room
                    </div>  
                </div>
                <h4 class=" text-xl font-semibold uppercase leading-tight truncate">Single Deluxe</h4>
                <div class="mt-2">
                    <span class="text-teal-600 text-md font-semibold">3.9/5 ratings </span>
                    <span class="text-sm text-gray-600">(based on 574 ratings)</span>
                </div>  
            </div>
            </div>
            
            </div>
        </div>

        
    </div>
    </>
  )
}

export default Featured