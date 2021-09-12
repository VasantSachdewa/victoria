import { createStore, applyMiddleware, combineReducers } from 'redux';
import  ThunkMiddleware  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import jobsReducer from './reducers/jobReducers';

const rootReducer = combineReducers({
	jobs: jobsReducer
})

const composedEnhancer = composeWithDevTools(applyMiddleware(ThunkMiddleware))

const store = createStore(
	rootReducer, composedEnhancer
)

export default store
