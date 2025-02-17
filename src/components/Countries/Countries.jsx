import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    } ,[])


    const [listedCountries, setListedCountries] = useState([]);
    const handleListedCountries = country => {
        console.log('add this country to list');
        console.log(country)
        const newList = [...listedCountries, country];
        setListedCountries(newList);
    }


    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h3>Listed Countries: {listedCountries.length}</h3>
                <ul>
                        {
                            listedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                        }
                </ul>
            </div>
            <div className="country-container">
            {
                countries.map(country => <Country 
                    country={country} 
                    key={country.name.common}
                    handleListedCountries={handleListedCountries}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;