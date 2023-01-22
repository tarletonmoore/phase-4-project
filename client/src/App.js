import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import BakedGoodList from "./BakedGoodList";
// import ReviewList from "./ReviewList";
import NewBakedGood from "./NewBakedGood";
import SignUpForm from "./SignUpForm";
import NewReview from "./NewReview";
import User from "./User";

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);

// const [users, setUsers] = useState([])
// const [bakedGoods, setBakedGoods] = useState("")
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        // navigate("/me");
      }
    });
    // fetch("/users")
    // .then((r) => r.json())
    // .then((users) => setUsers(users))
  }, []);

  // function handleSubmit(e) {
    
  //   e.preventDefault();
  //   setIsLoading(true);
  //   fetch("/baked_goods", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: title,
  //       instructions: instructions,
      
  //     }),
  //   }).then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       navigate("/bakedgoods");}
  //       // debugger
  //     // } else {
  //     //   r.json().then((err) => setErrors(err.errors));
  //     // }
  //   });
  // }


  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  if (!user) return <Login onLogin={setUser} />;



  function handleAddReview(newReview) {

      setReviews([...reviews, newReview]);
    }

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path="/me" element={<User user={user} setUser={setUser}/>}>
            
          </Route>
          <Route exact path="/signup" element={<SignUpForm onLogin={setUser}/>}>
            
          </Route> 
          {/* <Route exact path="/reviews" element={<ReviewList />}> 

          </Route>  */}
          <Route exact path="/new" element={<NewBakedGood user={user} />}>
            
          </Route>
          <Route exact path="/bakedgoods" element={<BakedGoodList user={user} reviews={reviews} setReviews={setReviews}
          // users={users}
          />}>
            
          </Route>
          <Route exact path="reviews" element={<NewReview handleAddReview={handleAddReview} user={user}/>}>

          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;