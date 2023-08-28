import React from 'react'
import { Link } from 'react-router-dom'

const Features = ({imgurl, price, roomType, pic_1, pic_2, pic_3, desc, guests}) => {
  return (
    <>
      <div
      className=" bg-center bg-cover text-center h-[400px] w-screen"
        style={{
            backgroundImage:
              `${imgurl}`
          }}>
            <div className="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
              <div className="flex h-full items-center justify-center">
                <div className="text-black bg-[#6b7280] bg-opacity-40 px-28 py-8">
                    <h2 className="text-5xl font-bold">{roomType}</h2>
                    <hr class="w-36 h-1 mx-auto my-2 bg-gray-100 border-0 rounded md:my-5"></hr>
                    <Link to="/Home"><button
                    type="button"
                    className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-bold uppercase leading-normal text-black transition duration-150 ease-in-out
                   hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none 
                    focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    data-te-ripple-init
                    data-te-ripple-color="light">
                    Back to Home
                    </button></Link>
                </div>
              </div>
            </div>
      </div>
      
      <div className='flex justify-center gap-24 mt-16'>
        <img src={pic_1} alt='picture_1' className='h-56 w-64 rounded-lg hover:h-64 hover:w-72'></img>
        <img src={pic_2} alt='picture_2' className='h-56 w-64 rounded-lg hover:h-64 hover:w-72'></img>
        <img src={pic_3} alt='picture_3' className='h-56 w-64 rounded-lg hover:h-64 hover:w-72'></img>
      </div>

      <div className='flex justify-around pl-24'>
        <div className='m-3 mt-24 w-full '>
          <h1 className='text-3xl ml-4 font-bold text-gray-500'>Our rooms & suites - Comfortable & cosy</h1>
          <p className='text-lg font-serif m-4'>{desc}</p>
          <p className='text-xl font-semibold font-serif text-red-600 m-3 ml-16'>Maximum Capacity : {guests} Members</p>
        </div>
        <div className='m-3 mt-24 px-24 flex items-center'>
          <Link to="/Booking"> <button className='text-xl w-56 font-semibold font-serif text-white bg-red-600 rounded-lg py-2 m-3'> Book at {price} </button></Link>
        </div>
      </div>
    </>
  )
}

export default Features