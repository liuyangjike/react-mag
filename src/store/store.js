import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as home from './home/reducer'
import * as category from './category/reducer'
import * as  test from './test/reducer'
import thunk from 'redux-thunk'

let store = createStore(
  combineReducers({...home, ...category, ...test}),
  applyMiddleware(thunk)
)

export default store