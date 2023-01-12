import { useState } from "react";
import { useNavigate } from "react-router";

function NewBakedGood({ user }) {
  const [title, setTitle] = useState("Power Puffs");
  const [instructions, setInstructions] = useState(`Here's how you make it.
  
## Ingredients

- 1c Sugar
- 1c Spice
- 3c Everything Nice
- 1c Chemical X

## Instructions

**Mix** Mix All Listed Ingredients. _Bake_ for 30 minutes.
  `);
  // const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/bakedgoods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        instructions,
      
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate.push("/");}
      // } else {
      //   r.json().then((err) => setErrors(err.errors));
      // }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </section>
          
          <section>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              rows="10"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </section>
          <section>
            <button type="submit">
              {isLoading ? "Loading..." : "Submit Baked Good"}
            </button>
          </section>
          {/* <section>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </section> */}
        </form>
      </div>
      <div>
        <h1>{title}</h1>
        <p>
          <cite>By {user.username}</cite>
        </p>
        <p>{instructions}</p>
      </div>
    </div>
  );
}

export default NewBakedGood;