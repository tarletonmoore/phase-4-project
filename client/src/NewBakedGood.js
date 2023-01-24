import { useState } from "react";
import { useNavigate } from "react-router";

function NewBakedGood({ user }) {

  const [title, setTitle] = useState(""
    );
  const [instructions, setInstructions] = useState(""

  );
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(e) {
    
    e.preventDefault();
    setIsLoading(true);
    fetch("/baked_goods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        instructions: instructions,
      
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        navigate("/bakedgoods");}
      
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