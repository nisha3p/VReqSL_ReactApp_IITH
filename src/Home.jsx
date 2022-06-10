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

export default function Home() {
	return (
		// <div>
		//   <div class="row">
		//     <div class="col-lg-4 col-md-6 col-sm-12">
		//         <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="SetUp"/>
		//     </div>
		//     <div class="col-lg-4 col-md-6 col-sm-12">
		//         <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Product"/>
		//     </div>
		//     <div class="col-lg-4 col-md-6 col-sm-12">
		//         <Card img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg" content="All Catalogue"/>
		//     </div>
		//   </div>
		// </div>
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
							<div class="row">
								<div class="col-lg-4 col-md-6 col-sm-12">
									<Card
										img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg"
										content="SetUp"
									/>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12">
									<Card
										img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg"
										content="All Product"
									/>
								</div>
								<div class="col-lg-4 col-md-6 col-sm-12">
									<Card
										img="https://previews.123rf.com/images/valentint/valentint1701/valentint170103243/69298593-settings-icon-settings-website-button-on-blue-low-poly-background-.jpg"
										content="All Catalogue"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
