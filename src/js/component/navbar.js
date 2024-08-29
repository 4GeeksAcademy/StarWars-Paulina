import React, {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const Navbar = () => {
  const {store} = useContext(Context)
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/guardar-personaje');
  };

  return (
    <nav className="navbar navbar-light bg-light justify-content-end">
      <div className="nav-item dropdown">
        <a className="nav-link dropdown-toggle"
          href="#" role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false" >
          Favoritos</a>
        <ul className="dropdown-menu" >
          {store.favorites.map((item, id) => (
            <li key={id}>
              <a className="dropdown-item">
                {item.name}</a>
            </li>))}
        </ul>
      </div>
    </nav>
  );
};
