import { httpClient } from "../helpers/httpClient";

export const getProducts = () => {
	return httpClient.get("/restaurants");
};

export const getProductById = (id) => {
	return httpClient.get(`/restaurants/${id}`);
};
