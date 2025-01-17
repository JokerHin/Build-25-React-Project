import React, { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../components/context";

export default function Favorites() {
  const { favoriteList } = useContext(GlobalContext); //puting favourite list in cart

  return (
    <div className="py-8 container mx-auto flex flex-wrap justif-center gap-10">
      {favoriteList && favoriteList.length > 0 ? (
        favoriteList.map((item, index) => (
          <RecipeItem key={index} item={item} />
        )) // Add key prop
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-black-bold">
            Nothing is added in favorites.
          </p>
        </div>
      )}
    </div>
  );
}
