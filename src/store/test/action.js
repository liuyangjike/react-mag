import * as  cate from './action-type'

//初始化分类数据,保存至redux
export const testAction = () => {
  return {
    type: cate.GETCATEGORY,
    dataList: []
  }
}