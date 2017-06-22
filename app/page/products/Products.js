import React from 'react';

export default class Products extends React.Component{
	constructor(params){
		super(params);
		console.log(params);
	}
	render(){
		return (
		    <div>
		    	<h3>产品详情页面</h3>
		    	{this.props.children}
		    </div>	
		);
	}
}