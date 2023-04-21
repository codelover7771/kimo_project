import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import highlightsReducer from './reducers/highlightsReducer';
import categoriesReducer from './reducers/categoriesReducer';
import activitiesReducer from './reducers/activitiesReducer';

const rootReducer = combineReducers({
  highlights: highlightsReducer,
  categories: categoriesReducer,
  activities: activitiesReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;