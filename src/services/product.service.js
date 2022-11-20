import { httpClient } from "../helpers/httpClient";

export const getProducts = () => {
	return httpClient.get("/products");
};

export const getProductById = (id) => {
	return httpClient.get(`/products/${id}`);
};
