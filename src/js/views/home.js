import React from "react";
import { Characters } from "./Characters.jsx";
import { Planets } from "./Planets.jsx";
// import  {PlanetDetails}  from "../views/Planetdetails.jsx";
import  {CharacterDetails}  from "./Characterdetails.jsx";


export const Home = () => (
	<div className="text-center mt-5">
		<Characters/>
		<Planets/>
		{/* <PlanetDetails/> */}
		<CharacterDetails/>


	</div>
);
