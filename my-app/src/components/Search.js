import React from 'react';
import { FiSearch } from "react-icons/fi";

function Search({ handleSubmit , handleSearchTerm}) {    
    return (
        <form className="searchbar" onSubmit={(event) => handleSubmit(event)} >
            <input
                type="text"
                id="search"
                placeholder="Search Justin's Belongings..."
                onChange={(event)=>handleSearchTerm(event)}
            />
        <button type="submit"> <FiSearch /></button>
        </form>
    );
    }

export default Search;