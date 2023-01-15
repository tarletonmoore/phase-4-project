import { useEffect, useState } from "react";


function Bakery() {
  const [bakeries, setBakeries] = useState([]);

  useEffect(() => {
    fetch("/bakedgoods")
      .then((r) => r.json())
      .then(setBakeries);
  }, []);

  return (
    <div>
      {bakeries.length > 0 ? (
        bakeries.map((bakery) => (
            <div>
             <h2>{bakery.name}</h2>
              
             <p> {bakery.address}</p>
            </div>
        ))
      ) : (
        <>
          <h2>No Bakeries Found</h2>
          {/* <button as={Link} to="/new">
            Add a New Bakery
          </button> */}
        </>
      )}
      
    </div>
  );




}
export default Bakery