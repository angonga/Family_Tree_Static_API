import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
/*import people_img from "../component/people_img";  {people_img[element.name]}*/

export const PeopleDetailed = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	return (
		<div className="jumbotron">
			<h1 className="display-4"> {store.people[params.theid].name}</h1> <hr className="my-4" />
			<div className="card mb-3" style={{ maxWidth: "5cm;" }}>
				<div className="row g-0">
					<div className="col-md-4">
						<img
							style={{ padding: "0.5cm", marginTop: "1cm" }}
							src="
https://www.theyoungfolks.com/wp-content/uploads/2019/12/underrated-star-wars-featured-extras-characters-ilm-stan-winston-henson-1-770x490.jpg"
						/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title" style={{ padding: "1cm", marginLeft: "5.5cm" }}>
								{store.people[params.theid].name}
							</h5>
							<p className="card-text" style={{ padding: "1cm", marginLeft: "5.5cm" }}>
								Star Wars is an American epic space opera media franchise created by George Lucas, which
								began with the eponymous 1977 film and quickly became a worldwide pop-culture
								phenomenon. The franchise has been expanded into various films and other media,
								including television series, video games, novels, comic books, theme park attractions,
								and themed areas, comprising an all-encompassing fictional universe. In 2020, its total
								value was estimated at US$70 billion, and it is currently the fifth-highest-grossing
								media franchise of all time. The original film (Star Wars), retroactively subtitled
								Episode IV: A New Hope (1977), was followed by the sequels Episode V: The Empire Strikes
								Back (1980) and Episode VI: Return of the Jedi (1983), forming the original Star Wars
								trilogy. Lucas later returned to filmmaking to direct a prequel trilogy, consisting of
								Episode I: The Phantom Menace (1999), Episode II: Attack of the Clones (2002), and
								Episode III: Revenge of the Sith (2005). In 2012, Lucas sold his production company to
								Disney, relinquishing his ownership of the franchise. The subsequently produced sequel
								trilogy consists of Episode VII: The Force Awakens (2015), Episode VIII: The Last Jedi
								(2017), and Episode IX: The Rise of Skywalker (2019). All nine films of the Skywalker
								saga were nominated for Academy Awards with wins going to the first two releases.
								Together with the theatrical live action spin-off films Rogue One (2016) and Solo
								(2018), the combined box office revenue of the films equated to over US$10 billion and
								is currently the second highest-grossing film franchise of all time.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container" style={{ height: "2cm", padding: "0.5cm" }}>
				<div className="row">
					<div className="col-sm-2">
						<strong>Name: </strong>
						{store.people[params.theid].name}
					</div>
					<div className="col-sm-2">
						<strong>Birth Year: </strong>
						{store.people[params.theid].birth_year}
					</div>
					<div className="col-sm-2">
						<strong>Gender: </strong>
						{store.people[params.theid].gender}
					</div>
					<div className="col-sm-2">
						<strong>Height: </strong>
						{store.people[params.theid].height}
					</div>
					<div className="col-sm-2">
						<strong>Skin Color: </strong>
						{store.people[params.theid].skin_color}
					</div>
					<div className="col-sm-2">
						<strong>Eye Color:</strong>
						{store.people[params.theid].eye_color}
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

