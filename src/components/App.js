import React, { useEffect ,Suspense ,lazy} from "react"
import { BrowserRouter as Router, Route,  Switch } from "react-router-dom"
import { HeaderPage } from "./HeaderPage"
import { FooterPage } from "./FooterPage"
import { useShopify } from "../hooks"



const ProductView = lazy(() => import('./ProductView'))
const CollectionProduct = lazy(() => import('./CollectionProduct'))

const Home = lazy(() => import('./Home'))
const Products = lazy(() => import('./Products'))

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
		
				<Suspense fallback={<div>Loading...</div>}>
				<Switch>
				<Route  path="/product/:handle"  component={ProductView} />
				<Route  path="/collection/:collectionId" component={CollectionProduct} />
				<Route  path="/collections/all/" component={Products} />
				<Route path="/">
				<Home />
			    </Route>
				</Switch>	
				</Suspense>
				
				<FooterPage />
				
			</div>
		</Router>
	)
}
