import React from "react";
import { NavLink } from "react-router-dom";

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <div>
     <NavLink
     to="/bakedgoods">
     <button> Baked Goods</button>
     </NavLink>
     
     <NavLink 
     to="/reviews">
      Reviews
     </NavLink>
      <NavLink
         to="/new">
         <button> New Baked Good</button>
        </NavLink>
        <NavLink to="me">
      <button>Profile</button>
     </NavLink>
        <NavLink>
        <button onClick={handleLogoutClick}>
          Logout
        </button>
      </NavLink>
    </div>
  );
}



export default NavBar;
