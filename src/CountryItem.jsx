function CountryItem ({country}) {
    return (
        <>
            <div className='country'>
                <div className="country-image">
                    <img src={country.flags.png} alt={country.name.official} />
                </div>
                <div className="country-info">
                    <p className='country-name'>{country.name.official}</p>
                    <p className="country-info-heading"><span>Population:</span> {new Intl.NumberFormat('en').format(country.population)}</p>
                    <p className="country-info-heading"><span>Region:</span> {country.region}</p>
                    <p className="country-info-heading"><span>Capital:</span> {country.capital}</p>
                </div>
            </div> 
        </>
    )
}
export default CountryItem;