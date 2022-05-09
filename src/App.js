import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './Components/Country/Country';

function App() {
  const [country, setCountry] = useState([])
  const getError = (err)=>{
    alert('The data can not be found',err)
  }

  useEffect(() =>{
    fetch('https://restcountries.com/v2/all')
      .then(resp => resp.json())
      .then(data => setCountry(data))
      .catch(error=>getError(error))
    },[])

  return (
    <div className="App">
      {country.map(country => <Country country={country} key={country.alpha3Code}></Country>)}
      
    </div>
  );
}

export default App;
