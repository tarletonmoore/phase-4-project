import { useState } from "react";

function NewReview({ user, handleAddReview, id, bakedgood }) {

  const [addReview, setAddReview] = useState({
    review: "",
    baked_good_id: "", 
    user_id: ""
  }
    
    );

  function handleChange(event) {
    setAddReview({
        ...addReview,
        [event.target.name]: event.target.value,
    });
}


function handleReviewSubmit(e) {
    e.preventDefault()

    fetch("/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                review: addReview.review,
                baked_good_id: addReview.baked_good_id,
                user_id: user.id

            }
        ),
    })
        .then((r) => r.json())
        .then((data) => {
            handleAddReview(data);
            setAddReview(
                {
                    review: "",
                    baked_good_id: "",
                    user_id: ""
                }
            );
        });
        console.log(addReview.review)

}

  return (
    <div>
      <div>
        <p>Add Review</p>
        <form onSubmit={handleReviewSubmit}>
            <label htmlFor="review">Review</label>
            <input
              type="text"
              name="review"
              value={addReview.review}
            onChange={handleChange}
            />
          <label>Baked Good ID</label>
          <input
          type="text"
          name="baked_good_id"
          value={addReview.baked_good_id}
          onChange={handleChange}
          />

        
         <button type="submit">Add Review</button>
        </form>
      </div>
      <div>
        <h1>{addReview.review}</h1>
      
      </div>
    </div>
  );
}

export default NewReview;