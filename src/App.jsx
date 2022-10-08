import {useState, useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import CountryPage from './CountryPage';
import './App.css';

function App() {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    const abortCont = new AbortController();

    fetch('https://restcountries.com/v3.1/all', {signal: abortCont.signal})
    .then(res => {
      return res.json() 
    }).then(data => {
      setCountries(data)
    }).catch((error) => {
      if(error.name === 'AbortError') {
        return
      }else {
        console.log(`There has been error. Error description: ${error}`)
      }
    })
    return () => {abortCont.abort()}
  },[])
  function toggleTheme() {
    document.querySelector('body').classList.toggle('light-mode')
  }
  return (
    <>
      <Header toggleTheme={toggleTheme}/>
        <main>
          <Routes>
            <Route exact path="/" element={<Home countries={countries}/>} />
            <Route path="/countries/:country" element={<CountryPage/>} />
          </Routes>
        </main>
    </>
  );
}

export default App;
