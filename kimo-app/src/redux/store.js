import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// import the reducers
import highlightsReducer from './reducers/highlightsReducer';
import categoriesReducer from './reducers/categoriesReducer';
import activitiesReducer from './reducers/activitiesReducer';

// combine the reducers into a single root reducer
const rootReducer = combineReducers({
  highlights: highlightsReducer,
  categories: categoriesReducer,
  activities: activitiesReducer
});

// create the Redux store with the root reducer and middleware
const store = createStore(rootReducer, applyMiddleware(thunk));

// export the store
export default store;
