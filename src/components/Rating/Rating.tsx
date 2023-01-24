import React from 'react'

export const Rating = ({size = 13, rating = 5}) => {
  return (
    <div className="flex flex-row justify-between pt-3" style={{gap: size/4}}>
      <img src="/images/star.png" alt="star" style={{width: size, height: size, filter: rating >= 1 ? '' : 'grayscale(1)'}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size, filter: rating >= 2 ? '' :  'grayscale(1)'}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size, filter: rating >= 3 ? '' :  'grayscale(1)'}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size, filter: rating >= 4 ? '' :  'grayscale(1)'}} />
      <img src="/images/star.png" alt="star" style={{width: size, height: size, filter: rating >= 5 ? '' : 'grayscale(1)'}} />
    </div>
  )
}
