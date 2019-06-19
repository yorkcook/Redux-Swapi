import { FETCHING, SUCCESS, FAILURE } from "../actions";
const initialState = {
  characters: [],
  isLoading: false,
  error: ""
  // Array characters, Boolean fetching, null error.
};

// Fill me in with the important reducers
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: "",
        isLoading: true
      };
    case SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      };
    case FAILURE:
      return {
        ...state,
        error:
          "WE ARE IN SERIOUS TROUBLE CAUSE THATS NO MOON IT IS A SPACESTATION!!!!",
        isLoading: false
      };
    default:
      return state;
  }
};
