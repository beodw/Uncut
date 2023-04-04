import {Products, ShoppingCart, Checkout, Orders } from "../pages";


const routes = [
	// root path for entry into application
	{path: '/', exact: true, component: Products},
	{path: '/products', exact: true, component: Products},
	{path: '/shopping-cart', exact: true, component: ShoppingCart},
	{path: '/checkout', exact: true, component: Checkout},
	{path: '/orders', exact: true, component: Orders},
	

];

export default routes;