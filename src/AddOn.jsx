import React from "react";
import UserImage from "./UserImage";

function AddOn(prop)
{
    return ( 
        
            <span class="add-on">
                <span class = "support-text"><i class="fa-solid fa-headset"></i> Support</span>
                <span><UserImage img="https://m.economictimes.com/thumb/msid-79122020,width-1200,height-900,resizemode-4,imgsize-453087/sathish-gopalaiah-2.jpg"/></span>
            </span>
        
    );
}

export default AddOn;