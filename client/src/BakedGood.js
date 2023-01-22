import React from "react";
// import { useEffect, useState } from "react";
// import EditBakedGood from "./EditBakedGood"
import ReviewList from "./ReviewList";
// import NewReview from "./NewReview";


function BakedGood({bakedgood, user, reviews, setReviews}) {
// const {id, title, instructions} = bakedgood
// console.log(bakedgood)

// const [reviews, setReviews] = useState([]);

// useEffect(() => {
//   fetch("/reviews")
//     .then((r) => r.json())
//     .then(setReviews);
// }, []);

// function handleAddReview(newReview) {

//     setReviews([...reviews, newReview]);
//   }

console.log(bakedgood.reviews)
    return (
<div>
<h2>Baked Good: {bakedgood.title}</h2>
            <p>instructions: {bakedgood.instructions}</p>
            {/* <p>Reviews: {bakedgood.reviews.review}</p> */}
            {/* <p>by: {bakedgood.user.username}</p> */}
            
            {/* <button onClick={handleDeleteClick}>Delete</button> */}
<ReviewList bakedgood={bakedgood} user={user} reviews={reviews} setReviews={setReviews}/>
{/* <NewReview user={user} id={bakedgood.id} handleAddReview={handleAddReview} bakedgood={bakedgood}/> */}


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