import React from "react";
// import EditBakedGood from "./EditBakedGood"
import ReviewList from "./ReviewList";
// import NewReview from "./NewReview";

// function GameList({ games, onDeleteGame, onUpdateGame }) {

function BakedGood({bakedgood, user}) {
// const {id, title, instructions} = bakedgood
// console.log(bakedgood)
// console.log(bakedgood.reviews.review)
    return (
<div>
<p>Baked Good: {bakedgood.title}</p>
            <p>instructions: {bakedgood.instructions}</p>
            {/* <p>Reviews: {bakedgood.reviews.review}</p> */}
            {/* <p>by: {bakedgood.user.username}</p> */}
            
            {/* <button onClick={handleDeleteClick}>Delete</button> */}
<ReviewList bakedgood={bakedgood} user={user}/>
{/* <NewReview user={user}/> */}
            {/* <EditBakedGood
                id={id}
                title={title}
                instructions={instructions}
                onUpdateBakedGood={onUpdateBakedGood}
            /> */}


</div>
    )
}
export default BakedGood