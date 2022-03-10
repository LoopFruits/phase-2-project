import React from "react";
import Search from "./Search";
import Cart from "./Cart";


function Header({ handleSearch, vinyls }) {



return (
    <header className ="App-header">
        <h1>
        <img src={require('../Images/Logo.gif')} alt="loading..." /> 
        </h1>
        <Cart/>
        <Search handleSearch={handleSearch} vinyls={vinyls} /> 
    </header>
)

}

export default Header;