import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const products = [
    {
      image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
    {
      image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
    {
      image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
    {
      image: "https://images.pexels.com/photos/1199957/pexels-photo-1199957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
    {
      image: "https://images.pexels.com/photos/1251198/pexels-photo-1251198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
    {
      image: "https://images.pexels.com/photos/1600727/pexels-photo-1600727.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Hamburguesa",
      price: 10.24,
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim qui molestiae totam ullam quidem laborum.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF5EC] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-[#2E266F] font-medium text-4xl mb-4">Explore Our Foods</h1>
          <p className="text-[#707070] mb-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident voluptate sint et. Rem assumenda esse fuga dignissimos sit aspernatur. Dolores odit similique doloribus consequatur
            recusandae eveniet eos velit maiores quod.
          </p>
        </div>

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products.map((product, idx) => (
            <ProductCard key={idx} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
