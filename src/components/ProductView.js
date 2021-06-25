import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useShopify } from "../hooks"
import { Button , Container , Row , Col} from 'react-bootstrap';
import '../components/product.css'

export default (props) => {
	const {
		product,
		fetchProduct,
		openCart,
		checkoutState,
		addVariant,
	} = useShopify()
	const handle = props.match.params.handle
	const defaultSize = product.variants && product.variants[0].id.toString()
	const [size, setSize] = useState("")
	const [quantity, setQuantity] = useState(1)



	function changeSize(sizeId, quantity) {
		openCart()
		if (sizeId === "") {
			sizeId = defaultSize
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		} else {
			const lineItemsToAdd = [
				{ variantId: sizeId, quantity: parseInt(quantity, 10) },
			]
			const checkoutId = checkoutState.id
			addVariant(checkoutId, lineItemsToAdd)
		}
	}

	useEffect(() => {
		fetchProduct(handle)
	}, [handle])

	return (
		<div id="individualProduct" className="ptb-30 product-view">
		<div className="container-product">
		<Row>
		<Col md={4}>
				<div className="single-product-image">
					{product.images &&
						product.images.map((image, i) => {
							return (
								<img
									key={image.id + i}
									src={image.src}
									alt={`${product.title} product shot`}
								/>
							)
						})}
				</div>
		</Col>
		<Col md={8}>
		<div className="single-product-info" >
				<div className="product-info">
					<h2 className="product-name">{product.title}</h2>
				</div>
				<div className="product-price">
				<h2 className="product-variant-price">${product.variants && product.variants[0].price}</h2>
				</div>

					<div>
						<label className="label-style" htmlFor={"prodOptions"}>Size</label>
						<select
						    className="select-style"
							id="prodOptions"
							name={size}
							onChange={(e) => {
								setSize(e.target.value)
							}}
						>
							{product.variants &&
								product.variants.map((item, i) => {
									return (
										<option
											value={item.id.toString()}
											key={item.title + i}
										>{`${item.title}`}</option>
									)
								})}
						</select>
					</div>
					<div>
						<label className="label-style">Quantity</label>
						<input
							className="quantity"
							type="number"
							min={1}
							value={quantity}
							onChange={(e) => {
								setQuantity(e.target.value)
							}}
						></input>
						<button
						className="read-more atoc"
						onClick={(e) => changeSize(size, quantity)}
					>
						Add to Cart
					</button>
					</div>
					<p className="product-short-desc">
					{product.description}
				    </p>
					
				</div>
				
				</Col>
				</Row>
			</div>



		</div>
	)
}
