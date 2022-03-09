import React, { useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi"


function VinylCard({ item }) {

    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)


return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
            <img src={item.image} alt={item.album}></img>
            <h2>{item.artist}</h2>
            <h2>{item.album}</h2>
            <h4>${item.price}</h4>
            <h3>Likes: <br/>{item.likes}<br/> </h3>
            <h4>Release Date: {item.releasedate}</h4>

            <button 
                onClick={() => setCountUp(countUp + 1)}><FiThumbsUp />{`${countUp === 0 ? "" : countUp}`}
            </button>   
            
            <button 
                onClick={() => setCountDown(countDown + 1)}><FiThumbsDown />{`${countDown === 0 ? "" : countDown}`}
            </button>

        </div>
)

}

export default VinylCard;