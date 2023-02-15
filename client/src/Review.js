// import { useEffect, useState } from "react";
import React from "react";
import EditReview from "./EditReview";
// import NewReview from "./NewReview";

function Review({review, bakedgood, user, handleAddReview, onUpdateReview, onDeleteReview}) {
const {id} = review

function handleDeleteClick() {
    fetch(`/reviews/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        onDeleteReview(id);
      }
    });
  }

// function handleDeleteClick() {

//     fetch(`/reviews/${id}`, {
//         method: "DELETE",
//     });
//     if (review.user_id === user.id) {
//     onDeleteReview(id);
//     }

// }
  return (
   
            <div>
             <p>Review: {review.review} by: {review.user.username}</p>
            {/* <NewReview handleAddReview={handleAddReview} /> */}
       <button onClick={handleDeleteClick}>Delete</button>
<EditReview id={id} review={review} onUpdateReview={onUpdateReview} user={user}/>
            </div>
   
  );




}
export default Review