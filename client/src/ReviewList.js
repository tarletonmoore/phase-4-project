import React from "react";
import Review from "./Review";

function ReviewList({bakedgood, user, reviews, setReviews, onUpdateReview, onDeleteReview}) {


    return (
      <div>
        {
          reviews.map((review) => {                 console.log(review)

            if (review.baked_good_id === bakedgood.id) {
                // if (review.baked_good.title === bakedgood.title) {
                return <Review key={review.id} 

             review={review} 
             bakedgood={bakedgood}
             user={user}
             onUpdateReview={onUpdateReview}
             onDeleteReview={onDeleteReview}
             />

            
            
            }
             
             
            }
            )
            
       
    }
        
      </div>
    );
}

export default ReviewList