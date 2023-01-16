import { useEffect, useState } from "react";


function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  return (
    <div>
      {reviews.length > 0 ? (
        reviews.map((review) => (
            <div>
             <h2>{review.review}</h2>
              <p>{review.user}</p>
             <p> {review.baked_good}</p>
            </div>
        ))
      ) : (
        <>
          <h2>No Reviews Found</h2>
         
        </>
      )}
      
    </div>
  );




}
export default Review