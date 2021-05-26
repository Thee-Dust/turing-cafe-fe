export const getReservation = async () => {
  const response = await fetch('http://localhost:3001/api/v1/reservations');
  const data = await errorHandle(response);
  return data
}

const errorHandle = (response) => {
  if(!response.ok) {
    throw new Error(response.message);
  } else {
    return response.json();
  }
}