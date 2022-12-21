export const ADD_FAVORITES    = 'ADD_FAVORITES';
export const DELETE_FAVORITE = 'DELETE_FAVORITE'


const initialState = {
	myFavorites: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {state, myFavorites:[...state.myFavorites, action.payload] }
    
      case DELETE_FAVORITE:
        return {...state,myFavorites: state.myFavorites?.filter(fav => fav.id !== action.payload)};
  
    default:
      return { ...state };
  }
}


export default rootReducer;