import { useState } from "react";
// import { useNavigate } from "react-router";

function NewReview({ user, handleAddReview, id, bakedgood }) {

  const [addReview, setAddReview] = useState({
    review: "",
    // baked_good_id: "" 
  }
    
    );
//   const [instructions, setInstructions] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();
  function handleChange(event) {
    // console.log([event.target.name], event.target.value)
    setAddReview({
        ...addReview,
        [event.target.name]: event.target.value,
    });
}

//   function handleReviewSubmit(e) {
//     console.log(review.username)
//     e.preventDefault();
//     setIsLoading(true);
//     fetch("/baked_goods", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         review: review,
//         // instructions: instructions,
      
//       }),
//     }).then((r) => {
//       setIsLoading(false);
//       if (r.ok) {
//         navigate("/bakedgoods");}
//         // debugger
//       // } else {
//       //   r.json().then((err) => setErrors(err.errors));
//       // }
//     });
//   }
function handleReviewSubmit(e) {
    e.preventDefault()

    fetch("/reviews", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                review: addReview.review
                // baked_good_id: addReview.baked_good_id
                // user_id: addReview.user_id

            }
        ),
    })
        .then((r) => r.json())
        .then((data) => {
            handleAddReview(data);
            setAddReview(
                {
                    review: "",
                    // baked_good_id: ""
                    // user_id: ""
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
          {/* <section> */}
            <label htmlFor="review">Review</label>
            <input
              type="text"
              name="review"
              value={addReview.review}
            //   onChange={(e) => setAddReview(e.target.value)}
            onChange={handleChange}
            />
          {/* </section> */}
          {/* <label>Baked Good ID</label>
          <input
          type="text"
          name="baked_good_id"
          value={addReview.baked_good_id}
          onChange={handleChange}
          /> */}

          {/* <section>
            <button type="submit">
              {isLoading ? "Loading..." : "Submit Review"}
            </button>
          </section> */}
         <button type="submit">Add Review</button>
        </form>
      </div>
      <div>
        <h1>{addReview.review}</h1>
        <p>
          {/* <cite>By {addReview.user_id}</cite> */}
        </p>
      </div>
    </div>
  );
}

export default NewReview;