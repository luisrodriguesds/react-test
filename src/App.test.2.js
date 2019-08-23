import React, {useState, useEffect} from 'react';

export default function App(){
  const [location, setLocation] = useState({});
  useEffect(() => {
    navigator.geolocation.watchPosition(handlePosition);
  }, []);

  function handlePosition({coords}){
    const {latitude, longitude} = coords;
    setLocation({latitude, longitude});
    console.log(coords);
  }

  return (
      <React.Fragment>
        <ul>
          <li>Latitude: {location.latitude}</li>
          <li>Longitude: {location.longitude}</li>
        </ul>
      </React.Fragment>
    )
}