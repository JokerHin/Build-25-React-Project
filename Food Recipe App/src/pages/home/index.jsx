import React, { useContext } from "react";
import { GlobalContext } from "../../components/context";
import RecipeItem from "../../components/recipe-item";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return (
      <div className="flex gap-4 p-4 flex-wrap justify-center">
        <img
          className="w-20 h-20 animate-spin"
          src="https://www.svgrepo.com/show/173880/loading-arrows.svg"
          alt="Loading icon"
        />
      </div>
    );
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justif-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item, index) => <RecipeItem key={index} item={item} />) // Add key prop
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black-bold">
            Nothing to show. Please search somethings
          </p>
        </div>
      )}
    </div>
  );
}
