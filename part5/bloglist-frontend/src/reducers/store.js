import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import blogReducer from './blogReducer'
import userReducer from './userReducer'

const reducer = combineReducers({
    blogs: blogReducer,
    user: userReducer
})

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default store