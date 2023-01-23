import React from 'react'
// @ts-expect-error
import star from '../../assets/images/star.png'

export const Rating = () => {
  return (
    <div className="w-20 flex flex-row justify-between pt-3">
      <img src={star} className="w-3 h-3" />
      <img src={star} className="w-3 h-3" />
      <img src={star} className="w-3 h-3" />
      <img src={star} className="w-3 h-3" />
      <img src={star} className="w-3 h-3" />
    </div>
  )
}
