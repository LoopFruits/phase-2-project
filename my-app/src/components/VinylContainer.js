import React, {useEffect, useState} from 'react';
import VinylCard from "./VinylCard"


function VinylContainer() {
    const[vinyl, setVinyl] = useState([]) 
    
    
    useEffect( () => {
        fetch("http://localhost:3000/vinyls")
        .then(resp => resp.json())
        .then(item => setVinyl(item))
    },[]);
    
    console.log(vinyl);
    
    const inventoryList = vinyl.map((item) => {
        return  <VinylCard key={item.id} item={item}  />
    })


    return(
        <div id="Vinyl-Container">
            <h2>Current Inventory</h2>
            <div>
                {inventoryList}
            </div>
        </div>
    );
}


export default VinylContainer;