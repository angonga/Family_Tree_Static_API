import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetsDetailed = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">{store.planets[params.theid].name}</h1>
			<hr className="my-4" />
			<div className="card mb-3" style={{ maxWidth: "5cm;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							style={{ padding: "0.5cm", marginTop: "1cm" }}
							src="https://fastly.syfy.com/sites/syfy/files/styles/1200x680/public/wire/legacy/coruscant_defense_fleet_tcg.jpg?offset-y=0"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title" style={{ padding: "1cm", marginLeft: "7cm" }}>
								{store.planets[params.theid].name}
							</h5>
							<p className="card-text" style={{ padding: "1cm", marginLeft: "7cm" }}>
								The Star Wars galaxy contains several broad sub-regions. Their exact definitions
								fluctuated somewhat during the Legends continuity but were later formally updated by the
								new canon continuity when Disney purchased Lucasfilm. The new canon map is broadly like
								the later versions of the Legends galactic map. As a rule, most of the galaxys wealth,
								power, and population are concentrated near the middle of the galactic circle – the Core
								Worlds. The first major interstellar powers in the core are stated to have risen many
								millennia ago, gradually coalescing into the early Galactic Republic, with its capital
								at Coruscant. Waves of colonization (and conquest) by the Republic gradually spread
								outward from the Core, into the sparser systems at the galaxys edge, such as Tatooine.
								Worlds of the Outer Rim are rich in raw resources but lack the population,
								infrastructure, or political power of the Core. Major galactic sub-regions are further
								divided into quadrants, sectors, etc., down to individual star systems and planets. The
								galaxy has at least two companion-satellite dwarf galaxies, one of which is known as the
								Rishi Maze, but they are very lightly settled or explored. The canon map depicts a
								top-down view of the galactic disk, with north as the side of the galactic center that
								Coruscant is located on. As the capital planet of the Republic and later the Empire,
								Coruscant is used as the reference point for galactic astronomy, set at XYZ coordinates
								0-0-0. Standardized galactic time measurements are also based on Coruscants local solar
								day and year.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-sm-2">
						<strong>Name: </strong>
						{store.planets[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Climate: </strong>
						{store.planets[params.theid].climate}
					</div>
					<div className="col-sm-2">
						<strong>Population: </strong>
						{store.planets[params.theid].population}
					</div>
					<div className="col-sm-2">
						<strong>Orbital_Period: </strong>
						{store.planets[params.theid].orbital_period}
					</div>
					<div className="col-sm-2">
						<strong>Rotation_Period</strong>
						{store.planets[params.theid].rotation_period}
					</div>
					<div className="col-sm-2">
						<strong>Diameter: </strong>
						{store.planets[params.theid].diameter}
					</div>
				</div>
			</div>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};
