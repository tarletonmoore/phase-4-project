import React from "react";
// import NewReview from "./NewReview";
import ReviewList from "./ReviewList";


function BakedGood({bakedgood, user, reviews, setReviews, onUpdateReview, onDeleteReview, handleAddReview}) {


console.log(bakedgood.reviews)
    return (
<div>
<h2>Baked Good: {bakedgood.title}</h2>
            <p>instructions: {bakedgood.instructions}</p>
         
<ReviewList bakedgood={bakedgood} user={user} reviews={reviews} setReviews={setReviews} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}
// handleAddReview={handleAddReview}
/>
{/* <NewReview handleAddReview={handleAddReview} /> */}


</div>
    )
}
export default BakedGood