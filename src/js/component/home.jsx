import React from "react";
import NavBar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	return (
		<>
			<div>
				<NavBar/>
				<div className="container">	
				<Jumbotron/>
					<div className="row my-3">
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
						<div className="col-3">
							<Card />
						</div>
					</div>
				</div>
				<footer class="bg-dark text-light justify-content-center align-items-center d-flex" style={{height: 50}}>
							CopyRight @ Nicolas Ramirez 2023
				</footer>
			</div>
		</>	
	);
};

export default Home;
