import { useEffect, useState } from "react";


function Review({review, bakedgood}) {
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     fetch("/reviews")
//       .then((r) => r.json())
//       .then(setReviews);
//   }, []);
  console.log(review)

  return (
    // <div>
    //   {reviews.length > 0 ? (
    //     reviews.map((review) => (
            <div>
             <h2>{review.review}</h2>
              {/* <p>{review.user.username}</p> */}
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