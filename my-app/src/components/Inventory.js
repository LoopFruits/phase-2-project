import React from 'react';
import VinylCard from './VinylCard';

function Inventory({vinyls}) {
    
    const showVinyls = vinyls.map((item) => {
        return  <VinylCard key={item.id} item={item}  />
    })

    return(
        <div className="VinylContainer" >
            <h2 className='c-inventory'><center>Current Inventory</center></h2>
            <div className="cardHolder">
                {showVinyls}
            </div>
        </div>
    );
}

export default Inventory;