import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CharacterDetails = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // console.log(id)
            await actions.getCharacterDetails(id);
            setLoading(false);
        };
        fetchData();
    }, []);

    const character = store.character || {}; 
  
    if (loading) {
        return <div>Loading...</div>; 
    }

    if (!character.name) {
        return <div>Character not found</div>; 
    }

    return (
        <div className="jumbotron col-11 mx-auto">
            <div className="detail-header d-flex align-center justify-content-between">
                <h1 className="display-4">{store.character.name}</h1>
            </div>
            <hr className="my-4" />

            <div className="detail-container mb-3 col-12 d-flex">
                <div className="col-md-4">
                    <img
                        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                        className="img-fluid rounded-pill"
                        alt={character.name}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <div className="character-description">
                            <p>Birth Year: {character.birth_year}</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Gender: {character.gender}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Height: {character.height}</p>
                            <p>Mass: {character.mass}</p>
                            <p>Skin Color: {character.skin_color}</p>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharacterDetails.propTypes = {
};
