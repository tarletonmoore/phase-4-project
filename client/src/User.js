import React from "react";

function User({user, setUser}) {

console.log(user)



return (
    <div>
<h2>Name: {user.username}</h2>
            <p>Bio: {user.bio}</p>
            {/* <p>Reviews: {user.reviews.review}</p> */}
        
</div>



)
}



export default User