import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../components/context";

export default function Details() {
  const { id } = useParams(); //item ID
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    favoriteList,
    handleAddToFavourite,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        if (data?.data) {
          setRecipeDetailsData(data?.data);
          setLoading(false);
        }
      } catch (e) {
        console.log(e);
      }
    }
    getRecipeDetails();
  }, [id, setRecipeDetailsData]);

  return (
    <div className="container mx-auto py-10 grid grid-cols-2 lg-grid-cols-2 gap-10">
      <div className="row-start-2 lg:row-start-auto">
        <div className="h-96 overflow-hidden rounded-xl group">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="recipe item"
            className="h-full w-full object-cover block group-hover:scale-105 duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <span className="text-sm text-cyan-700 font-medium">
          {recipeDetailsData?.recipe?.publisher}
        </span>
        <h3 className="font-bold text-2xl truncate text-black mb-5">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <div>
          <button
            onClick={() => handleAddToFavourite(recipeDetailsData?.recipe)}
            className="p-3 px-8 rounded-lg uppercase font-medium tracking-wider mt-3 text-sm bg-black text-white"
          >
            {favoriteList.findIndex(
              (item) => item.id === recipeDetailsData?.recipe?.id
            ) > -1
              ? "Remove from favorites"
              : "Save as favorites"}
          </button>
        </div>
        <div>
          <span className="text-2xl font-semibold text-black">
            Ingredients:
          </span>
          <ul className="flex flex-col gap-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg text-black">
                <span>
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span>{ingredient.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
