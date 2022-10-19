import React from "react";
import { Link } from "react-router-dom";

const RestaurantCard = ({ name, slug, image }) => {
  return (
    <Link to={`/restaurants/${slug}`} className="rounded-xl overflow-hidden bg-[#FFEDDE] px-8 py-16 text-center">
      <div className="mb-4">
        <img className="w-1/2 inline-block aspect-square object-cover" src={image} alt={name} />
      </div>
      <h3 className="text-[#2E266F] inline-block font-medium pb-1 border-b-2 border-[#FE043C]">{name}</h3>
    </Link>
  );
};

export default RestaurantCard;
