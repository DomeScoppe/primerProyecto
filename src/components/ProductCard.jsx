import React from "react";

const ProductCard = ({ name, price, description, image }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <img className="w-full aspect-[4/3] object-cover" src={image} alt={name} />
      <div className="bg-white p-6">
        <div className="flex justify-between mb-2">
          <h3 className="text-[#2E266F] font-medium">{name}</h3>
          <strong className="text-[#FE043C]">${price}</strong>
        </div>
        <small className="text-[#707070]">{description}</small>
      </div>
    </div>
  );
};

export default ProductCard;
