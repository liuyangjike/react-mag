import React, {Component} from 'react'
import {is, fromJS} from 'immutable'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'
import './header.css'


export default class Header extends Component{
  
  static propTypes = {
    order: PropTypes.any,
    title: PropTypes.string.isRequired,
    confirm: PropTypes.any
  }

  state = {
    navState: false, // 导航栏是否显示
  }

  // css动画: 设置侧边栏为目标组件
  FirstChild = props => {  // component={List}组件会接收到this.props.children
    const childrenArray = React.Children.toArray(props.children)
    return childrenArray[0] || null
  }

  // 切换左侧导航栏状态
  toggleNav = () => {
    this.setState({
      navState: !this.state.navState
    })
  }
  render () {
    return <header className="header-container">
        <span className="header-icon icon-caidan" onClick={this.toggleNav} />
        <span className="header-title">{this.props.title}</span>
        {
          this.props.order&&<NavLink to="/record" exact className="header-link icon-dingdan"></NavLink>
        }

        <ReactCssTransitionGroup
          component={this.FirstChild}
          transitionName="nav"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {
            this.state.navState && <aside key="nav-slide" className="nav-slide-list" onClick={this.toggleNav}>
            <NavLink to="/" exact className="nav-link icon-arrow-right-copy">首页</NavLink>
            <NavLink to="/balance" exact className="nav-link icon-arrow-right-copy">提现</NavLink>
            <NavLink to="/helpcenter" exact className="nav-link icon-arrow-right-copy">帮助</NavLink>
            </aside>
          }
        </ReactCssTransitionGroup>
      </header>;
  }
}