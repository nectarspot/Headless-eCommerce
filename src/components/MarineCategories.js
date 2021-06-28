import React from 'react'
import { useShopify } from "../hooks"
import { Container , Row , Col , Image } from 'react-bootstrap'
import { AiOutlineShopping } from "react-icons/ai"
import { Link } from "react-router-dom";
import '../components/all.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default (props) => {
	const {
		products,
		collection,
		collections , 
		fetchCollections,
		fetchProduct ,
	} = useShopify()

    


    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
            <h2 className="section-title">Marine Categories</h2>
            </div>
                <Row >
                {collections &&
                    collections.map((collection, i) => {
                        const image = collection.image
                        return(
                    <Col xs={6} sm={6} md={3} key={collection.id + i}>

                    <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to={`/collection/${collection.id}`}>
                                <LazyLoadImage className="img" src={image.src} effect="blur" alt={image.id} />
                            </Link>
                            <Link to={`/collection/${collection.id}`} className="shopping-bag">
                             <i><AiOutlineShopping /></i>
                            </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                           <h6 className="product-name"><Link to={`/collection/${collection.id}`}>{collection.title}</Link></h6>
                           
                        </div>
                    </div>
                            
                    </Col>
                    )})}
                </Row>
            </Container>
        </div>
    )
}
