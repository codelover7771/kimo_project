import axios from 'axios';
import {
  FETCH_HIGHLIGHTS_REQUEST,
  FETCH_HIGHLIGHTS_SUCCESS,
  FETCH_HIGHLIGHTS_FAILURE,
  FETCH_CATEGORIES_REQUEST,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_FAILURE,
  FETCH_ACTIVITY_REQUEST,
  FETCH_ACTIVITY_SUCCESS,
  FETCH_ACTIVITY_FAILURE
} from './actionTypes';

// Fetch highlights data from the server
export const fetchHighlights = () => {
  return (dispatch) => {
    dispatch(fetchHighlightsRequest());
    axios.get('https://web-dev.dev.kimo.ai/v1/highlights')
      .then(response => {
        const highlights = response.data;
        dispatch(fetchHighlightsSuccess(highlights));
      })
      .catch(error => {
        dispatch(fetchHighlightsFailure(error.message));
      });
  };
};

// Action creator for FETCH_HIGHLIGHTS_REQUEST
export const fetchHighlightsRequest = () => {
  return {
    type: FETCH_HIGHLIGHTS_REQUEST
  };
};

// Action creator for FETCH_HIGHLIGHTS_SUCCESS
export const fetchHighlightsSuccess = (highlights) => {
  return {
    type: FETCH_HIGHLIGHTS_SUCCESS,
    payload: highlights
  };
};

// Action creator for FETCH_HIGHLIGHTS_FAILURE
export const fetchHighlightsFailure = (error) => {
  return {
    type: FETCH_HIGHLIGHTS_FAILURE,
    payload: error
  };
};

// Fetch categories data from the server
export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesRequest());
    axios.get('https://web-dev.dev.kimo.ai/v1/categories')
      .then(response => {
        const categories = response.data;
        dispatch(fetchCategoriesSuccess(categories));
      })
      .catch(error => {
        dispatch(fetchCategoriesFailure(error.message));
      });
  };
};

// Action creator for FETCH_CATEGORIES_REQUEST
export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};

// Action creator for FETCH_CATEGORIES_SUCCESS
export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

// Action creator for FETCH_CATEGORIES_FAILURE
export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

// Fetch activity data based on activityType from the server
export const fetchActivity = (activityType) => {
  return (dispatch) => {
    dispatch(fetchActivityRequest());
    axios.get(`https://web-dev.dev.kimo.ai/v1/activities/${activityType}`)
      .then(response => {
        const activity = response.data;
        console.log(activity)
        dispatch(fetchActivitySuccess(activity));
      })
      .catch(error => {
        dispatch(fetchActivityFailure(error.message));
      });
  };
};

// Action creator for FETCH_ACTIVITY_REQUEST
export const fetchActivityRequest = () => {
  return {
    type: FETCH_ACTIVITY_REQUEST
  };
};

// Action creator for FETCH_ACTIVITY_SUCCESS
export const fetchActivitySuccess = (activity) => {
  return {
    type: FETCH_ACTIVITY_SUCCESS,
    payload: activity
  };
};

// Action creator for FETCH_ACTIVITY_FAILURE
export const fetchActivityFailure = (error) => {
  return {
    type: FETCH_ACTIVITY_FAILURE,
    payload: error
  };
};
