import axios from "axios";

import { apiToken, baseURL } from "../constants";

export const apiService = axios.create({
	baseURL,
	headers: {
		Authorization: `Bearer ${apiToken}`,
	},
});
