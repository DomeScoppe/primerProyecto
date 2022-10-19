import React from "react";
import RestaurantCard from "../../components/RestaurantCard";
import { getRestaurants } from "./restaurants.helpers";

const RestaurantsPage = () => {
  const restaurants = getRestaurants();

  return (
    <>
      <div className="min-h-screen bg-[#FFF5EC] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[#2E266F] font-medium text-4xl mb-4">Restaurantes</h1>
            <p className="text-[#707070] mb-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate sint et. Rem assumenda esse fuga dignissimos sit aspernatur. Dolores odit similique doloribus consequatur
              recusandae eveniet eos velit maiores quod.
            </p>
          </div>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {restaurants.map((restaurant, idx) => (
              <RestaurantCard key={idx} {...restaurant} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantsPage;
