import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import ComponentHeader from './components/header'
import ComponentFooter from './components/footer'
import ComponentBody from './components/body'
/*import './style/style.css';*/
//只能有一个根节点
class Index extends React.Component{
  render(){
    var ccc;
    var user = true; //假设用户已经的登录
    if(user){
      ccc = <ComponentHeader />
    }else{
      ccc = "别的什么组件"
    }
    return (
      <div>
        {ccc}
        <ComponentBody userid = {123}  username = "syy"/>
        <ComponentFooter />
      </div>
    )
  }
}


export default Index;
