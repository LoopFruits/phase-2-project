import React from "react";
import Search from "./Search";
import Cart from "./Cart";
function Header({ handleSearch }) {

return (
    <header class ="App-header">
        <h1>
          Justin's Personal Vinyl Collection
        </h1>
        <Cart/>
        <Search handleSearch={handleSearch} /> 
    </header>
)

}

export default Header;