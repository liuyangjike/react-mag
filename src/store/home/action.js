import * as home from './action-type'
// 触发的行为


// 保存表单数据
export const saveFormData = (value, datatype) => {
  return {
    type: home.SAVEFORMDATA,
    value,
    datatype,
  }
}

//  保存图片地址
export const saveImg = path => {
  return {
    type: home.SAVEIMG,
    path
  }
}

// 清除图片
export const clearData = () => {
  return {
    type: home.CLEARDATA,
  }
}
