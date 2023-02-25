import { useState } from "react";

function NewReview({ user, handleAddReview, bakedGoods }) {

  const [addReview, setAddReview] = useState({
    review: "",
    baked_good_id: "", 
    // title: "",
    // user_id: ""
  }
    );

    const [selectedOption, setSelectedOption] = useState();
const [errors, setErrors] = useState([])

  function handleChange(event) {
    setAddReview({
        ...addReview,
        [event.target.name]: event.target.value,
    });
}

function getBakedGood() {
    return bakedGoods.map((bakedgood) => {
      return <option key={bakedgood.id} value={bakedgood.id}>{bakedgood.title} 
             </option>;
    });
  }
 
  function handleSelectChange(event) {
    setSelectedOption(event.target.value);
  }

  console.log(selectedOption)
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
                // baked_good_id: addReview.baked_good_id,
                baked_good_id: selectedOption,
                // title: selectedOption,
                // user_id: user.id

            }
        ),
    })
        .then((r) => {if (r.ok) { r.json().then((data) => { 
            handleAddReview(data);
            setAddReview(
                {
                    review: "",
                    baked_good_id: selectedOption,
                    // title: selectedOption,
                    // user_id: ""
                }
            );
        
        });}
    else {r.json().then((errorData) => setErrors(errorData.errors));}})
        // .then((data) => { 
        //     // if (r.ok) {
        //     handleAddReview(data);
        //     setAddReview(
        //         {
        //             review: "",
        //             baked_good_id: selectedOption,
        //             // title: selectedOption,
        //             // user_id: ""
        //         }
        //     );
        // // }
        // // else {r.json().then((errorData) => setErrors(errorData.errors));}
        // });

        console.log(addReview.review)
console.log(selectedOption)
console.log(addReview)
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
          {/* <label>Baked Good Title</label>
          <input
          type="text"
          name="baked_good_title"
          value={addReview.baked_good_title}
          onChange={handleChange}
          /> */}
{/* <select>
<option value="Power Puffs">Power Puffs</option>
<option value="Cake">Cake</option>

</select> */}
<select onChange={handleSelectChange}>{getBakedGood()}</select>
        
         <button type="submit">Add Review</button>

         {errors.length > 0 && (
    <ul style={{ color: "black" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}

        </form>
      </div>
      {/* <div>
        <h1>{addReview.review}</h1>
      <h1>{selectedOption}</h1>
      <h1>By: {user.username}</h1>
      </div> */}
    </div>
  );
}

export default NewReview;