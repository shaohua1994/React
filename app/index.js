import React from 'react';
import ReactDom from 'react-dom';

import {Router,Route,IndexRoute,browserHistory,hashHistory} from 'react-router';

import Home from  './page/home/Home';
import Product from './page/product/Product';
import Products from './page/products/Products';
import ContactUs from './page/contactUs/ContactUs';
import App from "./page/app/App";

ReactDom.render(
   <Router history={hashHistory}>
   		<Route path="/" component={App}>
   			 <IndexRoute component={Home}/>
   			 <Route path="/home" component={Home}/>
   			 <Route path="/products"  component={Products}>
                   <Route path="/products/(:productId)" component={Product}/>
   			 </Route>
   			 <Route path="/contactUs" component={ContactUs}/>

   		</Route>

   </Router>,
   document.getElementById("root")

);
