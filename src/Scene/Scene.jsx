import React from 'react'
import AddOn from '../AddOn'
import JsonEditor from '../JsonEditor/JsonEditor'
import Navbar from '../Navbar'
import SideBar from '../SideBar'
import TrackBar from '../Trackbar'
// import the progress bar
import StepProgressBar from 'react-step-progress';
// import the stylesheet
import 'react-step-progress/dist/index.css';
import { isSceneErr } from '../ValidUser'



function Scene() {

	// setup the step content
	const step1Content = <div style={{ marginTop: "10%" }}><JsonEditor /></div>
	const step2Content = <div style={{ marginTop: "10%" }}><JsonEditor /></div>
	const step3Content = <div style={{ marginTop: "10%" }}><JsonEditor /></div>
	const step4Content = <div></div>
	const step5Content = <div></div>

	function step1Validator() {

		if (!isSceneErr) {
			return false;
		}

		return true;
	}
	// setup step validators, will be called before proceeding to the next step
	function step2Validator() {
		// return a boolean
		if (!isSceneErr) {
			return false;
		}

		return true;
	}

	function step3Validator() {
		return true;
		// return a boolean
	}

	function step4Validator() {
		return true;
		// return a boolean
	}
	function step5Validator() {
		return true;
		// return a boolean
	}


	function onFormSubmit() {
		// handle the submit logic here
		// This function will be executed at the last step
		// when the submit button (next button in the previous steps) is pressed
	}



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

							<StepProgressBar
								startingStep={0}
								onSubmit={onFormSubmit}
								steps={[
									{
										label: 'SCENE VALIDATOR',

										name: 'step 1',
										content: step1Content,
										validator: step1Validator
									},
									{
										label: 'ASSET VALIDATOR',

										name: 'step 2',
										content: step2Content,
										validator: step2Validator
									},
									{
										label: 'ACTION-RESPONSE DEFINE',

										name: 'step 3',
										content: step3Content,
										validator: step3Validator
									},
									{
										label: 'CUSTOM SCRIPT LOGIC',

										name: 'step 4',
										content: step4Content,
										validator: step4Validator
									},
									{
										label: 'EVENT TIMELINE',
										name: 'step 5',
										content: step5Content,
										validator: step5Validator
									}
								]}
							/>;

						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Scene