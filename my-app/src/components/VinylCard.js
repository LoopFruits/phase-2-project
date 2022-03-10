import React, { useState } from 'react';
import { FiThumbsUp, FiThumbsDown } from "react-icons/fi";


function VinylCard({ item }) {

    const [countUp, setCountUp] = useState(0);
    const [countDown, setCountDown] = useState(0);
    const [review, setReview] = useState("");

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



    function handleFormSubmit(event) {
        event.preventDefault()
        const updatedReviews = {
            reviews: review
        }
        fetch(`http://localhost:8002/vinyls/${item.id}`, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",
                },
            body: JSON.stringify(updatedReviews)
        })
        .then(response => response.json())
        .then(data => setReview([...review, data]))
    }


return (
    <div className="card" onClick={() => console.log("Clicking the item...")}>
        <img src={item.image} alt={item.album}></img>
        <h2>{item.artist}</h2>
        <h2>{item.album}</h2>
        <h4>${item.price}</h4>
        <h4>Release Date: {item.releasedate}</h4>
        <h4>{item.reviews}</h4>
        <button 
            onClick={(event)=>onLikesClick(event, 'plus')}><FiThumbsUp />{`${countUp === 0 ? "" : countUp}`}
        </button>              
        <button 
            onClick={(event)=>onLikesClick(event, 'minus')}><FiThumbsDown />{`${countDown === 0 ? "" : countDown}`}
        </button>

        <form onSubmit={handleFormSubmit} >
            <div>
                <label>Review</label>
                <input id="review" type="review" value={review} onChange={(event) => setReview(event.target.value)} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>



    </div>
)
}


export default VinylCard;