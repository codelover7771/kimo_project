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

export const fetchHighlightsRequest = () => {
  return {
    type: FETCH_HIGHLIGHTS_REQUEST
  };
};

export const fetchHighlightsSuccess = (highlights) => {
  return {
    type: FETCH_HIGHLIGHTS_SUCCESS,
    payload: highlights
  };
};

export const fetchHighlightsFailure = (error) => {
  return {
    type: FETCH_HIGHLIGHTS_FAILURE,
    payload: error
  };
};

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

export const fetchCategoriesRequest = () => {
  return {
    type: FETCH_CATEGORIES_REQUEST
  };
};

export const fetchCategoriesSuccess = (categories) => {
  return {
    type: FETCH_CATEGORIES_SUCCESS,
    payload: categories
  };
};

export const fetchCategoriesFailure = (error) => {
  return {
    type: FETCH_CATEGORIES_FAILURE,
    payload: error
  };
};

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

export const fetchActivityRequest = () => {
  return {
    type: FETCH_ACTIVITY_REQUEST
  };
};

export const fetchActivitySuccess = (activity) => {
  return {
    type: FETCH_ACTIVITY_SUCCESS,
    payload: activity
  };
};

export const fetchActivityFailure = (error) => {
  return {
    type: FETCH_ACTIVITY_FAILURE,
    payload: error
  };
};
