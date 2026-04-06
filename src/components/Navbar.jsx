import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/" className="navbar-brand text-warning fw-bold">
        Star Wars Blog
      </Link>

      <div className="dropdown">
        <button
          className="btn btn-warning dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
        >
          Favorites ({store.favorites.length})
        </button>

        <ul className="dropdown-menu dropdown-menu-end">
          {store.favorites.length === 0 ? (
            <li className="dropdown-item">No favorites yet</li>
          ) : (
            store.favorites.map((fav, index) => (
              <li
                key={index}
                className="dropdown-item d-flex justify-content-between align-items-center"
              >
                <span>{fav.name}</span>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => actions.removeFavorite(fav.uid, fav.type)}
                >
                  x
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </nav>
  );
};