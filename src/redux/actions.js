import { ADD_FAVORITES, DELETE_FAVORITE } from "./reducer"

export const addProduct = character => {
	return { type: ADD_FAVORITES, payload: character };
};

export const deleteProduct = id => {
	return { type: DELETE_FAVORITE, payload: id };
};