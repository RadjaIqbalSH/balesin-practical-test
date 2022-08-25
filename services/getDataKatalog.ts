import { axiosClient } from "./axiosClient";

export const getDataKatalog = async () => {
	const { data } = await axiosClient.get("/");
	return data;
};
