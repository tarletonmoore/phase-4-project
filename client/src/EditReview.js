import React, { useState } from "react";


function EditReview({ onUpdateReview, id, review }) {

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
            }),
        })
            .then((r) => r.json())
            .then((updatedReview) => onUpdateReview(updatedReview));
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="review"
                 value={changeReview}
                 onChange={(e) => setChangeReview(e.target.value)}
             />
             <input type="submit" value="Update" />
            {/* <button onClick={handleFormSubmit}>Change Title</button> */}
         </form>
     );






 }

 export default EditReview