import React from "react";

import {Link,IndexLink} from 'react-router';
export default class App extends React.Component{
    constructor(params){
    	super(params);
    	console.log(params);
    }
    render(){
    	return (
    		<div>

    			<h2>后台管理系统</h2>
    			<div>
				     <IndexLink  to="" activeStyle={{color:'red'}}>App</IndexLink>
					 <Link  activeStyle={{color:'red'}}  to="/home">home</Link>
					 <Link  activeStyle={{color:'red'}}  to="/products">product</Link>
					 <Link  activeStyle={{color:'red'}}  to="/contactUs">contactUs</Link>
				</div>
				{this.props.children}
    		</div>


    		);
    }

}