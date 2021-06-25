import React from 'react'
import { Container , Row , Col , Image, Form, Button } from 'react-bootstrap'
import { FiMapPin, FiPhoneCall, FiMail } from "react-icons/fi"
import { FaTelegramPlane } from "react-icons/fa"
import { Link } from "react-router-dom";
import '../components/all.css';

export const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col sm={12} md={4}>
                        <Link to="/">
                            <Image src="https://cdn.shopify.com/s/files/1/0569/2378/3325/files/logo-black_medium.png?v=1621852363" alt="Logo" />
                        </Link>
                        <div className="address">
                            <ul>
                                <li className="d-flex">
                                    <span className="mr-2"><i><FiMapPin /></i></span>
                                    <p>W229N2512 Duplainville Rd, Waukesha, WI 53186, United States </p>
                                 </li>
                                <li className="d-flex">
                                 <span className="mr-2"><i><FiPhoneCall /></i></span>
                                    <p>(800) 572-4390</p>
                                </li>
                                <li className="d-flex">
                                 <span className="mr-2"><i><FiMail /></i></span>
                                <p>info@ditecmarineproducts.com</p>
                                </li>
                             </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                    <div className="services-list">
                        <h6 className="widget-title">Marine Products</h6>
                        <div className="service-list">
                            <ul>
                                <li className="d-flex">
                                    <Link to="/">Complete Teak Care</Link>
                                 </li>
                                <li className="d-flex">
                                    <Link to="/">Exterior Care</Link>
                                </li>
                                <li className="d-flex">
                                    <Link to="/">Metal Protection</Link>
                                </li>
                                <li className="d-flex">
                                    <Link to="/">Glass Preservation</Link>
                                </li>
                             </ul>
                             </div>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                    <div className="services-list">
                        <h6 className="widget-title">Newsletter</h6>
                        <div className="single-footer-newsletter">
                        <p>Join our newsletter for periodic promotions and new launches.</p>
                        
                        <Form className="position-relative">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Button variant="primary" type="submit" className="ftr-submit-btn"><FaTelegramPlane /></Button>
                        </Form>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
