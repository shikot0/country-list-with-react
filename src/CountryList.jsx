import {v4 as uuidv4} from 'uuid';
import {Link} from 'react-router-dom';
import CountryItem from './CountryItem';






function CountryList({countries, query, region}) {
    return (
        <section className="grid-section"> 
            {countries.filter(country => {
                if(query === '' && region === '') {
                    return country;
                }else if (country.region === region) {
                    return country;
                }else if (country.name.official.toLowerCase().includes(query) && region === '') {
                    return country;
                }
                return false;
            }).map(country => {
                return (
                    <Link key={uuidv4()} to={`/countries/${country.cioc}`}>
                        <CountryItem country={country}/>
                    </Link>
                )
            })}
        </section>
    )
}
export default CountryList;