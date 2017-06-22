import React from 'react';
import {browserHistory} from 'react-router';

export default class ContactUs extends React.Component{
	constructor(params){
		super(params);
		console.log(params);
	}
	render(){
		setTimeout(function(){
			browserHistory.push("/products//0001");
		},2000);
		return(
			<h3>这是ContactUS页面</h3>
			);
	}
}