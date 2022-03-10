import React from 'react';
import Favorites from './Favorites';
import Inventory from './Inventory';
import Miscellaneous from './Miscellaneous';
import {NavLink} from 'react-router-dom';

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "blue",
    textDecoration: "none",
    color: "white",
}

function SelectionContainerList( {vinyls}) {

    return (
    <div className="SelectionContainer">
        <div>
            <NavLink
            to="/favorites"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
            >
                <Favorites vinyls={vinyls} />
            </NavLink>
        </div>
        <div>
            <NavLink
            to="/inventory"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
            >
                <Inventory />
            </NavLink>
        </div>
        <div>
            <NavLink
            to="/miscellaneous"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
            >
                <Miscellaneous />
            </NavLink>
        </div>
    </div>
    )


}

export default SelectionContainerList;