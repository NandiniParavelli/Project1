import React from 'react'

const Featured = () => {
  return (
    <>
    <div className='p-3 h-screen pt-5'>
        <div className='text-center text-3xl font-bold py-2'><h1>Featured Rooms</h1></div>
        <hr class="w-48 h-1 mx-auto my-1 bg-black border-0 rounded md:my-5"></hr>
        <div className='md:flex md:flex-row justify-around md:py-5 sm:px-2'>
        
        <div class="text-gray-900 py-3 md:py-1 ">
            <div>
                <img src="images/familyDeluxe.jpg" alt=" random imgee" class="sm:w-56 sm:h-48 md:w-72 md:h-56 object-cover object-center fd-cl hover:opacity-25 rounded-lg shadow-md"/>   
            <div class="relative px-2 -mt-8  w-64">
            <div class="bg-white p-3 rounded-lg shadow-lg">
                <div class="flex items-baseline">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        $520
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
        </div>
        <div class="text-gray-900 py-3 md:py-1">
            <div>
                <img src="images/DoubleDeluxe.jpg" alt=" random imgee" class="sm:w-56 sm:h-48 md:w-72 md:h-56 fd-cl hover:opacity-25 object-cover object-center rounded-lg shadow-md"/>    
            <div class="relative px-2 -mt-8  w-64">
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
        </div>
        <div class="text-gray-900 py-3 md:py-1">
            <div>
                <img src="images/singleDeluxe.jpg" alt=" random imgee" class="sm:w-56 sm:h-48 md:w-72 md:h-56 fd-cl hover:opacity-25 object-cover object-center rounded-lg shadow-md"/>    
            <div class="relative px-2 -mt-8  w-64">
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
    </div>
    </>
  )
}

export default Featured