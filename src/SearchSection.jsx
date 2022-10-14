import {useRef} from 'react';


function SearchSection({query,setQuery,region,setRegion}) {
    const dropdownContainer = useRef();

    function handleSearch(e) {
        e.preventDefault();
        let selected = document.querySelector('.selected');
        if(selected) {
            selected.classList.remove('selected');
        }
        setQuery(e.target.value.toLowerCase())
        console.log(query)
        setRegion('')
    }

    function handleSelection(e) {
        let selected = document.querySelector('.selected')
        if(selected) {
            selected.classList.remove('selected')
        }
        if(e.target === selected) {
            selected.classList.remove('selected');
            setRegion(''); 
        }else {
            e.target.classList.add('selected');
            setQuery('');
            setRegion(e.target.innerText);
        }
    }
    function showDropdown() {
        dropdownContainer.current.classList.toggle('visible')
    }

    return (
        <form id="search-section">
            <div className="search-input-div">
                <input type="search" value={query} id="search-input" aria-label="search for a country" placeholder="Search for a country..." onInput={handleSearch}/>
            </div>
            <div className="region-select"  ref={dropdownContainer}>
                <p className="current-selection" onClick={showDropdown}>{region ? region : 'Filter By Region'} <img src="icon-arrow-down.svg" alt="" /></p> 
                <div className="region-dropdown">
                    <option className='option' onClick={handleSelection} value="Africa">Africa</option>
                    <option className='option' onClick={handleSelection} value="America">Americas</option>
                    <option className='option' onClick={handleSelection} value="Asia">Asia</option>
                    <option className='option' onClick={handleSelection} value="Europe">Europe</option>
                    <option className='option' onClick={handleSelection} value="Oceania">Oceania</option>
                </div>
            </div>
        </form>
    )
}
export default SearchSection;