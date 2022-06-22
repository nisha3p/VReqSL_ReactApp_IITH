import React from "react";
import "./Trackbar.css"

export default function TrackBar()
{
    return(
        <div class="row px-3">
            <div class="col">
                <ul id="progressbar" >
                    <li class="step0 active " id="step1">SCENE VALIDATION</li>
                    <li class="step0 active text-center" id="step2">ASSET VALIDATION</li>
                    <li class="step0 active text-center" id="step2">ASSET VALIDATION</li>
                    <li class="step0   text-muted text-right" id="step3">SUCCESS!!</li>
                </ul>
            </div>
        </div>
    );
}