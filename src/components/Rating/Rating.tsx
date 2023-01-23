import React from 'react'

export const Rating = ({size = 13}) => {
  return (
    <div className="flex flex-row justify-between pt-3" style={{gap: size/4}}>
      <img src="/images/star.png" alt="star" style={{width: size, height: size}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size}} />
    </div>
  )
}
