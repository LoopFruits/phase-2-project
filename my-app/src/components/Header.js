import React from "react";
import Search from "./Search";
// import Cart from "./Cart";
import { AiOutlineShoppingCart } from "react-icons/ai"
// import { Route, Switch } from "react-router-dom";


function Header({ handleSubmit, handleSearchTerm, vinyls }) {



return (
    <header className ="App-header">
        <h1>
          <img src={require('../Images/Logo.gif')} alt="loading..." /> 
        </h1>
        <button type="click" className="CartBttn"><AiOutlineShoppingCart/></button>
        {/* <Cart/> */}
        <Search 
          handleSearchTerm={handleSearchTerm} 
          vinyls={vinyls} 
          handleSubmit={handleSubmit}
        /> 
    </header>
)

}

export default Header;