import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext"

export const CardPersonajes = ({ name, gender, hair_color, eye_color, id }) => {
    const {actions} = useContext(Context)
    return (
        <div>
            <div className="card" style={{ width: "18rem", flex: "none", margin: "10px", backgroundColor: "#f0f0f0" }}>
                <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} className="card-img-top" alt={name} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text" style={{ fontFamily: "'Roboto Slab', serif" }}>Gender: {gender} </p>
                    <p className="card-text" style={{ fontFamily: "'Roboto Slab', serif" }}>Hair Color: {hair_color} </p>
                    <p className="card-text" style={{ fontFamily: "'Roboto Slab', serif" }}>Eye Color: {eye_color} </p>

                    <Link to={`/Characterdetails/${id}`}><button className="btn btn-outline-primary float-start">More info</button></Link>
                    <button className="btn btn-outline-warning float-end"
                    onClick={()=>actions.addFavorite(name,"C")}
                    >
                        <i className="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}