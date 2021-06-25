import React from 'react'
import { Container , Row , Col , Image } from 'react-bootstrap'
import { AiOutlineShopping } from "react-icons/ai"
import { Link } from "react-router-dom";
import '../components/all.css';

export const MarineCategories = () => {
    return (
        <div className="mb-100">
            <Container>
            <div className="section-heading text-center">
            <h2 className="section-title">Marine Categories</h2>
            </div>
                <Row>
                    <Col xs={6} sm={6} md={3}>
                    <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/">
                                <Image className="img" src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/complete-teak-care.png?v=1621939650" />
                            </Link>
                            <Link to="/" className="shopping-bag">
                             <i><AiOutlineShopping /></i>
                            </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/">Complete Teak Care</Link></h6>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/">
                                <Image className="img" src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/gla.png?v=1621939755" />
                            </Link>
                            <Link to="/" className="shopping-bag">
                            <i><AiOutlineShopping /></i>
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/">Metal Protection</Link></h6>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/">
                                <Image className="img" src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/glass-preservation-system.png?v=1621939718" />
                            </Link>
                            <Link to="/" className="shopping-bag">
                            <i><AiOutlineShopping /></i>
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/">Glass Preservation System</Link></h6>
                        </div>
                    </div>
                    </Col>
                    <Col xs={6} sm={6} md={3}>
                        <div className="inner-category">
                        <div className="hover-effect product-img">
                            <Link to="/">
                                <Image className="img" src="//cdn.shopify.com/s/files/1/0569/2378/3325/files/exterior-care-maintenance.png?v=1621939688" />
                            </Link>
                            <Link to="/" className="shopping-bag">
                            <i><AiOutlineShopping /></i>
                           </Link>
                            <div className="hover-overlay"></div>
                        </div>
                        <div className="product-info gallery-info">
                            <h6 className="product-name"><Link to="/">Exterior Care & Maintenance</Link></h6>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
