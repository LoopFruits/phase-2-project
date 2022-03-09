import React from 'react';
import VinylCard from "./VinylCard"


function VinylContainer({ vinyls }) {

    const showVinyls = vinyls.map((item) => {
        return  <VinylCard key={item.id} item={item}  />
    })


    return(
        <div className="VinylContainer" >
            <h2>Current Inventory</h2>
            <div>
                {showVinyls}
            </div>
        </div>
    );
}


export default VinylContainer;