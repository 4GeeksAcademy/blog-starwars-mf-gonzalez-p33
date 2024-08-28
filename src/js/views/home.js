import React from "react";
import "../../styles/home.css";
import { useContext} from "react";
import { Context } from "../store/appContext"


export const Home = () => {
	const { store } = useContext(Context)

	return (
		<div className="text-center mt-5">
			<h1>Characters</h1>
			<div className= "d-flex" > 
				{store.characters.map(people=> 
					<div className="card" style={{width: '18rem' }}>
						<img src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} className="card-img-top" alt={people.name} />
						<div className="card-body">
							<h5 className="card-title">{people.name}</h5>
							<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
							<a href="#" className="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};