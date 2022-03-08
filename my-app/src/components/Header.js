import React from "react";
import Search from "./Search";
function Header() {

return (
    <header className="App-header">
        <img src="image_Url" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Search/>
    </header>
)

}

export default Header;