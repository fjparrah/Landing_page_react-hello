import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<>	
		<Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>

	</>
	);
};

export default Home;

