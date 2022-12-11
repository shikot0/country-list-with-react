import './CountryPage.css'
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function CountryPage() {
    const {country} = useParams(); 
    const [countryData, setCountryData] = useState(null);
    const [nativeNames, setNativeNames] = useState(null);
    const [languages, setLanguages] = useState(null);
    const [currencies, setCurrencies] = useState(null);
    const [borderCountries, setBorderCountries] = useState(null);

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${country}`)
        .then(res => {return res.json()})
        .then(data => {
            setCountryData(data[0])
            setNativeNames(data[0].name.nativeName)
            setLanguages(data[0].languages)
            setCurrencies(data[0].currencies)
            if(data[0].borders) {
                setBorderCountries(data[0].borders)
            }
        })    
    },[country]) 


if(countryData && nativeNames) {return(
           <>
             <Link to="/" className='back-button'><img src={`${process.env.PUBLIC_URL}/iconmonstr-arrow-left-lined.svg" alt="arrow-left`}/> Back</Link>
             <section className="country-page-main">
               <img src={countryData.flags.svg} alt={`${countryData.name.common} flag`} />
               <div className="country-page-text">
                   <a href={`https://en.wikipedia.org/wiki/${countryData.name.common}`} target="_blank" rel='noreferrer' className='country-name'>{countryData.name.official}</a>
                   <div className="country-info">
                    <div>
                        <p className="country-info-heading"><span>Native Name:</span> {Object.values(nativeNames)[0].official}</p>
                        <p className="country-info-heading"><span>Population:</span> {new Intl.NumberFormat('en').format(countryData.population)}</p>
                        <p className="country-info-heading"><span>Region:</span> {countryData.region}</p>
                        <p className="country-info-heading"><span>Sub Region:</span> {countryData.subregion}</p>
                        <p className="country-info-heading"><span>Capital:</span> {countryData.capital[0]}</p>
                    </div>
                    <div>
                        <p className="country-info-heading"><span>Top Level Domain:</span> {countryData.tld[0]}</p>
                        <p className="country-info-heading"><span>Currency:</span> {Object.values(currencies)[0].name}</p>
                        <p className="country-info-heading"><span>Languages:</span> {Object.values(languages).join(', ')}</p>
                    </div>
                   </div>
               {/* {borderCountries && <p className="border-country-heading">Border Countries: {borderCountries.map((country, index) => {
                return <Link className="border-country-link" key={index} to={`/countries/${country}`}>{country}</Link>
               })}</p>} */}
               <p className="border-country-heading">Border Countries: {borderCountries ? borderCountries.map((country, index) => {
                return  <Link className="border-country-link" key={index} to={`/countries/${country}`}>{country}</Link>
               }) : `${countryData.name.common} does not border any country`}</p>
               </div>
             </section>
           </>
    )
} 
}

export default CountryPage;