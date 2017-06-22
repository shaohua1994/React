import React from 'react';

export default class Home extends React.Component{
	constructor(params){
		super(params);
		console.log(params);
	}
	render(){
		return (
				<h3>home页面</h3>

			);
	}
}