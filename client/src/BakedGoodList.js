import { useEffect, useState } from "react";
import BakedGood from "./BakedGood";
// import { Link } from "react-router-dom";

function BakedGoodList({user}) {
  const [bakedGoods, setBakedGoods] = useState([]);
// const individualUser = users.map((user) => user.username)
  useEffect(() => {
    fetch("/baked_goods")
      .then((r) => r.json())
      .then(setBakedGoods);
  }, []);

  // function handleUpdateBakedGood(updatedBakedGoodObj) {
  //   const updatedBakedGoods = bakedGoods.map((bakedgood) => {
  //     if (bakedgood.id === updatedBakedGoodObj.id) {
  //       return updatedBakedGoodObj;
  //     } else {
  //       return bakedgood;
  //     }
  //   });
  //   setBakedGoods(updatedBakedGoods);
  // }
 

  return (
    <div>
      {bakedGoods.length > 0 ? (
        bakedGoods.map((bakedgood) => 
        // console.log(bakedgood))
        (
          // {
          //             if (review.baked_good_id === bakedgood.id) {
          <BakedGood key={bakedgood.id} 
          // bakedGoods={bakedGoods}
           bakedgood={bakedgood} 
           user={user}
          
          //  onUpdateBakedGood={handleUpdateBakedGood} 
           />
             /* <div>
             <h2>{bakedgood.title}</h2>
              <p>
                
                <cite>By {bakedgood.user.username}</cite>
              </p>
             <p> {bakedgood.instructions}</p>
            </div>
          </BakedGood>  */
        )
                      )
      ) : (
        <>
          <h2>No Baked Goods Found</h2>
          {/* <button as={Link} to="/new">
            Make a New Baked Good
          </button> */}
        </>
      )}
      
    </div>
  );
}


export default BakedGoodList;
