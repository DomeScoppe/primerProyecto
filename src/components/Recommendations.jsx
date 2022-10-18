import React from "react";
import RecomendationCard from "./RecommendationCard";

const Recommendations = () => {
  const images = [
    {
      id: 1,
      name: "Pizza 01",
      alt: "Pizza Big 01",
      url: "./src/assets/pizza_01.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem.",
    },
    {
      id: 2,
      name: "Pizza 02",
      alt: "Pizza Big 02",
      url: "./src/assets/pizza_02.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem.",
    },
    {
      id: 3,
      name: "Pizza 03",
      alt: "Pizza Big 03",
      url: "./src/assets/pizza_03.jpeg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem.",
    },
  ];
  return (
    <section className="w-full container mx-auto px-4 flex flex-col justify-center items-center">
      <article className="w-full p-4 my-10 grid gap-6 grid-cols-1 md:grid-cols-2 justify-center items-center">
        <h2 className="pl-4 border-l-8 border-primary text-4xl capitalize text-complementary">
          Some top Restaurant for Dining in or take away!
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          voluptatem aut magni sint itaque quo vitae ad dicta corrupti atque
          maiores, voluptatibus sed consequuntur nisi id incidunt quam
          perferendis molestiae! Cum, voluptas dolore quisquam modi atque sunt.
        </p>
      </article>
      <div className=" w-full grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((item) => {
          return <RecomendationCard key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Recommendations;
