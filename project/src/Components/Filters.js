import React from "react";

const Filters = () => {
    <div className='md:flex justify-center gap-24 py-3 pt-6'>
      <div className='px-2'>
      <h2 className='pb-2'>Room Type</h2>
      <label for="Room_Type" class="sr-only">Underline select</label>
      <select id="Room_Type" class="block rounded-lg py-1.5 px-0 w-48 text-sm text-gray-500 bg-transparent border-2 border-solid border-black-900 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option selected>Select Room type</option>
          <option value="US">All</option>
          <option value="CA">Single</option>
          <option value="FR">Double</option>
          <option value="DE">Family</option>
      </select>
      </div>
      <div className='px-2'>
      <h2 className='pb-2'>Number of Guests</h2>
      <label for="Guests" class="sr-only">Underline select</label>
      <select id="Guests" class="block  rounded-lg py-1.5 px-0 w-48 text-sm text-gray-500 bg-transparent border-2 border-solid border-black-900 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
          <option selected>Select no.of Guests</option>
          <option >1</option>
          <option >2</option>
          <option >3-6</option>
          <option >6 + members</option>
      </select>
      </div>
      <div className='px-2'>
      <h2 className='pb-2'>Room Price</h2>
      <input type='range'/>
      </div>

    </div>
}

export default Filters