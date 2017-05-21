import React from 'react'
import BodyChild from './bodyChild'
import PropTypes from 'prop-types';

import ReactMixins from 'react-mixin'
import Mixins from './mixins'

//默认必须export defalult 导出
export default class Body extends React.Component{
  constructor(){
    super(); //调用基类的所有的初始化方法
    this.state = {
      username : "weibin",
      age:18
    };
  }

  componentWillMount(){
    console.log('正在加载')
  }
  componentDidMount(){
      console.log('加载完毕')
  }

  //如果bind(this) 有第二个参数 就设置成第二个参数的值 没有就改成30
  changeState(data){
    if(data === null || data ==="undefined"){
      this.setState({
        age:30
      })
    }
    else{
      this.setState({
        age:data
      })
    }

    this.refs.myBtn.style.color = 'red';
    Mixins.log()

  }

  handleChildValueChange(event){
    this.setState({
      age:event.target.value
    })
  }

  render(){
    var username = "weibin";
    var isDisabled = true;

    console.log('render....') //正在加载  render.... 加载完毕
    //模拟后台数据改变this.state
    setTimeout(() => {
      this.setState({
        username:"weibin is changed"
      })
    },2000);
    return (
      <div>
        <h1>state里的数据...{this.state.username}</h1>
        <h1>props里的数据...{this.props.username}</h1>
        <h2>
          {username == "" ? "用户名为空" : "用户名为：" + username}
                 接收到父组件的  {this.props.userid}
        </h2>
        <p>
            年龄是： {this.state.age}
        </p>
        {/*注释*/}
        <p>
          <button disabled = {isDisabled}>click</button>
        </p>
        {/*需要在点击事件后加bind(this) 否则报错*/}
        <p>
          <button ref="myBtn" onClick = {this.changeState.bind(this,99)}>点击改变state的值</button>
        </p>
        {/*父组件向子组件传值 {...this.props }取父亲的所有传过来的属性给下一级 */}
        <BodyChild {...this.props} handleChildValueChange = {this.handleChildValueChange.bind(this)}/>
      </div>
    )
  }
}

//验证

Body.propTypes  = {
  userid:PropTypes.number.isRequired
};

//默认值
Body.defaultProps = {
  username: 'syy2222'
};

//需要安装 react-mixin插件
//mixins 固定写法 ReactMixins是import的插件  body是class , Mixins是自定义的
ReactMixins(Body.prototype, Mixins);