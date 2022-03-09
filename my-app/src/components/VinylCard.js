import React from 'react';


function VinylCard({ item }) {


return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={item.image} alt={item.album}></img>
            <h2>{item.artist}</h2>
            <h2>{item.album}</h2>
            <h4>${item.price}</h4>
            <h3>Likes: <br/>{item.likes}<br/> </h3>
            <h4>Release Date: {item.releasedate}</h4>
        </div>
)

}

export default VinylCard;