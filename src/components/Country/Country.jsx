import { useState } from 'react';
import './Country.css'

const Country = ({country, handleListedCountries}) => {
    const {name, flags, population, area, cca3} = country;
    console.log(country);

    const [visited, setVisited] = useState(false);
    const handleVisitedButton = () => {
        setVisited(!visited);
    }

    
    // console.log(handleListedCountries)
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={handleVisitedButton}>{visited ? "Marked as Visited" : "Visited"}</button>
            <br />
            <button onClick={() => {handleListedCountries(country)}}>Add To List</button>
        </div>
    );
};

export default Country;