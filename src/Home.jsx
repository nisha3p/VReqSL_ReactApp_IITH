import React from "react";
import Card from "./Card";
import Login from "./Login/Login";
import SignUp from "./Login/SignUP";
import SideBar from "./SideBar";
import Navbar from "./Navbar";
import AddOn from "./AddOn";
import TrackBar from "./Trackbar";
import Userstore from "./store/Userstore";
import { observer } from "mobx-react";
import JsonEditor from "./JsonEditor/JsonEditor";
import Table from "./Table/Table";

export default function Home() {
	return (
		<div>
			<div id="viewport">
				<SideBar />
				<div id="content">
					<div class="container-fluid">
						<div class="above-navbar">
							<span class="section-heading"> Cataloging </span>
							<AddOn />
						</div>
						<div class="content-area">
							<Navbar title="Home" />
							<TrackBar />
							<Table />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
