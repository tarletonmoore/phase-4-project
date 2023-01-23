// import { useEffect, useState } from "react";
import React from "react";
import EditReview from "./EditReview";
// import NewReview from "./NewReview";

function Review({review, bakedgood, user, handleAddReview, onUpdateReview, onDeleteReview}) {
//   const [reviews, setReviews] = useState([]);
const {id} = review
//   useEffect(() => {
//     fetch("/reviews")
//       .then((r) => r.json())
//       .then(setReviews);
//   }, []);
//   console.log(review)
// function editOwn() {if (review.user_id === user.id) {
//     return <EditReview id={id} review={review} onUpdateReview={onUpdateReview} user={user}/>}
     
//     }

function handleDeleteClick() {

    fetch(`/reviews/${id}`, {
        method: "DELETE",
    });
    if (review.user_id === user.id) {
    onDeleteReview(id);
    }

}

  return (
    // <div>
    //   {reviews.length > 0 ? (
    //     reviews.map((review) => (
            <div>
             <p>{review.review}</p>
              <p>{review.username}</p>
              {/* <NewReview user={user} id={bakedgood.id} handleAddReview={handleAddReview} bakedgood={bakedgood}/> */}
       <button onClick={handleDeleteClick}>Delete</button>
<EditReview id={id} review={review} onUpdateReview={onUpdateReview} user={user}/>
             {/* <p> {review.baked_good}</p> */}
            </div>
    //         <Review key={review.id} 
    //       bakedGoods={bakedGoods}
    //        review={review} 
    //        onUpdateBakedGood={handleUpdateBakedGood} 
    //        />
    //     ))
    //   ) : (
    //     <>
    //       <h2>No Reviews Found</h2>
         
    //     </>
    //   )}
      
    // </div>
  );




}
export default Review