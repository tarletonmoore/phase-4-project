import React, { useState } from "react";


function EditGame({ onUpdateBakedGood, id }) {

    const [bakedGoodTitle, setBakedGoodTitle] = useState("");

    function handleFormSubmit(e) {
        e.preventDefault();

        fetch(`/baked_goods/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: bakedGoodTitle,
            }),
        })
            .then((r) => r.json())
            .then((updatedTitle) => onUpdateBakedGood(updatedTitle));
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="title"
                value={bakedGoodTitle}
                onChange={(e) => setBakedGoodTitle(e.target.value)}
            />
            <input type="submit" value="Save" />
        </form>
    );






}

export default EditGame