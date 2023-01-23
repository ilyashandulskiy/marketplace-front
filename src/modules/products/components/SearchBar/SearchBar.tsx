import React, {useState} from 'react'

interface Props {
  onSearch: (query: string) => void
}

export const SearchBar = ({onSearch}: Props) => {
  const [query, setQuery] = useState('')

  return (
    <div className="flex flex-row gap-4">
      <input value={query} onChange={val => setQuery(val.currentTarget.value)} className="shadow-xl p-3 rounded-xl w-80 h-14 active:scale-95 transition" placeholder="Поиск по товарам"/>
      <div
        onClick={() => onSearch(query)}
        className="shadow-xl p-3 rounded-xl w-14 h-14 bg-blue-400 flex justify-center items-center hover:scale-105 cursor-pointer transition active:scale-95"
      >
        <img src='/images/search.png' className="w-5 h-5"/>
      </div>
    </div>
  )
}
