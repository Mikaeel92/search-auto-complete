import React from 'react'

const Suggestion = ({data, handleClick}) => {
  return (
    <ul className='flex flex-col item-center justify-center'>
        {data && data.length 
        ? data.map((item, index) => <li className='flex item-center justify-center font-bold mt-4'
        key={index} 
        onClick={handleClick}>{item}</li>)
        : null}
    </ul>)}
export default Suggestion