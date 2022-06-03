import './App.css';
import Login from './Login/Login';
import SignUp from './Login/SignUP';
import SideBar from './SideBar';
import Navbar from './Navbar';
import AddOn from './AddOn';
import Home from './Home';
import TrackBar from './Trackbar';

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

function App() {
  return (
    viewScreen(1)
  );
}

export default App;
