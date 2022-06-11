import React from "react";
import { NavLink } from "react-router-dom";

export default function SideBar() {
	return (
		<div id="sidebar">
			<header>
				<a href="#">VReqSL</a>
			</header>
			<div class="nav" style={{ display: "block" }}>
				<div>
					<a href="#">
						<i class="fa-solid fa-user"></i> Profile
					</a>
				</div>
				<div style={{ marginTop: "1rem" }}>
					<a href="#">
						<i class="fa-solid fa-headset"></i> Support
					</a>
				</div>
				<NavLink to="/">
					<div style={{ marginTop: "1rem", fontSize:"140%" }}>
						<a href="#">
							<i class="fa-solid fa-headset"></i> LogOut
						</a>
					</div>
				</NavLink>
			</div>

			<div class="profile-sec nav"></div>
		</div>
	);
}
