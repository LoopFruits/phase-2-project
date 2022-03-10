import React from "react";
import Search from "./Search";
import Cart from "./Cart";


function Header({ handleSubmit, handleSearchTerm, vinyls }) {



return (
    <header className ="App-header">
        <h1>
        <img src={require('../Images/Logo.gif')} alt="loading..." /> 
        </h1>
        <Cart/>
        <Search 
          handleSearchTerm={handleSearchTerm} 
          vinyls={vinyls} 
          handleSubmit={handleSubmit}
        /> 
    </header>
)

}

export default Header;