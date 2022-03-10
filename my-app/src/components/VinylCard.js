import React, { useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";


function VinylCard({ item }) {

    const [countUp, setCountUp] = useState(0);
    const [countDown, setCountDown] = useState(0);

    function onLikesClick(event, status) {
        if (status === 'plus') {
            setCountUp(countUp + 1)
        }

        if (status === 'minus') {
            setCountDown(countDown + 1)
        }
        
        const updatedData = {
            likes: countUp,
            dislikes: countDown
        }

        event.stopPropagation()
        fetch(`http://localhost:8002/vinyls/${item.id}`, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedData)
        })
        .then(response => response.json())
        .then(data => data)
    }

    // function increaseLikes() {
    //     console.log(countUp.likes);
    //     const likesPlus = countUp.likes === 0 ? "" : countUp.likes + 1
    //     return setCountUp(likesPlus) 
    // }



return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
        <img src={item.image} alt={item.album}></img>
        <h2>{item.artist}</h2>
        <h2>{item.album}</h2>
        <h4>${item.price}</h4>
        <h4>Release Date: {item.releasedate}</h4>
        <button 
            onClick={(event)=>onLikesClick(event, 'plus')}><FiThumbsUp />{`${countUp === 0 ? "" : countUp}`}
        </button>              
        <button 
            onClick={(event)=>onLikesClick(event, 'minus')}><FiThumbsDown />{`${countDown === 0 ? "" : countDown}`}
        </button>
    </div>
)
}


export default VinylCard;