import React, { useContext } from "react";
import "../../styles/home.scss";
import { People } from "../component/people";
import { Planets } from "../component/planets";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);
	//aqui se colocan el people.map
	return (
		<div
			className="todo"
			style={{
				backgroundImage: `url("https://wallpapertag.com/wallpaper/full/b/9/0/133261-star-wars-4k-wallpaper-3840x2160-for-full-hd.jpg")`
			}}>
			<div className="container ">
				<h1 style={{ paddingTop: "0.7cm" }}>Characters</h1>
				<div className="scrolling-wrapper ">
					<div>
						<People />
					</div>
				</div>
				<h1 style={{ paddingTop: "0.7cm" }}>Planets </h1>
				<div className="scrolling-wrapper">
					<div>
						<Planets />
					</div>
				</div>
				<div className="container text-center">
					<a
						href="https://www.instagram.com/?hl=esl"
						className="fab fa-instagram fa-2x "
						style={{ margin: "0.5cm", textDecoration: "none" }}
					/>
					<a
						href="https://www.facebook.com/"
						className="fab fa-facebook fa-2x fa-lg"
						style={{ margin: "0.5cm" }}
					/>
					<a
						href="https://blog.twitter.com/es_es.html"
						className="fab fa-twitter fa-2x fa-lg"
						style={{ margin: "0.5cm" }}
					/>
					<a
						href="https://www.youtube.com/"
						className="fab fa-youtube fa-2x fa-lg"
						style={{ margin: "0.5cm" }}
					/>
				</div>
			</div>
		</div>
	);
};
