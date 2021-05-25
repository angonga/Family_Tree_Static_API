import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	console.log(store.favorites);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggle = () => setDropdownOpen(prevState => !prevState);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link className="navbar-brand" to="/">
				<img
					src="https://png.pngitem.com/pimgs/s/341-3413907_star-wars-logo-black-and-white-hd-png.png"
					width="150px"
					style={{ background: "#f8f9ed" }}
				/>
			</Link>

			<Dropdown className="mx-5" isOpen={dropdownOpen} toggle={toggle}>
				<DropdownToggle caret>Favorites {store.favorites.length}</DropdownToggle>
				<DropdownMenu>
					{store.favorites.map((element, i) => {
						return (
							<li key={i}>
								<DropdownItem>
									{element.name}
									<button
										className="remove"
										style={{ marginLeft: "10px" }}
										onClick={() => actions.deleteFavorites(i)}>
										<i className="fas fa-trash" />
									</button>
								</DropdownItem>
							</li>
						);
					})}
				</DropdownMenu>
			</Dropdown>
		</nav>
	);
};
