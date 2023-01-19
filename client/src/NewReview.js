import { useState } from "react";
// import { useNavigate } from "react-router";

function NewReview({ user, handleAddReview }) {

  const [addReview, setAddReview] = useState({
    review: ""
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
                review: addReview.review,
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
                    // user_id: ""
                }
            );
        });

}

  return (
    <div>
      <div>
        <p>Add Review</p>
        <form onSubmit={handleReviewSubmit}>
          <section>
            <label htmlFor="review">Review</label>
            <input
              type="text"
              name="review"
              value={addReview.review}
            //   onChange={(e) => setAddReview(e.target.value)}
            onChange={handleChange}
            />
          </section>
          
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