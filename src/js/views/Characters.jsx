import React, {useEffect, useContext} from "react";
import { Context } from "../store/appContext";
import { CardPersonajes } from "../component/CardPersonajes.jsx";

export const Characters = () => {
    const{store, actions}=useContext(Context)

    useEffect(()=>{
        actions.obtenerPersonajes()
    },[])
    return(
	<div className="text-center mt-5">
		<h1>Characters</h1>
		<div className="card-group">
            
            <div className="d-flex flex-row overflow-scroll">
                {store.personajes.map((item,id)=>(
                   <CardPersonajes
                   key={id}
                   name={item.name}
                   gender={item.gender}
                   hair_color={item.hair_color}
                   eye_color={item.eye_color}
                   id={id+1}
                   /> 
                ))}
            </div>
        </div>
	</div>
)}

