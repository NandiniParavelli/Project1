import React from 'react'
import { Link } from 'react-router-dom'
import {LiaFilterSolid} from "react-icons/lia"
import { useState } from 'react'

const RoomsData = [
  {
    Price: "$299",
    Roomtype: "Single",
    Guests: "1",
    Img: "images/single.jpg",
    Rating: "4",
    path: "/Features/Single",
    filterValue: "Single"
  },
  {
    Price: "$359",
    Roomtype: "Double",
    Guests: "2",
    Img: "images/Double.jpg",
    Rating: "4.8",
    path: "/Features/Double",
    filterValue: "Double"
  },
  {
    Price: "$469",
    Roomtype: "Triple",
    Guests: "3",
    Img: "images/Triple.jpg",
    Rating: "3.7",
    path: "/Features/Triple",
    filterValue: "Family"
  },
  {
    Price: "$529",
    Roomtype: "Family",
    Guests: "5",
    Img: "images/family.jpg",
    Rating: "4.2",
    path: "/Features/Family",
    filterValue: "Family"
  },
  {
    Price: "$310",
    Roomtype: "Deluxe-Single",
    Guests: "1",
    Img: "images/singleDeluxe.jpg",
    Rating: "5",
    path: "/Features/SingleDeluxe",
    filterValue: "Single"
  },
  {
    Price: "$430",
    Roomtype: "Deluxe-Double",
    Guests: "2",
    Img: "images/DoubleDeluxe.jpg",
    Rating: "4.9",
    path: "/Features/DoubleDeluxe",
    filterValue: "Double"
  },
  {
    Price: "$599",
    Roomtype: "Deluxe-Family",
    Guests: "6",
    Img: "images/familyDeluxe.jpg",
    Rating: "4.1",
    path: "/Features/FamilyDeluxe",
    filterValue: "Family"
  }
]

const Rooms = () => {
  const [expanded, setExpanded] = useState(false);
  const [RoomData, setRoomData] = useState(RoomsData);
  const [Type, setType] = useState('All');
  const [Guests, setGuests] = useState('Select no.of Guests')

  

  return (
    <>
    
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
        
      <div className='text-2xl font-bold flex justify-center pt-5 pb-1'><h1>Featured Rooms</h1></div>
      <div className='w-screen flex flex-row justify-center'>
          <hr class="w-48 h-1 my-1 ml-14 md:ml-14 bg-black border-0 rounded"></hr>
          <div className='flex gap-0.5 text-sm font-semibold' onClick={() => setExpanded(!expanded)}>< LiaFilterSolid className='mt-1.5'/><button>Filters</button></div>
          
        </div>
      {expanded ? (
        <div className='md:flex ml-5 justify-center gap-24 py-3 pt-6'>
          <div className='px-2'>
          <h2 className='pb-2'>Room Type</h2>
          <label for="Room_Type" class="sr-only">Underline select</label>
          <select id="Room_Type" class="block rounded-lg py-1.5 px-0 w-48 text-sm text-gray-500 bg-transparent 
          border-2 border-solid border-black-900 dark:text-gray-400 dark:border-gray-700 focus:outline-none 
          focus:ring-0 focus:border-gray-200 peer"
          onChange={e => setType(e.target.value)} defaultValue={Type}>
              
              <option selected value="All">All</option>
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Family">Family</option>
          </select>
          </div>
          <div className='px-2'>
          <h2 className='pb-2'>Number of Guests</h2>
          <label for="Guests" class="sr-only">Underline select</label>
          <select id="Guests" class="block  rounded-lg py-1.5 px-0 w-48 text-sm text-gray-500 bg-transparent 
          border-2 border-solid border-black-900 dark:text-gray-400 dark:border-gray-700 focus:outline-none 
          focus:ring-0 focus:border-gray-200 peer"
          onChange={e => setGuests(e.target.value)} defaultValue={Guests}>
              <option selected>Select no.of Guests</option>
              <option >1</option>
              <option >2</option>
              <option >3-6</option>
              <option >6 + members</option>
          </select>
          </div>
        </div>
        ) : null}
      
      {/* {setRoomData(RoomData.filter((each) => {
        const item = (each.filterValue == Type) 
        return(
          item
        )
      }))} */}

      <div className='grid grid-cols-4 m-2 p-3 w-screen self-center md:pl-24'>
      {RoomData.map((i) => {
        
        return(
          
        <div class="text-gray-900 py-3">
        <div>
            <Link to={i.path}> <img src={i.Img} alt=" random imgee" class="sm:w-56 sm:h-48 md:w-64 md:h-48 object-cover object-center fd-cl hover:opacity-25 shadow-md"/>   
            </Link>
            <div class="sm:w-56 sm:h-48 md:w-64 md:h-48">
              <div class="bg-white p-2 shadow-lg">
                <div class="flex items-baseline justify-between">
                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                        ${i.Price}
                    </span>  
                    <p class="text-teal-600 mt-2 text-md font-semibold">{i.Rating}/5 ratings</p>
                </div>
              <h4 class=" text-xl font-semibold uppercase leading-tight truncate">{i.Roomtype}</h4>
              <p>Num of Guests: {i.Guests}</p>
              
              </div>
            </div>
        
        </div>
        </div>
        
      )})}
      </div>
    
    </>
  )
}

export default Rooms