import React from "react";
import { Navigate, useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard";
import { getRestaurantBySlug } from "./restaurants.helpers";

export const RestaurantPage = () => {
  const { slug } = useParams();
  const restaurant = getRestaurantBySlug(slug);

  if (!restaurant) {
    return <Navigate to="/restaurants" />;
  }

  return (
    <>
      <div className="min-h-screen bg-[#FFF5EC] py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-[#2E266F] font-medium text-4xl mb-4">Restaurante: {restaurant.name}</h1>
            <p className="text-[#707070] mb-12">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate sint et. Rem assumenda esse fuga dignissimos sit aspernatur. Dolores odit similique doloribus consequatur
              recusandae eveniet eos velit maiores quod.
            </p>
          </div>
          <h3 className="text-2xl my-4">Productos:</h3>
          {/* TODO: reutilizar componente Products */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {restaurant.products.map((product, idx) => (
              <ProductCard key={idx} {...product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
