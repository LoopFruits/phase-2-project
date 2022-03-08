import React from 'react';


function VinylCard() {


return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src="image_url" alt="vinyl description"></img>
            <h3>Vinyl Name</h3>
            <h4>Vinyl Price</h4>
            <button>Remove</button>
        </div>
)

}

export default VinylCard;