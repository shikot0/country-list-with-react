import {useState} from 'react';
import SearchSection from './SearchSection';
import CountryList from './CountryList';
import React from 'react';

function Home({countries}) {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');

    return(
        <>
          <SearchSection query={query} setQuery={setQuery} region={region} setRegion={setRegion}/>
          {countries && <CountryList countries={countries} query={query} region={region}/>}
        </>
    )
}

export default Home;