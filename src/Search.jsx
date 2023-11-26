import React from 'react'

const Search = () => {
  return (
    <div className="w-1/2 my-10">
    <form className="w-full flex justify-center" >
    <input className="w-full h-20   focus:border-purple-600 border-purple-600 border-solid  border-2 focus:border-solid focus:border-2 focus:outline-none rounded-lg px-3 placeholder-blue-500 text-2xl capitalize font-bold mr-2" type="search" placeholder="Searchbar is just for aesthetic purpose" aria-label="Search"/>
    <button type='submit' className='w-1/4  bg-green-400 hover:bg-green-500 rounded-md shadow-md shadow-green-900'>Search</button>
  </form>
  </div>
  )
}

export default Search