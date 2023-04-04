import {Products, ShoppingCart, Checkout, Orders } from "../pages";


const routes = [
	// root path for entry into application
	{path: '/', exact: true, component: Products},
	{path: '/home/products', exact: true, component: Products},
	{path: '/product/shopping-cart', exact: true, component: ShoppingCart},
	{path: '/product/shopping-cart/checkout', exact: true, component: Checkout},
	{path: '/account/orders', exact: true, component: Orders},
	

];

export default routes;