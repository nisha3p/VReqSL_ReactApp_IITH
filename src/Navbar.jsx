import React from "react";

export default function Navbar(prop)
{
    return (
        <div class="shadow p-3 mb-5 bg-white rounded">
            <div class="navbar-title">
                {prop.title}
            </div>
        </div>
    );
}