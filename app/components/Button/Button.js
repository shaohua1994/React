import React from 'react';

export default class Button extends React.Component{
	render(){
		return (
			<button onClick={this.props.toggleLiked} type="button">{this.props.btnName}</button>
			
			
			);
	}
	sayHello(){
		alert("你好");
	}
}
Button.defaultProps={
	btnName:"按钮"
}