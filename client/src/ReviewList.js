import React from "react";
import Review from "./Review";

function ReviewList({bakedgood, user, reviews, setReviews, onUpdateReview, onDeleteReview}) {



    return (
      <div>
        {
          reviews.map((review) => {
            if (review.baked_good_id === bakedgood.id) {
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