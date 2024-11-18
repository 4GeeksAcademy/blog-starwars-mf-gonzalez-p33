import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { Context } from "../store/appContext";
import logo from "/workspaces/blog-starwars-mf-gonzalez-p33/src/img/logo.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	const handleRemoveFavorite = (event, item) => {
		event.preventDefault();
        event.stopPropagation();
        actions.removeFavorites(item);
	};

	return (
		<nav className="navbar navbar-light bg-light ">
			<Link to="/">
				<img src= {logo} className="ms-5 my-1"  style={{ width: "80px", height: "auto"}}/> 
			</Link>
			<div className="ml-auto">
				
				<div className="dropdown">
					<button className="btn btn-warning me-5 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>

					<ul className="dropdown-menu dropdown-menu-end m-2" >
                        {store.favorites.length === 0 ? (
                            <p className="dropdown-item">*Empty*</p>
                        ) : (
                            store.favorites.map((item, index) => (

                                <li key={index} className="d-flex align-items-center mb-2">
                                   
								    <p className="dropdown-item mb-0 me-2">
										{item}
									</p>

                                    <i className="fas fa-trash fa-xs me-1" onMouseDown={(event) => 
										handleRemoveFavorite(event, item)}>
									</i>
                                </li>

                            ))
                        )}
                    </ul>

				</div>

			</div>
		</nav>
	);
};
