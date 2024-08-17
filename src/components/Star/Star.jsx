import React from 'react'

export default function (props) {
  return (
    <div className=' space-x-3 center my-3'>
        <span className={`w-20 h-1  ${props.bg}`}></span><i className={`fa-solid fa-star ${props.color}`}></i><span className={`w-20 h-1 ${props.bg}`}></span>
    </div>
  )
}
