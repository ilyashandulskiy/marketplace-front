import React from 'react'
// @ts-expect-error
import searchIcon from '../../../../assets/images/search.png'

export const SearchBar = () => {
  return (
    <div className="flex flex-row gap-4">
      <input className="shadow-xl p-3 rounded-xl w-80 h-14 active:scale-105 transition" placeholder="Search"/>
      <div className="shadow-xl p-3 rounded-xl w-14 h-14 bg-blue-400 flex justify-center items-center hover:scale-105 cursor-pointer transition active:scale-95"><img src={searchIcon} className="w-5 h-5"/></div>
    </div>
  )
}
