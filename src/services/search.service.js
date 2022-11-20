import { httpClient } from "../helpers/httpClient";

export const search = (query) => {
	return httpClient.get("/search", {
		params: { query },
	});
};
