import React, {Component} from 'react'
import {is, fromJS} from 'immutable'
import {NavLink, Switch, Route, Redirect} from 'react-router-dom'
import Header from '@/components/header/header'
import RecordList from './components/recordList'
import './record.css'


class Record extends Component {
  state = {
    flagBarPos: '13%'
  }

  setFlagBarPos = type => {
    let flagBarPos
    switch (type) {
      case 'passed':
        flagBarPos = '17%'
        break;
      case 'audited':
        flagBarPos = '49%'
        break
      case 'failed':
        flagBarPos = '83%'
        break
      default:
        flagBarPos = '17%'
    }
    this.setState({flagBarPos})
  }

    componentWillReceiveProps (nextProps) {
      // 属性变化时设置头部底部标签位置
      let currentType = this.props.location.pathname.split('/')[2]
      let type = nextProps.location.pathname.split('/')[2]
      if (currentType !== type) {
        this.setFlagBarPos(type)
      }
    }

    componentWillMount () {
      // 初始化设置头部底部标签位置
      let type = this.props.location.pathname.split('/')[2]
      this.setFlagBarPos(type)
    }

    render () {
      return <main className="common-con-top">
          <Header title="记录" />
          <section className="record-nav-con">
            <nav className="record-nav">
              <NavLink to={`${this.props.match.path}/passed`} className="record-nav-link">已通过</NavLink>
              <NavLink to={`${this.props.match.path}/audited`} className="record-nav-link">待审核</NavLink>
              <NavLink to={`${this.props.match.path}/failed`} className="record-nav-link" style={{borderRight: 'none'}} >未通过</NavLink>
              <div className='nav-flag-bar' style={{left: this.state.flagBarPos}}></div>
            </nav>
          </section>
          {/* 子路由在父级配置, react-router新特性, 更加灵活*/}
          <Switch>
            <Route path={`${this.props.match.path}/:type`} component={RecordList}/>
            <Redirect from={`${this.props.match.path}`} to={`${this.props.match.path}/passed`} exact component={RecordList}/>
          </Switch>
        </main>;
    }

}


export default Record
