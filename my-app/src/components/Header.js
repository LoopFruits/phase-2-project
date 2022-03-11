import React, { useState } from "react";
import Search from "./Search";
// import Cart from "./Cart";
import { AiOutlineShoppingCart } from "react-icons/ai"
// import { Route, Switch } from "react-router-dom";


function Header({ handleSubmit, handleSearchTerm, vinyls, onAddItem, handleFormSubmit }) {

  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [image, setImage] = useState("");
  const [genre, setGenre] = useState("");
  const [price, setPrice] = useState("");
  const [releasedate, setReleasedate] = useState("");


return (
  <>
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
    {/* <div className="add-vinyl-img">
      <img src={require('../Images/AddAVinyl.png')} alt="loading..." height="300px" />
    </div> */}

    <form className="Footer" onSubmit={(e)=>{handleFormSubmit(e)}}>
        <div className='artist'>
          <span>Artist:</span>
            <input type = 'text' name = 'artist' value = {artist} onChange={(e) => setArtist(e.target.value)} />
        </div>

        <div className='album'>

            <span>Album:</span>
            <input type = 'text' name = 'album' value = {album} onChange={(e) => setAlbum(e.target.value)} />
        </div>

        <div className='image'>
            Image URL: 
            <input type = 'text' name = 'image' value = {image} onChange={(e) => setImage(e.target.value)} />
        </div>

        <div className='genre'>
            Genre:
            <input type = 'text' name = 'genre' value = {genre} onChange={(e) => setGenre(e.target.value)} />
        </div>

        <div className='price'>
            Price:
            <input type = 'text' name = 'price' value = {price} onChange={(e) => setPrice(e.target.value)} />
        </div>

        <div className='releasedate'>
            Release Date:
          <input type = 'text' name = 'image' value = {releasedate} onChange={(e) => setReleasedate(e.target.value)} />
        </div>


      <button className = 'bttn-card' type = 'submit'> Add Vinyl</button>
    </form>
    </>
  );
}

export default Header;