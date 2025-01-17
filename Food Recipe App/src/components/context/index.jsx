import React, { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);
export default function GlobalState({ children }) {
  const [searchParam, setSearchParam] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoriteList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`
      );
      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoading(false);
      }
      setSearchParam("");
      navigate("/"); // Redirect to home page when search
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearchParam("");
    }
  }

  function handleAddToFavourite(getCurrentItem) {
    let cypFavoritesList = [...favoriteList];
    const index = cypFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );
    if (index === -1) {
      cypFavoritesList.push(getCurrentItem);
    } else {
      cypFavoritesList.splice(index, 1);
    }
    setFavoritesList(cypFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        searchParam,
        loading,
        recipeList,
        recipeDetailsData,
        favoriteList,
        setSearchParam,
        handleSubmit,
        setRecipeDetailsData,
        handleAddToFavourite,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
