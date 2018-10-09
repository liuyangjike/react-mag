import * as cate from './action-type'
import Immutable from 'immutable'

let defaultState = {
  dataList: []
}

export const proData = (state = defaultState, action) => {
  switch (action.type) {
    case cate.GETCATEGORY:
      return {...state, ...action}
    default:
      return state
  }
}