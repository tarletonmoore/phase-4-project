import React from "react";
import EditBakedGood from "./EditBakedGood"

function BakedGood([bakedGoods, onUpdateBakedGood]) {
const {id, title, instructions} = bakedGoods
debugger
    return (
<div>
<p>Baked Good: {bakedGoods.title}</p>
            <p>instructions: {bakedGoods.instructions}</p>
            <p>by: {bakedGoods.user.username}</p>
            
            {/* <button onClick={handleDeleteClick}>Delete</button> */}

            <EditBakedGood
                id={id}
                title={title}
                instructions={instructions}
                onUpdateBakedGood={onUpdateBakedGood}
            />


</div>
    )
}
export default BakedGood