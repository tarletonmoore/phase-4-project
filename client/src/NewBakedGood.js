import { useState } from "react";
import { useNavigate } from "react-router";

function NewBakedGood({ user, onAddBakedGood }) {

  // const [title, setTitle] = useState(""
  //   );
  // const [instructions, setInstructions] = useState(""

  // );

  const [addBakedGood, setAddBakedGood] = useState({
    title: "",
    instructions: "",
});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
const [errors, setErrors] = useState([])

function handleChange(event) {
  setAddBakedGood({
      ...addBakedGood,
      [event.target.id]: event.target.value,
  });
}


  function handleSubmit(e) {
    
    e.preventDefault();
    setIsLoading(true);
    fetch("/baked_goods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: addBakedGood.title,
        instructions: addBakedGood.instructions,
      
      }),
    })
  //   .then((r) => {
  //     setIsLoading(false);
  //     if (r.ok) {
  //       navigate("/bakedgoods");}
  //       else {r.json().then((errorData) => setErrors(errorData.errors));}
      
  //   });
  // }
    .then((r) => {
      setIsLoading(false);
      if (r.ok) { r.json().then((data) => { 
        onAddBakedGood(data);
        setAddBakedGood(
            {
                title: "",
                instructions: "",
                
            }
        );
    
    });
  //       // ((r) => {
  //       onAddBakedGood(r)
  //       setFormData({
  //       title: "",
  //       instructions: "",
        
  //   // })
  // })

      }
      else {r.json().then((errorData) => setErrors(errorData.errors));}
console.log(errors)
    });

  }
  return (
    <div>
      <div>
        <h2>Create Baked Good</h2>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={addBakedGood.title}
              onChange={
                handleChange
                // (e) => setTitle(e.target.value)
              }
            />
          </section>
          
          <section>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              rows="10"
              value={addBakedGood.instructions}
              onChange={
                handleChange
                // (e) => setInstructions(e.target.value)
              }
            />
          </section>
          <section>
            <button type="submit">
              {isLoading ? "Loading..." : "Submit Baked Good"}
            </button>
          </section>
         
          {errors.length > 0 && (
    <ul style={{ color: "black" }}>
      {errors.map((error) => (
        <li key={error}>{error}</li>
      ))}
    </ul>
  )}

        </form>
      </div>
      <div>
        {/* <h1>{title}</h1> */}
        <p>
          <cite>By {user.username}</cite>
        </p>
        {/* <p>{instructions}</p> */}
      </div>
    </div>
  );
}

export default NewBakedGood;