import React from 'react';
import VinylCard from "./VinylCard";


function VinylContainer({ vinyls }) {

    const showVinyls = vinyls.map((item) => {
        return  <VinylCard key={item.id} item={item}  />
    })

    return(
        <div className="vinyl-container" >
            <h2>Justin's Favorites</h2>
            <div className="cardHolder">
                {showVinyls}
            </div>
        </div>
    );
}


export default VinylContainer;