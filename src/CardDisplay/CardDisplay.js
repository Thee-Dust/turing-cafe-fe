import React from 'react';
import Card from '../Card/Card';
import './CardDisplay.css'

export default function CardDisplay({ reservations }) {
  const reservationCards = reservations.map(reservation => {
    return (
      <Card
      id={reservation.id}
      name={reservation.name}
      date={reservation.date}
      time={reservation.time}
      number={reservation.number}
      key={reservation.id}
      />
    )
  })

  return (
    <div className='card-display' id='CardDisplay'>
      {reservationCards}
    </div>
  )
}
