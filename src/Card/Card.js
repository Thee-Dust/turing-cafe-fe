import React from 'react';
import './Card.css';

export default function Card({id, name, date, time, number}) {
  return (
    <div id={id} className='card'>
      <span>{name}</span>
      <span>{date}</span>
      <span>{time}</span>
      <span>Number of Guest: {number}</span>
    </div>
  )
}
