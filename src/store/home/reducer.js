import * as home from './action-type'

let defaultState = {
  price: '', // 金额
  desc: '', // 描述
  quantity: '', // 手机号
  imgpath: '' // 图片地址
}

// 首页表单数据
export const formData = (state = defaultState, action = {}) => {
  switch (action.type) {
    case home.SAVEFORMDATA:
      return { ...state,
        ...{
          [action.datatype]: action.value
        }
      }
    case home.SAVEIMG:
      return { ...state,
        ...{
          imgpath: action.path
        }
      }
    case home.CLEARDATA:
      return { ...state,
        ...defaultState
      }
    default:
      return state
  }
}