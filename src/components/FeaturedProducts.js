import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../components/all.css';

export const FeaturedProducts = () => {
    return (
        <div className="mb-100">
           <Container>
           <div className="section-heading text-center">
           <h2 className="section-title">Featured Products</h2>
           </div>
                <Row>
                <Col xs={6} sm={6} md={3} lg={3}>
                    <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/product/triton">
                                <Image className="img" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/trition-500x470.png" />
                            </Link>
                        
                            <Link to="/product/triton" className="overlay-shop-btn">
                             Shop Now
                            </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/product/triton">Triton</Link></h6>
                            <p className="product-price">$62.00</p>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/product/boat-soap">
                                <Image className="img" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/boat-soap-500x470.png" />
                            </Link>
                    
                            <Link to="/product/boat-soap" className="overlay-shop-btn">
                            Shop Now
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/product/boat-soap">Boat Soap</Link></h6>
                            <p className="product-price">$16.00</p>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/product/metalon-px">
                                <Image className="img" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/metalon_500x470_89d141b4-3397-4c35-ba21-a44f75fb9d3e.png?v=1624010530" />
                            </Link>
        
                            <Link to="/product/metalon-px" className="overlay-shop-btn">
                            Shop Now
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/product/metalon-px">Metalon PX</Link></h6>
                            <p className="product-price">$14.95</p>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3} lg={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/product/glasstec">
                                <Image className="img" src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/glasstec-500x470.png?v=1624010574" />
                            </Link>

                            <Link to="/product/glasstec" className="overlay-shop-btn">
                            Shop Now
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/product/glasstec">Glasstec</Link></h6>
                            <p className="product-price">$65.00</p>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container> 
        </div>
    )
}
