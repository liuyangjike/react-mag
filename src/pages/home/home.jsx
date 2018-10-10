import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {is, fromJS} from 'immutable'
import API from '@/api/api';  // api
import envconfig from '@/envconfig/envconfig'
import PropTypes from 'prop-types'
import {saveFormData, saveImg, clearData} from '@/store/home/action'
import { testAction } from '@/store/test/action'
import Button from '@/components/button/button'
import Alert from '@/components/alert/alert'
import Header from '@/components/header/header'
import './home.scss'


class Home extends Component {  // 不会自动绑定this,需要手动绑定,否则this不能获取当前组件实例对象。
  static propTypes = {   // 规定props的数据格式, 组件类的属性
    formData: PropTypes.object.isRequired,
    saveFormData: PropTypes.func.isRequired,
    saveImg: PropTypes.func.isRequired,
    clearData: PropTypes.func.isRequired
  };

  state = {  // 组件状态
    alertStatus: false,
    alertTip: ''
  }

  selectedCateList = [];
  
  initData = props => {
    this.selectedCateList = []
    props.proData.dataList.forEach(item => {
      if (item.selectStatus && item.selectNum) {
        this.selectedCateList.push(item)
      }
    })
  }

  closeAlert = () => {
    this.setState({
      alertStatus: false,
      alertTip: ''
    })
  }

  // 上传图片, 并将图片地址存到redux,保留状态
  uploadImg = async event => {
    try {
      let formdata = new FormData()  // 创建一个空对象,用append添加数据
      formdata.append('file', event.target.files[0])
      let result = await API.uploadImg({data: formdata})
      this.props.saveImg(envconfig.imgURL + result.image_path)
    } catch (err) {
      console.error(err)
    }
  }

  submitForm = () => {
    const {price, desc, quantity} = this.props.formData
    let alertTip = ''
    if (!price.toString().length) {
      alertTip = '请填写金额'
    } else if (!desc.toString().length) {
      alertTip = '请填写描述'
    } else if (!quantity.toString().length) {
      alertTip = '请填写数量'
    }else {
      alertTip = '添加数据成功'
      this.props.clearData()
    }
    this.setState({
      alertStatus: true,
      alertTip
    })
  }


  shouldComponentUpdate(nextProps, nextState) {  // 是否需要重新渲染
    return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state), fromJS(nextState))
  }

  componentWillMount () {  // 初始化数据
    this.initData(this.props)
  }
  handleInput = (type, event) => {
    let value = event.target.value;
    switch (type) {
      case 'price':
        value = value.replace(/\D/g, '');
        break;
      case 'desc':
        break;
      case 'quantity':
        value = value.replace(/\D/g, '');
        break;
      default:
    }
    this.props.saveFormData(value, type);
  };
  render() {
    return (
      <div className="home-container">
        <Header title="首页" order />
        <p className="common-title">输入您的信息</p>
        <form className="home-form">
          <div className="home-form-item">
            <span>单价:</span>
            <input
              type="text"
              placeholder="请输入单价"
              value={this.props.formData.price}
              onChange={this.handleInput.bind(this, "price")}
            />
          </div>
          <div className="home-form-item">
            <span>描述:</span>
            <input
              type="text"
              placeholder="请输入描述"
              value={this.props.formData.desc}
              onChange={this.handleInput.bind(this, "desc")}
            />
          </div>
          <div className="home-form-item">
            <span>数量:</span>
            <input
              type="text"
              placeholder="请输入数量"
              value={this.props.formData.quantity}
              onChange={this.handleInput.bind(this, 'quantity')}
            />
          </div>
        </form>
        <div>
          <p className="common-title">请选择商品的类别</p>
          <Link to="/category" className="common-select-btn">
            {
              this.selectedCateList.length ? <ul className="selected-cate-list">
                {this.selectedCateList.map((item, index) => {
                  return (
                    <li key={index} className="selected-cate-item ellipsis">
                      {item.name}
                    </li>
                  );
                })}
              </ul>: '选择类别'
            }
          </Link>
        </div>
        <div className='upload-img-con'>
            <p className='common-title'>请上传物品照片</p>
            <div className='file-lable'>
              <span className='common-select-btn'>上传图片</span>
              <input type="file" onChange={this.uploadImg}/>
            </div>
            <img src={this.props.formData.imgpath} className='select-img'/>
        </div>
        <Button className='submit-btn' clickCallBack={this.submitForm} text='提交'/>
        <Alert closeAlert={this.closeAlert} alertTip={this.state.alertTip} alertStatus={this.state.alertStatus}/>
      </div>
    );
  }
}


export default connect(state => ({   // mapStateToProps 允许store中的数据作为props绑定到组件上
  formData: state.formData,  // 后面的值store的state数据
  proData: state.proData,  // 后面的值store的state数据
  test: state.testData
}),{   //  mapDispatchToProps 将action作为props绑定到组件上
  saveFormData,
  saveImg,
  clearData,
  testAction
})(Home)