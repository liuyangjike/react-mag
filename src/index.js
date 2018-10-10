import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import FastClick from 'fastclick'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import store from '@/store/store'
import registerServiceWorker from './registerServiceWorker';
import './style/base.scss'

FastClick.attach(document.body)  // 移动端的点击事件


const render = Component => {  // 渲染函数
  ReactDOM.render(
  <Provider store={store}>
    <AppContainer>
      <Component/>
    </AppContainer>
  </Provider>,
  document.getElementById('root'),
  )
}

render(Route)

if (module.hot) {  // 热加载
  module.hot.accept('./router/', ()=>{
    render(Route)
  })
}

registerServiceWorker();
