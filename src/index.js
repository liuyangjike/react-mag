import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/'
import './index.css';
import FastClick from 'fastclick'
import {Provider} from 'react-redux'
import {AppContainer} from 'react-hot-loader'
import store from '@/store/store'
import registerServiceWorker from './registerServiceWorker';
import './style/base.css'

FastClick.attach(document.body)


const render = Component => {
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

if (module.hot) {
  module.hot.accept('./router/', ()=>{
    render(Route)
  })
}

registerServiceWorker();
