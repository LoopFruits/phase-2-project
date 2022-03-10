import React from 'react';
import Favorites from './Favorites';
import Inventory from './Inventory';
import Miscellaneous from './Miscellaneous';

function SelectionContainerList() {

    return (
        <div className="SelectionContainer">
            
            <Favorites />
            <Inventory />
            <Miscellaneous />
        </div>
    )


}

export default SelectionContainerList;