import React from "react";
import "../../styles/home.css";
import { useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"


export const Home = () => {
	const { actions, store } = useContext(Context)


	return (
		<div className=" page-container m-2 " >
			<div className=" m-5"> 
				<div className="pb-4"> 
					<h2 className="text-warning" >Characters</h2>

					<div className= "d-flex overflow-auto gap-3 p-5" > 
						{store.characters.map(people=> 
							
							<div className="card card-hover bg-dark text-white" style={{width: '17rem', flex:"none"}} key={people.uid} >
								
								<img 
									src={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`} 
									className="card-img-top card-img-fixed" 
									alt={people.name} 
								/>

								<div className="card-body">
									<h5 className="card-title">{people.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									
									<div className="d-flex justify-content-between">

										<Link to={`/people/${people.uid}`}
										className="btn btn-dark btn-outline-warning col-8" >
											More here! 
										</Link>
										
								
										<button className="btn btn-dark btn-outline-warning"
											onClick={()=>{actions.addFavorite(people.name);}}>
											{
												store.favorites.includes(people.name) ?  
												<i className="fas fa-check"></i> : 
												<i className="fas fa-heart"></i>
											}
										</button>
										
									</div>

								</div>

							</div>
						)}
					</div>
					
				</div>


				<div className="pb-4">
					<h2 className="text-warning" > Vehicles </h2>

					<div className= "d-flex overflow-auto gap-3 p-5">
						{store.vehicles.map(vehicles=> 
							
							<div className="card card-hover bg-dark text-white" style={{width: '17rem', flex:"none"}} key={vehicles.uid}>
								
								<img 
									src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} 
									className="card-img-top card-img-fixed" 
									alt={vehicles.name} 
									onError={(e) => { e.target.onerror = null; e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; }}
								/>

								<div className="card-body">
									<h5 className="card-title">{vehicles.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									
									<div className="d-flex justify-content-between">

									<Link to={`/vehicle/${vehicles.uid}`}
										className="btn btn-dark btn-outline-warning col-8" >
											More here! 
									</Link>
								
										<button className="btn btn-dark btn-outline-warning"
											onClick={()=>{actions.addFavorite(vehicles.name);}}>
											{
												store.favorites.includes(vehicles.name) ?  
												<i className="fas fa-check"></i> : 
												<i className="fas fa-heart"></i>
											}
										</button>
										
									</div>

								</div>
							</div>

						)}
					</div>

				</div>

				<div className="pb-4">
					<h2 className="text-warning"> Planets </h2>

					<div className= "d-flex overflow-auto gap-3 p-5">
						{store.planets.map(planets=> 
							
							<div className="card card-hover bg-dark text-white" style={{width: '17rem', flex:"none"}} key={planets.uid}>
								
								<img 
									src={`https://starwars-visualguide.com/assets/img/planets/${planets.uid}.jpg`} 
									className="card-img-top card-img-fixed" 
									alt={planets.name} 
									
									onError={(e) => { 
										e.target.onerror = null; 
										e.target.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg"; 
										e.target.className += " placeholder-img"; 
									}}
								/>

								<div className="card-body">
									<h5 className="card-title">{planets.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									
									<div className="d-flex justify-content-between">

										<Link to={`/planet/${planets.uid}`} 
											className="btn btn-dark btn-outline-warning col-8" >
											More here! 
										</Link>
								
										<button className="btn btn-dark btn-outline-warning"
											onClick={()=>{actions.addFavorite(planets.name);}}>
											{
												store.favorites.includes(planets.name) ?  
												<i className="fas fa-check"></i> : 
												<i className="fas fa-heart"></i>
											}
										</button>
										
									</div>

								</div>
							</div>

						)}
					</div>

				</div>

			</div>
		</div>
	);
};