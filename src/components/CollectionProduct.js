import React, { useEffect} from "react"
import { useShopify } from "../hooks"
import { Button , Container , Row , Col} from 'react-bootstrap';
import { ImCart } from "react-icons/im"
import '../collections.css'
import {HiEye} from "react-icons/hi"
import { Link } from "react-router-dom"

export default (props) => {
	const {
		products,
		collection,
		collections , 
		fetchCollection,
		fetchProduct ,
	} = useShopify()
	

		
	const collectionId = props.match.params.collectionId

	function handleClick(e, product_id) {
		e.preventDefault()
		const handle = product_id
		fetchProduct(handle).then((res) => {
			props.history.push(`/product/${res.handle}`)
		})
	}


	useEffect(() => {
		fetchCollection(collectionId)
	}, [collectionId])


	return (
		<div className="collections-page">
		<Container>
		<div >
        <h1 className="section-title ">PRODUCTS</h1>
        </div>
		<Row className="flex-reverse">
              <Col lg={3}  >
			  <div className="sidebar-widget-area">
        
                    <div className="single-sidebar-widget">
                      
                      <h6 className="widget-title">Categories</h6>
                      
                      
                      <div className="menu-list cl_list">
                        <ul>
						{
							collections.map(collection =>(
							<li className="" key={collection.id}><Link to={`/collection/${collection.id}`}>{collection.title} </Link></li>                                       
																   
						   ))
							}   
                        </ul>
                      </div>
                    </div>
                    
                    <div className="single-sidebar-widget">
                      
                      <h6 className="widget-title">Brand</h6>
                      
                      <div className="menu-list cl_list">
                        <ul>
                          
                          <li><a href="/collections/vendors?q=ditecmarineproducts">ditecmarineproducts</a></li>
                          
                        </ul>
                      </div>
                    </div>
                    
                  </div>

			 
			  </Col>

			  <Col lg={9}>
                  <Row >

			

			{collection.products &&
				collection.products.map((product, i) => {
					const image = product.images[0]
					return (
						<Col md={4}>
                      <div className="inner-category">
						<div className="product-img pointer" key={product.id + i}>
							{image ? (
								<img src={image.src} onClick={(e) => handleClick(e, product.handle)}  alt={`${product.title} product shot`} />
							) : null}
							</div>
							
							<div className="product-info  gallery-info">
								<h6 className="product-name">{product.title}</h6>
								<div className="d-flex justify-content-between align-items-center">
                                <div>                          
                                <p className="mb-0">${product.variants[0].price}</p>
                                </div>
                                <div className="quick-icons">
                                <a href="#" className="cart-icon">
                                <i><ImCart /></i>
                                </a>
                                <span onClick={(e) => handleClick(e, product.handle)} className="view-icon pointer" >
                                <i ><HiEye /></i>
                                </span>
                                </div>
                                </div>
								
							</div>

						</div>
						
						</Col>
					)
				})}

				
				</Row>
				</Col>
				</Row>
				</Container>
		</div>
	)
}
