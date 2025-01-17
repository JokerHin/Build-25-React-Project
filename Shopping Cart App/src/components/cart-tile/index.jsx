import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../store/slices/cart-slice";

export default function CartTile({ cartItem }) {
  const dispatch = useDispatch();

  function handleRemoveFromCart() {
    dispatch(removeFromCart(cartItem.id));
  }

  return (
    <div className="w-[400px]">
      <div className=" w-full flex flex-col p-5 justify-between bg-gray-100 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img
            src={cartItem?.image}
            className="h-40 rounded-lg alt={cartItem?.title}"
          />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-black font-bold">{cartItem?.tile}</h1>
            <p className="text-black font-extrabold">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-semibold p-4"
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
}
