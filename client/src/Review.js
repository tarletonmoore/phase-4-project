// import { useEffect, useState } from "react";
import React, { useContext } from "react";
import EditReview from "./EditReview";
// import NewReview from "./NewReview";
import UserContext from "./context/ContextUser";

function Review({review, bakedgood,
    //  user,
      handleAddReview, onUpdateReview, onDeleteReview}) {
const {id} = review
const [user, setUser] = useContext(UserContext)
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

function buttonMatch() {
    if (review.user_id === user.id) {
       return <button onClick={handleDeleteClick}>Delete</button>
    }
}
console.log(user.username)
  return (
   
            <div>
             <p>Review: {review.review} by: {review.user.username}</p>
            {/* <NewReview handleAddReview={handleAddReview} /> */}
            
       {/* <button onClick={handleDeleteClick}>Delete</button> */}
       {buttonMatch()}
<EditReview id={id} review={review} onUpdateReview={onUpdateReview} user={user}/>
            </div>
   
  );




}
export default Review