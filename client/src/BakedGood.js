import React from "react";
import ReviewList from "./ReviewList";


function BakedGood({bakedgood, user, reviews, setReviews, onUpdateReview, onDeleteReview}) {


console.log(bakedgood.reviews)
    return (
<div>
<h2>Baked Good: {bakedgood.title}</h2>
            <p>instructions: {bakedgood.instructions}</p>
         
<ReviewList bakedgood={bakedgood} user={user} reviews={reviews} setReviews={setReviews} onUpdateReview={onUpdateReview} onDeleteReview={onDeleteReview}/>



</div>
    )
}
export default BakedGood