import React, { createContext, useReducer } from "react";
import storeReducer, { initialStore } from "../store";

export const Context = createContext(null);

export const StoreProvider = ({ children }) => {
  const [store, dispatch] = useReducer(storeReducer, initialStore());

  const getPeople = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/people");
      const data = await response.json();
      dispatch({ type: "get_people", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const getPlanets = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/planets");
      const data = await response.json();
      dispatch({ type: "get_planets", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const getVehicles = async () => {
    try {
      const response = await fetch("https://www.swapi.tech/api/vehicles");
      const data = await response.json();
      dispatch({ type: "get_vehicles", payload: data.results });
    } catch (error) {
      console.log(error);
    }
  };

  const addFavorite = (item) => {
    const exists = store.favorites.some(
      fav => fav.uid === item.uid && fav.type === item.type
    );

    if (!exists) {
      dispatch({ type: "add_favorite", payload: item });
    }
  };

  const removeFavorite = (uid, type) => {
    dispatch({ type: "remove_favorite", payload: { uid, type } });
  };

  const actions = {
    getPeople,
    getPlanets,
    getVehicles,
    addFavorite,
    removeFavorite
  };

  return (
    <Context.Provider value={{ store, actions }}>
      {children}
    </Context.Provider>
  );
};