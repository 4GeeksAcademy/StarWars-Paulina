import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { CardPlanetas } from "../component/CardPlanetas.jsx";

export const Planets = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.obtenerPlanetas();
    }, []);

    return (
        <div className="text-center mt-5">
            <h1>Planets</h1>
            <div className="card-group">
                <div className="d-flex flex-row overflow-scroll">
                    {store.planetas ? (
                        store.planetas.map((item, id) => (
                            <CardPlanetas
                                key={id}
                                rotation_period={item.rotation_period}
                                orbital_period={item.orbital_period}
                                diameter={item.diameter}
                                climate={item.climate}
                                gravity={item.gravity}
                                terrain={item.terrain}
                                surface_water={item.surface_water}
                                population={item.population}
                                residents={item.residents}
                                id={id+1}
                            />
                        ))
                    ) : (
                        <p></p>
                    )}
                </div>
            </div>
        </div>
    );
};
