import React from "react";

function UserImage(prop)
{
    return (
        <img className="user-image" src = {prop.img} alt="Profile"></img>
    )
}

export default UserImage;