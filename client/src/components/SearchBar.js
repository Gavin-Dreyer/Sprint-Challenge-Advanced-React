import React from 'react'

import useSearch from '../Hooks/useSearch';

const SearchBar = (props) => {
    // console.log(props.data)
    const[search, handleSearch, setSearch] = useSearch()

    console.log(search)
    const handleClick = () => {
        setSearch('')
    }

    
    return (
        <form 
        className='searchBar'
        onSubmit={(e) => props.searchSubmit(e, search)}
        >
            <input 
            onClick={handleClick}
            type='text'
            name='searchBar'
            value={search}
            onChange={handleSearch}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchBar