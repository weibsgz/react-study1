import React from 'react'

//默认必须export defalult 导出
export default class Header extends React.Component{
   constructor(){
    super(); //调用基类的所有的初始化方法
    this.state = {
      minHeader:false
    };
  }
   swichHeader(){
        this.setState({
            minHeader:!this.state.minHeader
        })
     }

  render(){
    //这个是内联样式
      const styleHeader = {
        header:{
            backgroundColor:"#333",
            color:(this.state.minHeader)? "#fff" : "red",
            "padding-bottom":"15px",
            paddingTop:"15px"
        }
      }

    return (
      <header style={styleHeader.header} className='smallFontSize' onClick = {this.swichHeader.bind(this)}>
        <h1>这里是头部</h1>
      </header>
    )
  }
}
