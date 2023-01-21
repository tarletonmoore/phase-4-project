import { useEffect, useState } from "react";
import Review from "./Review";

function ReviewList({bakedgood, user}) {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("/reviews")
        .then((r) => r.json())
        .then(setReviews);
    }, []);
  console.log(bakedgood.reviews)
    function handleAddReview(newReview) {

        setReviews([...reviews, newReview]);
      }

    return (
      <div>
        {reviews.length > 0 ? (
          reviews.map((review) => {
            // if (review.baked_good_id === bakedgood.id) {
                return <Review key={review.id} 
            // bakedGoods={bakedGoods}
            handleAddReview={handleAddReview}
             review={review} 
             bakedgood={bakedgood}
             user={user}
             />

            //   <div>
            //    <h2>{review.review}</h2>
            //     <p>{review.user}</p>
            //    <p> {review.baked_good}</p>
            //   </div>
            // <Review key={review.id} 
            // bakedGoods={bakedGoods}
            //  review={review} 
            //  bakedgood={bakedgood}
          //    onUpdateBakedGood={handleUpdateBakedGood} 
            //  />
            
            // }
             
             
            })
            
        ) : (
          <>
            <h2>No Reviews Found</h2>
           
          </>
        )}
        
      </div>
    );
}

export default ReviewList