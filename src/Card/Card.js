import React from 'react'

export default function Card({id, name, date, time, number}) {
  return (
    <div>
      <span>{name}</span>
      <span>{date}</span>
      <span>{time}</span>
      <span>Number of Guest: {number}</span>
    </div>
  )
}
