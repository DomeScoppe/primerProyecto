import "./Hero.css";

const Hero = () => {
  return (
    <div className="flex aspect-video relative bg-secondary w-screen max-h-screen">
      <div className="inset-x-0 top-3 mx-auto flex justify-center h-8 absolute sm:justify-start z-10">
        <ul className="flex gap-x-14 h-8 text-complementary font-semibold text-base md:text-lg sm:ml-24 md:ml-32 lg:ml-56 xl:ml-96 ">
          <li className="hover:font-bold hover:cursor-pointer hover:underline">Products</li>
          <li className="hover:font-bold hover:cursor-pointer hover:underline">Favorites</li>
          <li className="hover:font-bold hover:cursor-pointer hover:underline">Promotions</li>
        </ul>
      </div>
      <img src="src/assets/someFood.png" className="absolute opacity-25 w-1/2 h-1/2 mt-5"></img>
      <img
        src="src/assets/principalDish.png"
        className="hidden lg:block absolute w-48 h-48 principalDish"></img>
      <div className="phrase text-4xl sm:text-4xl lg:text-7xl font-bold absolute">..Delicious</div>
      <div className="restaurantName absolute text-5xl sm:text-5xl lg:text-8xl font-extrabold tracking-wide text-complementary">
        Restaurancito
      </div>
      <div className="heroSearch self-center mt-20 mx-auto flex relative md:-mt-10 lg:-mt-5 bg-white shadow-[0_0_8px_1px_rgba(0,0,0,0.3)]">
        <input
          placeholder="placeholder............"
          className="text-2xl text-center pr-5 sm:pr-0"></input>
        <div className="flex justify-center items-center text-2xl pl-5 text-white font-bold rounded-bl-full w-1/4 lg:w-2/12 cursor-pointer h-full bg-primary absolute right-0">
          Go
        </div>
      </div>
      <div className="absolute location flex items-center">
        <img src="src/assets/location.png" className="w-12 h-12 md:w-32 md:h-24" />
        <p className="md:-ml-10">En un restaurante de una calle</p>
      </div>
      <div className="hidden left:1/4 sm:flex absolute top-0 right-0 w-1/4 h-full bg-primary  flex-col items-center shadow-[0_-3px_5px_1px_rgba(0,0,0,0.5)]">
        <div className="absolute user flex-nowrap flex justify-between">
          <label className="text-complementary pl-1 rounded-l-full bg-white flex items-center pr-5">
            Name: 
          </label>
          <input className="rounded-r-full pl-1 pr-6"></input>
          <div className="rounded-full bg-primary absolute w-4 h-4 right-1 top-1 cursor-pointer"></div>
        </div>
        <img
          src="src/assets/profileIcon.png"
          className="w-1/4 min-w-[32px] aspect-square rounded-full bg-white mt-4 shadow-[0_0_5px_1px_rgba(0,0,0,0.8)]"
          alt="profile"></img>
      </div>
    </div>
  );
};

export default Hero;

//#FE043C
