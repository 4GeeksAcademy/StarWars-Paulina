import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetDetails = (props) => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();

    const planet = store.planet;

    useEffect(() => {
        actions.getPlanetDetail(id);
    }, []);

    return (
        <div className="jumbotron col-11 mx-auto">
            <div className="detail-header d-flex align-center justify-content-between">
                <h1 className="display-4">{store.planet.name}</h1>
            </div>
            <hr className="my-4" />

            <div className="detail-container mb-3 col-12 d-flex justify-content-center">
                <div className="col-md-4">
                    <img
                        src={
                            store.planet.name === "Tatooine"
                                ? "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357"
                                : `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
                        }
                        className="planet-img card-img-top rounded-circle"
                        alt={store.planet.name}
                        onError={(e) => (e.target.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9vE3lLIi7Nr8oxjQrjGNBbRV5jdKl16Oyg&s")}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{store.planet.name}</h5>
                        <div className="planet-description">
                            <p>
                                {planet.name} es un planeta conocido por su clima {planet.climate} y terreno variado que incluye {planet.terrain}.
                                Tiene un diámetro de {planet.diameter} km y una gravedad de {planet.gravity}.
                                El planeta rota en un período de {planet.rotation_period} horas y tiene un período orbital de {planet.orbital_period} días.
                            </p>
                            <p>
                                {planet.name} tiene una población de {planet.population} habitantes y un porcentaje de superficie de agua de {planet.surface_water}%.
                                Ha aparecido en {planet.films ? planet.films.length : 0} películas del universo de Star Wars y es hogar de varios residentes notables.
                            </p>
                         
                        </div>
                    </div>
                </div>
            </div>
                        
        </div>
    );
};

PlanetDetails.propTypes = {
    match: PropTypes.object
};
