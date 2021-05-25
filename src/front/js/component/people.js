import React, { useContext } from "react";
//import PropTypes from "prop-types";//
//import { useParams } from "react-router-dom";//
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import people_img from "../component/people_img";

export function People() {
	const { store, actions } = useContext(Context);

	return (
		<div className="container-fluid">
			<div className="row p-2 w-6">
				<div className="cards-container d-flex justify-content-between">
					{store.people.map((element, index) => {
						return (
							<div
								className="card text-white bg-dark"
								style={{ width: "18rem", marginRight: "10px" }}
								key={index}>
								<img className="card-img-top" src={people_img[element.name]} alt="Card image cap" />
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<p className="card-text">
										<ul className="characters">
											<li>Gender: {element.gender}</li>
											<li>Eye color: {element.eye_color}</li>
											<li>Hair color: {element.hair_color}</li>
										</ul>
									</p>
									<Link to={"/people_detailed/" + index} className="btn btn-outline-primary">
										Learn More!
									</Link>
									<button
										onClick={() => actions.addFavorites(element.name, "persona")}
										type="button"
										className="btn btn-outline-warning float-right">
										<i className="far fa-heart" />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
