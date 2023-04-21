import { combineReducers } from "redux";
import {
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE,
} from "./actionTypes";

// Initial state for all reducers
const initialState = {
  highlights: [],
  categories: [],
  activity: {},
  error: null,
};

// Reducer for highlights
const highlightsReducer = (state = initialState.highlights, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS_SUCCESS:
      // Update state with new highlights array from action payload
      return [...action.payload];
    case FETCH_HIGHLIGHTS_FAILURE:
      // Return current state on failure
      return state;
    default:
      // Return current state by default
      return state;
  }
};

// Reducer for categories
const categoriesReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      // Update state with new categories array from action payload
      return [...action.payload];
    case FETCH_CATEGORIES_FAILURE:
      // Return current state on failure
      return state;
    default:
      // Return current state by default
      return state;
  }
};

// Reducer for activity
const activityReducer = (state = initialState.activity, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_SUCCESS:
      // Update state with new activity object from action payload
      return action.payload;
    case FETCH_ACTIVITY_FAILURE:
      // Return current state on failure
      return state;
    default:
      // Return current state by default
      return state;
  }
};

// Reducer for error
const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS_FAILURE:
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_ACTIVITY_FAILURE:
      // Update state with error message from action payload
      return action.payload;
    case FETCH_HIGHLIGHTS_SUCCESS:
    case FETCH_CATEGORIES_SUCCESS:
    case FETCH_ACTIVITY_SUCCESS:
      // Clear error message on success
      return null;
    default:
      // Return current state by default
      return state;
  }
};

// Combine all reducers into a single reducer function
const rootReducer = combineReducers({
  highlights: highlightsReducer,
  categories: categoriesReducer,
  activity: activityReducer,
  error: errorReducer,
});

// Export the root reducer
export default rootReducer;
