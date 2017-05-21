import React from 'react'

export default class BodyChild extends React.Component{
  render(){
    return (
      <div>
      <p>
        子页面输入双向绑定父组件的值：<input onChange={this.props.handleChildValueChange}/>
      </p>
      <p>从爷爷index.js 继承的 userid是： {this.props.userid}</p>
      <p>父页面用 ...this.props 可以完全继承上一级的 给 下一级</p>
      </div>
    )
  }
}
