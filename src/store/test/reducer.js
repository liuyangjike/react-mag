import * as cate from './action-type'
import Immutable from 'immutable'

let defaultState = {
  testList: [1, 2, 3]
}

export const testData = (state = defaultState, action) => {
  switch (action.type) {
    case cate.GETCATEGORY:
      return {...state, ...action}
    default:
      return state
  }
}