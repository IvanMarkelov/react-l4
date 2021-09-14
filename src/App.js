import React, { useState } from "react";
import "./App.css";
import City from "./City";
import CityList from "./CityList";

function App(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cities, setCities] = useState([
    { name: "Moscow", description: "Capital of Russia" },
    { name: "Zelenograd", description: "Scientific satelite of Moscow" },
  ]);

  const handlerChangeCity = (n, description) => {
    setCities(
      cities.map((city, index) => {
        if (index === n) {
          return {
            ...city,
            description,
          };
        }
        return city;
      })
    );
  };

  const handlerSelectCity = (n) => {
    setCurrentIndex(n);
  };

  return (
    <div className="App">
      <City
        cities={cities}
        onChangeCity={handlerChangeCity}
        currentIndex={currentIndex}
      />
      <CityList cities={cities} onSelectCity={handlerSelectCity} />
    </div>
  );
}

export default App;
