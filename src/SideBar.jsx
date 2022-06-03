import React from "react";

export default function SideBar()
{
    return (
			<div id="sidebar">
				<header>
					<a href="#">VReqSL</a>
				</header>
				<div class="nav" style={{display:"block"}}>
					<div>
						<a href="#">
							<i class="fa-solid fa-user"></i> Profile
						</a>
					</div>
					<div style={{marginTop: "1rem"}}>
						<a href="#">
							<i class="fa-solid fa-headset"></i> Support
						</a>
					</div>
				</div>

				<div class="profile-sec nav"></div>
			</div>
		);
}