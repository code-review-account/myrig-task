import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './reducers/users-reducer'

export let rootReducer = combineReducers({
    usersReducer
})

type rootReducerType = typeof rootReducer;
export type appStateType = ReturnType<rootReducerType>;
export type appDispatchType = typeof store.dispatch;

let store = createStore(rootReducer, applyMiddleware(thunk));

export default store;