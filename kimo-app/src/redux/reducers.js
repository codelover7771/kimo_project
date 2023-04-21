import { combineReducers } from "redux";
import {
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE,
} from "./actionTypes";

const initialState = {
  highlights: [],
  categories: [],
  activity: {},
  error: null,
};

const highlightsReducer = (state = initialState.highlights, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS_SUCCESS:
      return [...action.payload];
    case FETCH_HIGHLIGHTS_FAILURE:
      return state;
    default:
      return state;
  }
};

const categoriesReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return [...action.payload];
    case FETCH_CATEGORIES_FAILURE:
      return state;
    default:
      return state;
  }
};

const activityReducer = (state = initialState.activity, action) => {
  switch (action.type) {
    case FETCH_ACTIVITY_SUCCESS:
      return action.payload;
    case FETCH_ACTIVITY_FAILURE:
      return state;
    default:
      return state;
  }
};

const errorReducer = (state = initialState.error, action) => {
  switch (action.type) {
    case FETCH_HIGHLIGHTS_FAILURE:
    case FETCH_CATEGORIES_FAILURE:
    case FETCH_ACTIVITY_FAILURE:
      return action.payload;
    case FETCH_HIGHLIGHTS_SUCCESS:
    case FETCH_CATEGORIES_SUCCESS:
    case FETCH_ACTIVITY_SUCCESS:
      return null;
    default:
      return state;
  }
};


const rootReducer = combineReducers({
  highlights: highlightsReducer,
  categories: categoriesReducer,
  activity: activityReducer,
  error: errorReducer,
});

export default rootReducer;
