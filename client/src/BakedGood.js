import React from "react";
import EditBakedGood from "./EditBakedGood"
import ReviewList from "./ReviewList";

// function GameList({ games, onDeleteGame, onUpdateGame }) {

function BakedGood({bakedgood, onUpdateBakedGood}) {
const {id, title, instructions} = bakedgood
// console.log(bakedgood)
// console.log(bakedgood.reviews.review)
    return (
<div>
<p>Baked Good: {bakedgood.title}</p>
            <p>instructions: {bakedgood.instructions}</p>
            {/* <p>Reviews: {bakedgood.reviews.review}</p> */}
            {/* <p>by: {bakedgood.user.username}</p> */}
            
            {/* <button onClick={handleDeleteClick}>Delete</button> */}
<ReviewList bakedgood={bakedgood}/>
            <EditBakedGood
                id={id}
                title={title}
                instructions={instructions}
                onUpdateBakedGood={onUpdateBakedGood}
            />


</div>
    )
}
export default BakedGood