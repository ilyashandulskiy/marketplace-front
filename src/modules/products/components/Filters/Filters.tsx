import React from 'react'

export const Filters = () => {
  return (
    <>
      <div className="ml-10 mt-10" style={{ minWidth: 300, maxHeight: 600 }} />
      <div className="shadow-xl ml-10 mt-10 rounded p-5 fixed flex flex-col items-center gap-5" style={{ minWidth: 300, maxHeight: 600 }}>
        <p className="text-xl">Фильтры</p>
        <p className="text">Цена</p>
        <p className="text">Вес</p>
        <p className="text">Размер</p>
        <p className="text">Цвет</p>
      </div>
    </>
  )
}
