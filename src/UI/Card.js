import React from 'react'

function Card(props) {
  return (
    <div className="mt-10 w-[80%] md:w-[60%] lg:w-[20%]  bg-gray-100 space-y-4 p-3">
      <img src={props.image} alt={props.alt} className="h-[67px] p-3" />
      <p className="text-2xl">
        <span className="font-bold">{props.title}</span>
      </p>
      <p className="">{props.description}</p>
    </div>
  )
}

export default Card
