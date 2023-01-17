import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import BakedGoodList from "./BakedGoodList";
import ReviewList from "./ReviewList";
import NewBakedGood from "./NewBakedGood";
import SignUpForm from "./SignUpForm";

function App() {
  const [user, setUser] = useState(null);
// const [users, setUsers] = useState([])
// const [bakedGoods, setBakedGoods] = useState("")
  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    // fetch("/users")
    // .then((r) => r.json())
    // .then((users) => setUsers(users))
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route exact path="/signup" element={<SignUpForm onLogin={setUser}/>}>
            
          </Route> 
          <Route exact path="/reviews" element={<ReviewList />}>

          </Route>
          <Route exact path="/new" element={<NewBakedGood user={user} />}>
            
          </Route>
          <Route exact path="/bakedgoods" element={<BakedGoodList 
          // users={users}
          />}>
            
          </Route>
        </Routes>
      </main>
    </>
  );
}

export default App;