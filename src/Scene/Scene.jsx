import React from 'react'
import AddOn from '../AddOn'
import JsonEditor from '../JsonEditor/JsonEditor'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import TrackBar from '../Trackbar'

function Scene() {
	return (
		<div>
			<div id="viewport">
				<SideBar />
				<div id="content">
					<div class="container-fluid">
						<div class="above-navbar">
							<span class="section-heading">Scene </span>
							<AddOn />
						</div>
						<div class="content-area">
							<Navbar title="Home" />
							<TrackBar />
							<JsonEditor />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scene