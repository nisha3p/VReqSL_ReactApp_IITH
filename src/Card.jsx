import React from "react";


function Card(prop)
{
    return (
        <div class="card" onClick={console.log("Item Clicked")}>
            <img class="card-img-top" src={prop.img} alt="Card cap" />
            <div class="card-body">
                <p class="card-text">{prop.content}</p>
            </div>
        </div>
    );
}

export default Card;