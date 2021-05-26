import React from 'react';
import Card from '../Card/Card';

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
    <div>
      {reservationCards}
    </div>
  )
}
