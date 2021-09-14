import React from "react";

export default function CityList(props) {

  return (
    <ul>
      {props.cities.map((city, index) => (
        <li onClick={() => props.onSelectCity(index)} key={city.name}>
          <h1>{city.name}</h1>
          <p>{city.description}</p>
        </li>
      ))}
    </ul>
  );
}
