import React, { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./NavBar";
import Login from "./Login";
import BakedGoodList from "./BakedGoodList";
import NewBakedGood from "./NewBakedGood";
import SignUpForm from "./SignUpForm";
import NewReview from "./NewReview";
import User from "./User";
import UserContext from "./context/ContextUser";
// import { UserProvider } from "./context/ContextUser";

function App() {
  const [user, setUser] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [bakedGoods, setBakedGoods] = useState([]);
  // const [user, setUser] = useContext(UserContext)


  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    
  }, []);



  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);

  useEffect(() => {
    fetch("/baked_goods")
      .then((r) => r.json())
      .then(setBakedGoods);
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  function handleDeleteReview(id) {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  }

  function handleUpdateReview(updatedReviewObj) {
    const updatedReviews = reviews.map((review) => {
      if (review.id === updatedReviewObj.id) {
        return updatedReviewObj;
      } else {
        return review;
      }
    });
    setReviews(updatedReviews);
  }

  function handleAddReview(newReview) {

      setReviews([...reviews, newReview]);
    }
    function handleAddBakedGood(newBakedGood) {

      setBakedGoods([...bakedGoods, newBakedGood]);
    }

  return (
  
    <>
    <UserContext.Provider value={[user, setUser]}>
      <NavBar
      //  user={user} setUser={setUser}
        />

      <main>
      
        <Routes>
          <Route exact path="/me" element={<User 
          // user={user} setUser={setUser}
          />}>
            
          </Route>
          <Route exact path="/signup" element={<SignUpForm 
          // onLogin={setUser}
          />}>
            
          </Route> 
        
          
          <Route exact path="/new" element={<NewBakedGood user={user} 
          onAddBakedGood={handleAddBakedGood} 
          />}>
            
          </Route>
          <Route exact path="/bakedgoods" element={<BakedGoodList bakedGoods={bakedGoods} setBakedGoods={setBakedGoods} 
          // user={user} 
          reviews={reviews} setReviews={setReviews} onUpdateReview={handleUpdateReview} onDeleteReview={handleDeleteReview} handleAddReview={handleAddReview}
          />}>
            
          </Route>
          <Route exact path="/reviews" element={<NewReview handleAddReview={handleAddReview} 
          // user={user}
           bakedGoods={bakedGoods}/>}>

          </Route>
        </Routes>
      </main>
      </UserContext.Provider>
    </>
  );
}

export default App;