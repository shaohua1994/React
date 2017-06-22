import React from 'react';
import Button from '../Button/Button';
import Input from "../input/Input";
export default class Hello extends React.Component{
   constructor(){
   	  super();
      console.log("构造函数开始执行");
   	  this.state = {
   	  	  isLiked:false,
   	  	  btnName:"点我",
           inputValue:""
   	  }
   }
   changeValue(event){
        this.setState({inputValue:event.target.value})
        // console.log(event.target.value);
   }
   toggleLiked(){ 
   		this.setState({
   			isLiked:!this.state.isLiked
   		})

   }
   sayHello(){
        this.refs.Hello.sayHello();
   }
   render(){
         setTimeout(()=>{
            this.setState({btnName:"点我干嘛呀"})
         },2000)
   	   return (
   	   		<div>

   	   			<p >你开心吗?<span>{this.state.isLiked?"开心":"不开心"}</span></p>
   	   			<Button ref="Hello" toggleLiked={this.toggleLiked.bind(this)} btnName={this.state.btnName}/>
                  <button onClick={this.sayHello.bind(this)}>调用子组件的方法</button>
                  <Input changeValue={this.changeValue.bind(this)}/>
                  <p >{this.state.inputValue}</p>
   	   		</div>
   	   	);
   }
   componentWillMount(){
        this.setState({isLiked:true});
        console.log("即将渲染");
   }
   componentDidMount(){
        console.log("渲染完成");
   }

}
Hello.defaultProps={
	name:'点我吧'
}