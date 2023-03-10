// import { useEffect, useState } from "react";
import React from "react";
import BakedGood from "./BakedGood";

function BakedGoodList({user, reviews, setReviews, onUpdateReview, onDeleteReview, bakedGoods, setBakedGoods}) {
  // const [bakedGoods, setBakedGoods] = useState([]);
  // useEffect(() => {
  //   fetch("/baked_goods")
  //     .then((r) => r.json())
  //     .then(setBakedGoods);
  // }, []);


 

  return (
    <div>
      {bakedGoods.length > 0 ? (
        bakedGoods.map((bakedgood) => 
        (
          <BakedGood key={bakedgood.id} 
           bakedgood={bakedgood} 
           user={user}
          reviews={reviews}
          setReviews={setReviews}
onUpdateReview={onUpdateReview}
onDeleteReview={onDeleteReview}
// handleAddReview={handleAddReview}
           />
            
        )
                      )
      ) : (
        <>
          <h2>No Baked Goods Found</h2>
       
        </>
      )}
      
    </div>
  );
}


export default BakedGoodList;
