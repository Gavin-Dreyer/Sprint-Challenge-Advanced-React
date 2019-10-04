import React from 'react'

import useSearch from '../Hooks/useSearch';

const SearchBar = (props) => {
    // console.log(props.data)
    const [nameSearch, handleNameSearch, setNameSearch] = useSearch()
    const [countrySearch, handleCountrySearch, setCountrySearch] = useSearch()

    const handleClick = () => {
        setNameSearch('')
        setCountrySearch('')
    }

    
    return (
        <form 
        className='searchBar'
        >
            <input 
            onClick={handleClick}
            type='text'
            name='nameSearchBar'
            value={nameSearch}
            onChange={handleNameSearch}
            />
            <button onClick={(e) => props.searchNameSubmit(e, nameSearch)}>Search Name</button>
            <input 
            onClick={handleClick}
            type='text'
            name='countrySearchBar'
            value={countrySearch}
            onChange={handleCountrySearch}
            />
            <button onClick={(e) => props.searchCountrySubmit(e, countrySearch)}>Search Country</button>
        </form>
    )
}

export default SearchBar