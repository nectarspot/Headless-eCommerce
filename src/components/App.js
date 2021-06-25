import React, { useEffect } from "react"
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom"
import Products from "./Products"

import { Home } from "./Home"
import ProductView from "./ProductView"
import { useShopify } from "../hooks"

import { HeaderPage } from "./HeaderPage"
import { FooterPage } from "./FooterPage"
import CollectionProduct from "./CollectionProduct"

export default (props) => {
	const {
		createShop,
		createCheckout,
		fetchProducts,
	    fetchCollections,
		fetchCollection,
	} = useShopify()

	useEffect(() => {
		createShop()
		fetchProducts()
		createCheckout()
		 fetchCollections()
		 fetchCollection()
	}, [])

	return (
		<Router>
			<div id="App">
												
				<HeaderPage />
				<Switch>
				<Route  path="/product/:handle"  component={ProductView} />
				<Route  path="/collection/:collectionId" component={CollectionProduct} />
				<Route  path="/collections/all/" component={Products} />
				<Route path="/">
				<Home />
			    </Route>
				</Switch>	
				<FooterPage />
				
			</div>
		</Router>
	)
}
