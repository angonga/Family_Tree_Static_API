const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPeople: () => {
				fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(async data => {
						console.log("load people", data.results);
						let arrayResults = data.results;
						let peopleArray = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							peopleArray.push(data);
						}

						console.log("people array ", peopleArray);
						setStore({ people: peopleArray });
					});
			},

			loadPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(async data => {
						console.log("load planets", data.results);
						let resultsArray = data.results;
						let planetsArray = [];

						for (let i = 0; i < resultsArray.length; i++) {
							const res = await fetch(resultsArray[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							planetsArray.push(data);
						}

						console.log("planets array ", planetsArray);
						setStore({ planets: planetsArray });
					});
			},

			addFavorites: (nombre, tipo) => {
				let favoritos = getStore().favorites;
				let nameArray = favoritos.map(obj => obj.name);
				nameArray.includes(nombre)
					? setStore({ favorites: favoritos })
					: setStore({ favorites: favoritos.concat({ name: nombre, type: tipo }) });
			},

			deleteFavorites: index => {
				const favorites = getStore().favorites;
				favorites.splice(index, 1);
				setStore({ favorites: [...favorites] });
			},

			changeColor: (index, color) => {
				//get the store

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
