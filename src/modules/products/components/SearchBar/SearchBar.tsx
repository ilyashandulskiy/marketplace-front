import React from 'react'

export const SearchBar = () => {
  return (
    <div className="flex flex-row gap-4">
      <input className="shadow-xl p-3 rounded-xl w-80 h-14 active:scale-95 transition" placeholder="Поиск по товарам"/>
      <div className="shadow-xl p-3 rounded-xl w-14 h-14 bg-blue-400 flex justify-center items-center hover:scale-105 cursor-pointer transition active:scale-95"><img src='/images/search.png' className="w-5 h-5"/></div>
    </div>
  )
}
