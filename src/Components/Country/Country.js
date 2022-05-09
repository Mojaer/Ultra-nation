import React from 'react';
import './Country.css'

const Country = (props) => {
    const country = props.country;
    const{name,flag,nativeName,population} = country
    console.log(country)
    return (
        <div>
            <div className='country'>
                <img style={{height:'40px'}} src={flag} alt={country.name} />
                <h3>{name}</h3>
                <p>Native name: {nativeName}</p>
                <p>Population: {population}</p>
            </div>
        </div>
    );
};

export default Country
