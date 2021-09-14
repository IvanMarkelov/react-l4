import React from "react";

export default function City(props) {
  const city = props.cities[props.currentIndex];

  return (
    <li>
      <h1>{city.name}</h1>
      <textarea onChange={(e) => props.onChangeCity(props.currentIndex, e.target.value)} value={city.description}></textarea>
      <p>{city.description}</p>
    </li>
  );
}
