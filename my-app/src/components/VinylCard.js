import React from 'react';


function VinylCard({ item }) {


return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={item.image} alt={item.album}></img>
            <h3>{item.artist}</h3>
            <h4>${item.price}</h4>
            <button>Remove</button>
        </div>
)

}

export default VinylCard;