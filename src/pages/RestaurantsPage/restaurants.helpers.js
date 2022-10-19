import { restaurants } from "../../data/restaurants";

export const getRestaurants = () => restaurants;
export const getRestaurantBySlug = (slug) => restaurants.find((restaurant) => restaurant.slug == slug);
