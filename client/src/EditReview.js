import React, { useState } from "react";


function EditReview({ onUpdateReview, id, review, user }) {

    const [changeReview, setChangeReview] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`/reviews/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                review: changeReview,
                user_id: user.id
            }),
        })
        // {if (review.user_id === user.id) {
            .then((r) => r.json())
            .then((updatedReview) => 
            // {if (review.user_id === user.id) {
                onUpdateReview(updatedReview));
        
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="review"
                 value={changeReview}
                 onChange={(e) => {if (review.user_id === user.id) {
                    setChangeReview(e.target.value)}
                
                }
                }
             />
             <input type="submit" value="Update" />
            {/* <button onClick={handleFormSubmit}>Change Title</button> */}
         </form>
     );






 }

 export default EditReview