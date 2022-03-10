import React from 'react';

function Search({ handleSubmit , handleSearchTerm}) {    
    return (
        <form className="searchbar" onSubmit={(event) => handleSubmit(event)} >
            <input
                type="text"
                id="search"
                placeholder="Search Justin's Belongings..."
                // value={search}
                onChange={(event)=>handleSearchTerm(event)}
            />
        <button type="submit">🔍</button>
        </form>
    );
    }

export default Search;