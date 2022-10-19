import React from "react";

const RecommendationCard = ({ name, description, url, alt }) => {
  return (
    <article className="w-full rounded-xl overflow-hidden relative">
      <img src={url} alt={alt} className="w-full aspect-[4/3] object-cover" />
      <div className="w-full absolute bottom-0 left-0 bg-primary/50 text-white">
        <div className="w-full px-2 md:px-4">
          <h3 className="my-1 sm:my-0 font-bold capitalize">{name}</h3>
          <p className="mb-8 sm:mb-10 sm:text-md md:mb-12">{description}</p>
        </div>
        <div className="w-full relative">
          <a
            href="#"
            className="px-6 py-1 rounded-l-lg absolute bottom-4 right-0 bg-white text-primary text-right"
          >
            Delivery
          </a>
        </div>
      </div>
    </article>
  );
};

export default RecommendationCard;
