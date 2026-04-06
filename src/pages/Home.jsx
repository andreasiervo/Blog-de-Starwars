import React, { useContext, useEffect } from "react";
import { Context } from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";
import fallbackImage from "../assets/img/rigo-baby.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getPeople();
    actions.getPlanets();
    actions.getVehicles();
  }, []);

  const mainCharacters = store.people.filter(
    (item) =>
      item.name === "Luke Skywalker" ||
      item.name === "R2-D2" ||
      item.name === "Leia Organa"
  );

  return (
    <div className="container mt-4">

      {/* CHARACTERS */}
      <h2 className="text-warning mb-3">Characters</h2>

      <div className="d-flex gap-3 mb-5">
        {mainCharacters.map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.uid}>
            <img
              src={`https://starwars-visualguide.com/assets/img/characters/${item.uid}.jpg`}
              className="card-img-top"
              alt={item.name}
              style={{ height: "250px", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = fallbackImage;
              }}
            />

            <div className="card-body">
              <h5>{item.name}</h5>

              <div className="d-flex justify-content-between">
                <Link
                  to={`/single/people/${item.uid}`}
                  className="btn btn-outline-primary"
                >
                  Learn more
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() =>
                    actions.addFavorite({ ...item, type: "people" })
                  }
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PLANETS */}
      <h2 className="text-warning mb-3">Planets</h2>

      <div className="d-flex gap-3 mb-5">
        {store.planets.slice(0, 3).map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.uid}>
            <img
              src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
              className="card-img-top"
              alt={item.name}
              style={{ height: "250px", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = fallbackImage;
              }}
            />

            <div className="card-body">
              <h5>{item.name}</h5>

              <div className="d-flex justify-content-between">
                <Link
                  to={`/single/planets/${item.uid}`}
                  className="btn btn-outline-primary"
                >
                  Learn more
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() =>
                    actions.addFavorite({ ...item, type: "planets" })
                  }
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* VEHICLES */}
      <h2 className="text-warning mb-3">Vehicles</h2>

      <div className="d-flex gap-3 mb-5">
        {store.vehicles.slice(0, 3).map((item) => (
          <div className="card" style={{ width: "18rem" }} key={item.uid}>
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${item.uid}.jpg`}
              className="card-img-top"
              alt={item.name}
              style={{ height: "250px", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = fallbackImage;
              }}
            />

            <div className="card-body">
              <h5>{item.name}</h5>

              <div className="d-flex justify-content-between">
                <Link
                  to={`/single/vehicles/${item.uid}`}
                  className="btn btn-outline-primary"
                >
                  Learn more
                </Link>

                <button
                  className="btn btn-warning"
                  onClick={() =>
                    actions.addFavorite({ ...item, type: "vehicles" })
                  }
                >
                  ♥
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};