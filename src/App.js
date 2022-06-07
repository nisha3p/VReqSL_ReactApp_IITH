import './App.css';
import Login from './Login/Login';
import SignUp from './Login/SignUP';
import SideBar from './SideBar';
import Navbar from './Navbar';
import AddOn from './AddOn';
import Home from './Home';
import TrackBar from './Trackbar';
import React from 'react';
import Userstore from './store/Userstore';
import {observer} from 'mobx-react';

function viewScreen(index)
{
  if (index === 1)
		return (
			<div>
				<Login />
			</div>
		);
	else if (index === 2)
		return (
			<div>
				<SignUp />
			</div>
		);
	else if (index === 3)
		return (
			// <div>
			// 	<Navbar title="Home"/>
			// 	<SideBar />
			// </div>
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
						</div>
					</div>
				</div>
			</div>
		);

	
    
}

export default function App() {
  
	return (
    viewScreen(1)
  );
}

// class App extends React.Component{
	
// 	async componentDidMount(){

// 		try{

// 			let res = await fetch('/isLoggedIn', {
// 				method: 'post',
// 				headers: {
// 					'Accept': 'application/json',
// 					'Content-Type': 'application/json'
// 				}
// 			});

// 			let result = await res.json();

// 			if(result && result.success){
// 				Userstore.loading = false;
// 				Userstore.isLoggedIn = true;
// 				Userstore.username = result.username;
// 			}

// 			else{
// 				Userstore.loading = false;
// 				Userstore.isLoggedIn = false;
// 			}
// 		}

// 		catch(e)
// 		{
// 			Userstore.loading = false;
// 			Userstore.isLoggedIn = false;
// 		}
// 	} 

// 	async doLogout(){

// 		try{

// 			let res = await fetch('/isLogout', {
// 				method: 'post',
// 				headers: {
// 					'Accept': 'application/json',
// 					'Content-type': 'application/json'
// 				}
// 			});

// 			let result = await res.json();

// 			if(result && result.success){
				
// 				Userstore.isLoggedIn = false;
// 				Userstore.username = '';
// 			}
// 		}

// 		catch(e)
// 		{
// 			console.log(e);
// 		}
// 	} 

// 	render(){
		
// 		console.log("isLoggedIn: " + Userstore.isLoggedIn);
// 		console.log("isLoading: " + Userstore.loading);
		
// 		if(Userstore.loading){
// 			return(
// 				<div>
// 					<div className='Loading-container'>
// 						Loading Please Wait......
// 					</div>
// 				</div>
// 			)
// 		}

// 		else{

// 			if(Userstore.isLoggedIn)
// 			{
// 				return(
// 					<div>
// 						<div>
// 							WELCOME {Userstore.username}
// 						</div>
// 						<div>
// 							<button onClick={() => this.doLogout()}> Log Out</button>
// 						</div>
// 					</div>
// 				);
// 			}

// 			return(
// 				<div>
// 					<SignUp />
// 				</div>
// 			);
// 		}
// 	}
// }

// export default observer(App);
